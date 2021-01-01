import { updateFromModel } from '../app/events';

import { varType } from './variables';

export const interactiveShape = { question: {}, answer: {} };

export function getModel(modelName = 'whatever', defaultState = {}, options = { readOnly: false }) {
  const model = {};
  const prefix = '_';

  // { foo: 1, bar: "whatever"} => { _foo: 1, _bar: "whatever"}
  Object.keys(defaultState).forEach((key) => {
    model[`${prefix}${key}`] = defaultState[key];
  });

  Object.defineProperty(model, 'name', {
    get: function get() {
      return modelName;
    }
  });

  // add getters and setters
  Object.keys(defaultState).forEach((key) => {
    const initialType = varType(defaultState[key]);
    const propName = `${prefix}${key}`;
    Object.defineProperty(model, key, {
      get: function get() {
        return this[propName];
      },
      set: function set(value) {
        if (options.readOnly) {
          throw new Error(`${modelName} is read-only`);
        }
        const type = varType(value);

        if (type !== initialType) {
          throw new Error(`Will not coerce type of ${key} from ${initialType} to ${type}`);
        }

        this[propName] = value;
        updateFromModel(model, key);
      }
    });
  });

  return model;
}

export function getReadOnlyModel(modelName, defaultState) {
  return getModel(modelName, defaultState, { readOnly: false });
}

export function updateModel(obj = {}, customObject = {}) {
  Object.keys(customObject).forEach((key) => {
    const isChanged = obj[key] !== customObject[key];
    const propertyExists = obj[key] !== undefined;

    if (!propertyExists) {
      throw new Error(`Non-existent parameter '${key}' on ${obj.name}`);
    }

    if (isChanged) {
      console.debug('Modified prop', key);
    }
    // eslint-disable-next-line no-param-reassign
    obj[key] = customObject[key];
  });
}
