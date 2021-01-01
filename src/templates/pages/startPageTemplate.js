import { html } from 'lit-html';
import { startQuiz } from '../../app/core';

export default function () {
  return html`
    <button @click=${startQuiz}>Start Quiz</button>
  `;
}
