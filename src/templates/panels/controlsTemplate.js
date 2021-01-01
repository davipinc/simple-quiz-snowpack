import { html } from 'lit-html';
import { showResult } from '../../app/marking';
import { nextQuestion, prevQuestion, reset, newQuiz } from '../../app/navigation';

export default function () {
  return html`
    <button @click=${showResult}>Check Answer</button>
    <button @click=${prevQuestion}>Back</button>
    <button @click=${nextQuestion}>Next</button>
    <button @click=${reset}>Reset</button>
    <button @click=${newQuiz}>New Quiz</button>
  `;
}