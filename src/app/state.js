import { model } from '../core/models';
import { STATE_MODEL } from './constants';

export const initialState = {
  currentQuestion: 0,
  questions: [],
  answers: [],
  results: [],
  ready: false,
  currentPage: 'splash'
};

export const state = model({
  name: STATE_MODEL,
  fields: initialState,
  calculated: {
    totalQuestions() {
      return this.questions.length;
    },
    currentQuestionData() {
      const { currentQuestion, questions, answers, results } = this;
      const question = questions[currentQuestion];
      const answer = answers[currentQuestion];
      const result = results[currentQuestion];

      const data = {
        question,
        answer,
        result
      };

      return data;
    },
    viewingFirstQuestion() {
      return this.currentQuestion === 0;
    },
    viewingLastQuestion() {
      return this.currentQuestion === this.totalQuestions - 1;
    }
  },
  readOnly: false
});

export default state;
