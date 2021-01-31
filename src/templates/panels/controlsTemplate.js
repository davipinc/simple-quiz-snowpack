import { html, nothing } from 'lit-html';
import { showResult } from '../../functions/marking';
import { nextQuestion, prevQuestion, resetQuiz, newQuiz, endQuiz } from '../../app/interactions';
import state from '../../app/state';

export default function controlsTemplate() {
  return html`
    <button @click=${showResult}>Check Answer</button>
    <button ?disabled=${state.viewingFirstQuestion} @click=${prevQuestion}>Back</button>
    <button ?disabled=${state.viewingLastQuestion} @click=${nextQuestion}>Next</button>
    ${state.viewingLastQuestion
      ? html`<button @click=${endQuiz}>Finish</button>`
      : nothing
    }
    <button @click=${resetQuiz}>Reset</button>
    <button @click=${newQuiz}>New Quiz</button>
  `;
}
