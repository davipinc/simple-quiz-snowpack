import { renderSummary, renderQuestion } from './render'; 
import { state, resetState } from './state';

export function endQuiz() {
  renderSummary();
}

export function reset() {
  if (!confirm('Are you sure you want to reset?')) {
    return;
  }
  resetState();
  renderQuestion();
}

export function prevQuestion() {
  if (state.currentQuestion === 0) {
    alert('You are on the first question already');
    return;
  }

  state.currentQuestion -= 1;
  renderQuestion();
}

export function nextQuestion() {
  if (state.currentQuestion === state.totalQuestions) {
    alert('You are on the last question already');
    return;
  }

  state.currentQuestion += 1;
  renderQuestion();
}
