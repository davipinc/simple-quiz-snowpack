import { html } from 'lit-html';
import { showResult } from '../marking';
import { nextQuestion, prevQuestion, reset } from '../navigation';

export default function () {
  return html`
    <button @click=${prevQuestion}>Back</button>
    <button @click=${nextQuestion}>Next</button>
    <button @click=${showResult}>Check</button>
    <button @click=${reset}>Reset</button>
  `;
}
