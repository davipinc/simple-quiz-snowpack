import questions from './content/questions';
import state from './state';

export function importQuestions() {
  state.questions = questions;
  state.totalQuestions = questions.length;
}