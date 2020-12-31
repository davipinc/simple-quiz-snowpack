import { html } from 'lit-html';
import { ANSWER_MODEL, QUESTION_MODEL } from './constants';
import { updateFromModel } from './events';

import { varType } from './utils';

export const interactiveShape = { question: {}, answer: {} };

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
    questionType: Symbol('unknown-question-type'),
    answerType: Symbol('unknown-answer-type'),
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
