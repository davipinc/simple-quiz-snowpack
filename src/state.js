import { importQuestions } from './setup';
import { getModel, STATE_MODEL } from './models';

export const initialState = {
  currentQuestion: 0,
  
  questions: [],
  answers: []
};

export const state = getModel(STATE_MODEL, initialState);

function checkState(currentState = {}) {
  const stateKeys = Object.keys(currentState);
  const initialStateKeys = Object.keys(initialState);

  const uninitialisedKeys = stateKeys.filter(key => initialState[key] === undefined);  
  const removedKeys = initialStateKeys.filter(key => state[key] === undefined);  

  if (uninitialisedKeys.length) {
    console.warn('You have added state but not defined an initial value', uninitialisedKeys);
  }
  
  if (removedKeys.length) {
    console.warn('You have removed state items', removedKeys);
  }

  return {
    uninitialisedKeys,
    removedKeys
  };
}

function removeKeys(uninitialisedKeys) {
  uninitialisedKeys.forEach(key => {
    console.debug(`Removing state '${key}': ${state[key]}`);
    delete state[key];
  });
}


export function initialiseState() {
  console.debug('initialiseState');
  importQuestions();
}

export function resetState() {
  console.debug('resetState');
  const { uninitialisedKeys } = checkState(state);
  removeKeys(uninitialisedKeys);
  initialiseState();
}

export default state;