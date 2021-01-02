import { model, modelArray } from '../core/models';
import answerModel from '../models/answerModel';
import questionModel from '../models/questionModel';
import resultModel from '../models/resultModel';
import { STATE_MODEL } from './constants';

export const initialState = {
  currentQuestion: 0,
  questions: modelArray(questionModel, []),
  answers: modelArray(answerModel, []),
  results: modelArray(resultModel, []),
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
