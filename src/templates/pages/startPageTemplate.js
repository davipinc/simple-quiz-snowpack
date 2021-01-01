import { html } from 'lit-html';
import { startQuiz } from '../../app/main';

export default function startPageTemplate() {
  return html` <button @click=${startQuiz}>Start Quiz</button> `;
}
