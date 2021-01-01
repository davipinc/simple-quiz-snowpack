import { getModel } from '../core/models';
import { STATE_MODEL } from './constants';

export const initialState = {
  currentQuestion: 0,
  questions: [],
  answers: [],
  results: [],
  ready: false,
  started: false,
  finished: false,
  quizzesGenerated: 0
};

export const state = getModel(STATE_MODEL, initialState);

Object.defineProperty(state, 'totalQuestions', {
  get: () => {
    return state.questions.length;
  }
});

export default state;
