import { html } from 'lit-html';
import { PENDING_ANSWER, RIGHT_ANSWER } from '../../app/constants';
import state from '../../app/state';

export default function resultTemplate() {
  const result = state.currentQuestionData.result.score;
  if (result === PENDING_ANSWER) {
    return html`<div class="result-pending"></div>`;
  }

  const isCorrect = result === RIGHT_ANSWER;
  const resultText = isCorrect ? 'Right answer' : 'Wrong answer';
  return html`<span class="result ${isCorrect ? 'result-correct' : 'result-incorrect'}">${resultText}</span> `;
}
