import state, { initialState } from './state';
import getQuestions from '../data/questions/getSpellingQuestions';
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
  state.answers = state.questions.map((question) => ({ qid: question.id }));
}

export function resetResults() {
  state.results = state.answers.map((answer) => ({ qid: answer.qid }));
}

export function importQuestions() {
  state.questions = getQuestions();

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
