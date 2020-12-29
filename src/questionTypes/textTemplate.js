import { html } from 'lit-html';
import { state } from '../state';
import { prevQuestion, nextQuestion, reset} from '../events';

export default (question) => html`
<section class="question" aria-live="polite">
  <h1>Question ${state.currentQuestion + 1} of ${state.totalQuestions}</h1>
  <p>${question.instruction}</p>
</section>

<section class="answer">
  <input type="text" title="Type your answer here" />
</section>

<section class="answer">
  <button @click=${prevQuestion}>Back</button>
  <button @click=${nextQuestion}>Next</button>
  <button @click=${reset}>Reset</button>
</section>
`;