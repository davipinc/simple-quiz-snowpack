import state, { initialState } from './state';
import { setOptions } from './options';
import getQuestions from '../data/questions/getSpellingQuestions';
import answerModel from '../models/answerModel';
import resultModel from '../models/resultModel';
import questionModel from '../models/questionModel';

export function startQuiz() {
  state.started = true;
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
  state.quizzesGenerated += 1;
  state.questions = getQuestions().map((question) => {
    return questionModel(question);
  });

  resetAnswers();
  resetResults();
}

export function reset() {
  state.ready = false;
  console.debug('initialiseState');
  Object.keys(initialState).forEach((key) => {
    state[key] = initialState[key];
  });

  importQuestions();
  state.ready = true;
}

export function newQuestions() {
  reset();
  importQuestions();
}

export default function main(options = { selector: '' }) {
  setOptions(options);
  reset();
}
