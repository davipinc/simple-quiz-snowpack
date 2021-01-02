import { html } from 'lit-html';
import { resetQuiz, newQuiz } from '../../app/interactions';

const template = () => html`
  <section class="error-page">
    <p>Are you lost?</p>
    <p>
      <button @click=${resetQuiz}>Reset</button>
      <button @click=${newQuiz}>New Quiz</button>
    </p>
  </section>
`;

export default template;
