import { html, nothing } from 'lit-html';
import { state } from '../state';
import { prevQuestion, nextQuestion, reset} from '../events';

export default (currentQuestion) => {
  const question = state.questions[currentQuestion];
  const answer = state.answers[currentQuestion];

  if (!question) {
    console.debug('Questions object not ready yet');
    return nothing;
  }

  if (!answer) {
    console.debug('Answers object not ready yet');
    return nothing;
  }

  function setAnswer(event) {
    console.debug('answer', event.srcElement.value, event);
    state.answers[state.currentQuestion].text = event.srcElement.value;
  }
  
  // console.log('Q', question);
  // console.log('A', answer);
  
  return html`
  <section class="question" aria-live="polite">
    <h1>Question ${state.currentQuestion + 1} of ${state.totalQuestions}</h1>
    <p>${question.instruction}</p>
  </section>

  <section class="answer">
    <input type="text" title="Type your answer here" .value=${answer.text} @keyup=${setAnswer} @change=${setAnswer} />
  </section>

  <section class="answer">
    <button @click=${prevQuestion}>Back</button>
    <button @click=${nextQuestion}>Next</button>
    <button @click=${reset}>Reset</button>
  </section>  
  `;
};