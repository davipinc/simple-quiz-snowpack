import { importQuestions } from './setup';
import { getModel } from './models';
import { STATE_MODEL } from './constants';

export const initialState = {
  currentQuestion: 0,

  questions: [],
  answers: [],
  results: []
};

export const state = getModel(STATE_MODEL, initialState);

Object.defineProperty(state, 'totalQuestions', {
  get: function () {
    return state.questions.length;
  }
});

export function initialiseState() {
  console.debug('initialiseState');
  Object.keys(initialState).forEach((key) => {
    state[key] = initialState[key];
  });

  importQuestions();
}

export function resetState() {
  console.debug('resetState');
  initialiseState();
}

export default state;
