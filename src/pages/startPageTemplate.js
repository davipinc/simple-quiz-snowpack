import { html } from 'lit-html';
import { startQuiz } from '../state';

export default function () {
  return html`
    <button @click=${startQuiz}>Start Quiz</button>
  `;
}
