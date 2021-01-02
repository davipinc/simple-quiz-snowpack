import hooks from '../app/hooks';
import update from '../app/renderer';

import { varType } from './variables';

function iterateEffect(updateTarget, fireProp = '') {
  Object.keys(hooks).forEach((effectName) => {
    const effect = hooks[effectName];
    const hasThisFunction = typeof effect[fireProp] === 'function';
    if (effect.matches.indexOf(updateTarget) >= 0 && hasThisFunction) {
      console.debug(effectName);
      effect[fireProp]();
    }
  });
}

function updateFromModel(updateTarget, details = {}) {
  console.group(updateTarget);
  console.debug(details);
  console.groupEnd();

  iterateEffect(updateTarget, 'beforeUpdate');
  update();
  iterateEffect(updateTarget, 'afterUpdate');
}

export function addCalculatedProps(obj, props = {}) {
  Object.keys(props).forEach((propName) => {
    Object.defineProperty(obj, propName, {
      get: props[propName]
    });
  });
}

export function modelArray(thisModel, array = []) {
  return { isModelArray: true, model: thisModel, initialValue: array };
}

export function model(props = { name: '', fields: {}, calculated: {}, readOnly: false }) {
  const { name, fields, calculated, readOnly } = props;
  const obj = {};
  const prefix = '_';

  // { foo: 1, bar: "whatever"} => { _foo: 1, _bar: "whatever"}
  Object.keys(fields).forEach((key) => {
    obj[`${prefix}${key}`] = fields[key];
  });

  Object.defineProperty(obj, 'name', {
    get: function get() {
      return name;
    }
  });

  // add getters and setters
  Object.keys(fields).forEach((key) => {
    const propName = `${prefix}${key}`;
    const propNameArrayModel = `${propName}_arrayModel`;
    let initialType;

    if (typeof fields[key] === 'object' && fields[key].isModelArray) {
      initialType = 'array';

      Object.defineProperty(obj, key, {
        get: function get() {
          return this[propName];
        },
        set: function set(value) {
          const oldValue = this[propName];

          if (value.isModelArray) {
            // this is the initial write, so initialise this array
            this[propName] = fields[key].initialValue;
            this[propNameArrayModel] = fields[key].model;
          } else {
            this[propName] = value.map(this[propNameArrayModel]);
          }

          const updateTarget = `${obj.name}::${key}`;

          updateFromModel(updateTarget, { model: obj, property: key, old: oldValue, new: value });
        }
      });
      return;
    }

    initialType = varType(fields[key]);

    Object.defineProperty(obj, key, {
      get: function get() {
        return this[propName];
      },
      set: function set(value) {
        if (readOnly) {
          throw new Error(`${name} is read-only`);
        }

        const type = varType(value);

        if (type !== initialType) {
          throw new Error(`Will not coerce type of ${key} from ${initialType} to ${type}`);
        }

        const oldValue = this[propName];

        this[propName] = value;

        const updateTarget = `${obj.name}::${key}`;

        updateFromModel(updateTarget, { model: obj, property: key, old: oldValue, new: value });
      }
    });
  });

  addCalculatedProps(obj, calculated);

  return obj;
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

export function modelFactory(func) {
  // eslint-disable-next-line no-param-reassign
  func.collection = (initialArray = []) => {
    return modelArray(func, initialArray);
  };
  return func;
}
