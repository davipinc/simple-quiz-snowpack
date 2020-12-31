import { importQuestions } from './setup';
import { getModel } from './models';
import { STATE_MODEL } from './constants';

export const initialState = {
  currentQuestion: 0,

  questions: [],
  answers: [],
  results: [],
  ready: false,
  started: false,
  quizzesGenerated: 0
};

export const state = getModel(STATE_MODEL, initialState);

Object.defineProperty(state, 'totalQuestions', {
  get: function () {
    return state.questions.length;
  }
});

export function initialiseState() {
  state.ready = false;
  console.debug('initialiseState');
  Object.keys(initialState).forEach((key) => {
    state[key] = initialState[key];
  });

  importQuestions();
  state.ready = true;
}

export function startQuiz() {
  state.started = true;
}

export function resetState() {
  console.debug('resetState');
  initialiseState();
}

export function newQuestions() {
  resetState();
  importQuestions();
}

export function getCurrentQuestion() {
  const { questions, currentQuestion } = state;
  return questions[currentQuestion];  
}

export default state;
