import { renderSummary, renderQuestion } from './render'; 
import { state, resetState } from './state';
import questions from './content/questions';

export function endQuiz() {
  renderSummary();
}

export function reset() {
  resetState();
  renderQuestion();
}

export function nextQuestion() {
  state.currentQuestion += 1;

  if (!questions[state.currentQuestion]) {
    endQuiz();
    return;
  }
  renderQuestion();
}