import { getModel } from '../core/models';
import { STATE_MODEL } from './constants';

export const initialState = {
  currentQuestion: 0,
  questions: [],
  answers: [],
  results: [],
  ready: false,
  currentPage: 'splash'
};

export const state = getModel(STATE_MODEL, initialState);

Object.defineProperty(state, 'totalQuestions', {
  get: () => {
    return state.questions.length;
  }
});

Object.defineProperty(state, 'currentQuestionData', {
  get: () => {
    const { currentQuestion, questions, answers, results } = state;
    const question = questions[currentQuestion];
    const answer = answers[currentQuestion];
    const result = results[currentQuestion];

    const data = {
      question,
      answer,
      result
    };

    return data;
  }
});

export default state;
