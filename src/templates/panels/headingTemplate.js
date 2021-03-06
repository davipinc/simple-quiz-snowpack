import { html } from 'lit-html';
import { state } from '../../app/state';

export default function headingTemplate() {
  const headingText = `${state.currentQuestion + 1} of ${state.totalQuestions}`;
  return html`<h1>${headingText}</h1> `;
}
