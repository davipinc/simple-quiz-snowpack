import questions from './content/questions';
import state from './state';
import { answerModel } from './models';

export function importQuestions() {
  state.questions = questions;
  state.totalQuestions = questions.length;
}

export function resetAnswers() {
  const { questions, answers } = state;

  // clear answers
  answers.splice(0, answers.length);

  questions.forEach( question => {
    answers.push(answerModel(question.id));
  });
}