import { html } from 'lit-html';
import { showResult } from '../../functions/marking';
import { nextQuestion, prevQuestion, resetQuiz, newQuiz, endQuiz } from '../../app/interactions';

export default function controlsTemplate() {
  return html`
    <button @click=${showResult}>Check Answer</button>
    <button @click=${prevQuestion}>Back</button>
    <button @click=${nextQuestion}>Next</button>
    <button @click=${endQuiz}>Finish</button>
    <button @click=${resetQuiz}>Reset</button>
    <button @click=${newQuiz}>New Quiz</button>
  `;
}
