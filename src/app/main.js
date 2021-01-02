import state, { initialState } from './state';
import getQuestions from '../data/questions/getSpellingQuestions';
import answerModel from '../models/answerModel';
import resultModel from '../models/resultModel';
import questionModel from '../models/questionModel';
import { updateModel } from '../core/models';
import { options } from './options';

export function startQuiz() {
  state.currentPage = 'quiz';
}

export function getCurrentQuestion() {
  const { questions, currentQuestion } = state;
  return questions[currentQuestion];
}

export function resetAnswers() {
  const { questions } = state;

  state.answers = questions.map((question) => {
    return answerModel(question.id);
  });
}

export function resetResults() {
  const { answers } = state;

  state.results = answers.map(() => {
    return resultModel();
  });
}

export function importQuestions() {
  state.questions = getQuestions().map((question) => {
    return questionModel(question);
  });

  resetAnswers();
  resetResults();
}

export function reset() {
  console.debug('reset');
  state.ready = false;
  updateModel(state, initialState);
  importQuestions();
  state.ready = true;
}

export function newQuestions() {
  reset();
  importQuestions();
}

export default function main(customOptions = {}) {
  updateModel(options, customOptions);
  reset();

  return {
    options,
    state
  };
}
