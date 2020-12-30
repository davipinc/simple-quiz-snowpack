import { html } from 'lit-html';
import { updateFromModel } from './events';

import { varType } from './utils';

export const TEXT_QUESTION = Symbol('text');
export const QUESTION_MODEL = Symbol('question');
export const ANSWER_MODEL = Symbol('answer');
export const STATE_MODEL = Symbol('state');

export const interactiveShape = { question: {}, answer: {} };

export function spell(word) {
  const phrase = `How do you spell ${word}`;

  return {
    id: word.toLowerCase(),
    instruction: html` <h2 aria-live="assertive" aria-atomic="true" aria-labelledby="${phrase}">${phrase}</h2> `,
    type: TEXT_QUESTION,
    answers: [word]
  };
}

export function getModel(modelName = Symbol('whatever'), defaultState = {}, options = { readOnly: false }) {
  const model = {};
  const prefix = '_';

  // { foo: 1, bar: "whatever"} => { _foo: 1, _bar: "whatever"}
  Object.keys(defaultState).forEach((key) => {
    model[`${prefix}${key}`] = defaultState[key];
  });

  Object.defineProperty(model, 'name', {
    get: function () {
      return modelName;
    }
  });

  // add getters and setters
  Object.keys(defaultState).forEach((key) => {
    const initialType = varType(defaultState[key]);
    const propName = `${prefix}${key}`;
    Object.defineProperty(model, key, {
      get: function () {
        return this[propName];
      },
      set: function (value) {
        if (options.readOnly) {
          throw new Error(`${String(modelName)} is read-only`);
        }
        const type = varType(value);

        if (type !== initialType) {
          throw new Error(`Will not coerce type of ${key} from ${initialType} to ${type}`);
        }

        this[propName] = value;
        updateFromModel(model, key);
        return;
      }
    });
  });

  return model;
}

export function getReadOnlyModel(modelName, defaultState) {
  return getModel(modelName, defaultState, { readOnly: false });
}

export function questionModel(
  question = {
    id: '',
    instruction: html`<!-- empty -->`,
    type: Symbol('unknown-question-type'),
    answers: []
  }
) {
  const model = getReadOnlyModel(QUESTION_MODEL, question);

  return model;
}

export function answerModel(questionId) {
  const model = getModel(ANSWER_MODEL, {
    text: ''
  });
  Object.defineProperty(model, 'questionId', {
    get: function () {
      return questionId;
    }
  });
  return model;
}
