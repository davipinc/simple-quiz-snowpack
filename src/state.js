import { importQuestions } from './setup';
import { getModel, STATE_MODEL } from './models';

export const initialState = {
  currentQuestion: 0,
  
  questions: [],
  answers: []
};

export const state = getModel(STATE_MODEL, initialState);

Object.defineProperty( state, 'totalQuestions', {
  get: function() {
    return state.questions.length;
  }
});

export function initialiseState() {
  console.debug('initialiseState');
  Object.keys(initialState).forEach( key => {
    state[key] = initialState[key];
  });

  importQuestions();
}

export function resetState() {
  console.debug('resetState');
  initialiseState();
}

export default state;