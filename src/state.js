import { importQuestions, resetAnswers } from './setup';
import { renderQuestion } from './render';

export const state = {};

const initialState = {
  currentQuestion: 0,
  totalQuestions: 0,
  
  questions: [],
  answers: []
};

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
    console.info(`Removing state '${key}': ${state[key]}`);
    delete state[key];
  });
}

export function initialiseState() {
  Object.keys(initialState).forEach(key => {
    console.log(`Overwriting ${key}`, state[key], 'with', initialState[key]);

    if (Array.isArray(initialState[key])) {
      // arrays
      state[key] = initialState[key].slice(0);
    } else if (typeof initialState[key] === 'object') {
      // objects
      state[key] = Object.assign({}, initialState[key]);
    } else {
      // primitives
      state[key] = initialState[key];
    }
  });

  importQuestions();
  resetAnswers();
}

export function resetState() {
  const { uninitialisedKeys } = checkState(state);
  removeKeys(uninitialisedKeys);
  initialiseState();
  renderQuestion();
}

export default state;