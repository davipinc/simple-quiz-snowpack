import { html } from 'lit-html';
import { showResult } from '../marking';
import { state, resetState } from '../state';

function prevQuestion() {
  if (state.currentQuestion === 0) {
    alert('You are on the first question already');
    return;
  }

  state.currentQuestion -= 1;
}

function nextQuestion() {
  if (state.currentQuestion === state.totalQuestions - 1) {
    alert('You are on the last question already');
    return;
  }

  state.currentQuestion += 1;
}

function reset() {
  if (!confirm('Are you sure you want to reset?')) {
    return;
  }
  resetState();
}

export default function () {
  return html`
    <button @click=${prevQuestion}>Back</button>
    <button @click=${nextQuestion}>Next</button>
    <button @click=${showResult}>Check</button>
    <button @click=${reset}>Reset</button>
  `;
}
