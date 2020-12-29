import { html } from 'lit-html';
import { state } from '../state';
import { nextQuestion, reset} from '../events';

export default (question) => html`
<section class="question" aria-live="polite">
  <h1>Question ${state.currentQuestion + 1}</h1>
  <p>${question.instruction}</p>
</section>
<button @click=${nextQuestion}>Next Question</button>
<button @click=${reset}>Reset</button>
`;