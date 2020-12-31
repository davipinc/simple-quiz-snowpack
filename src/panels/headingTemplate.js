import { html } from 'lit-html';
import { state } from '../state';

export default function () {
  const headingText = `${state.currentQuestion + 1} of ${state.totalQuestions}`;
  return html`<h1>${headingText}</h1> `;
}
