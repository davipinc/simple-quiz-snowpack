import { html } from 'lit-html';
import { resetState, state } from '../state';

function prevQuestion() {
  if (state.currentQuestion === 0) {
    alert('You are on the first question already');
    return;
  }

  state.currentQuestion -= 1;
}

function nextQuestion() {
  if (state.currentQuestion === state.totalQuestions-1) {
    alert('You are on the last question already');
    return;
  }

  state.currentQuestion += 1;
}
function setAnswer(event) {
  console.debug('answer', event.srcElement.value, event);
  state.answers[state.currentQuestion].text = event.srcElement.value;
}

function reset() {
  if (!confirm('Are you sure you want to reset?')) {
    return;
  }
  resetState();
}

export default (data = { question: {}, answer: {}}) => {
  
  return html`
  <section class="question" aria-live="polite">
    <h1>Question ${state.currentQuestion + 1} of ${state.totalQuestions}</h1>
    <p>${data.question.instruction}</p>
  </section>

  <section class="answer">
    <input type="text" title="Type your answer here" .value=${data.answer.text} @keyup=${setAnswer} @change=${setAnswer} />
  </section>

  <section class="answer">
    <button @click=${prevQuestion}>Back</button>
    <button @click=${nextQuestion}>Next</button>
    <button @click=${reset}>Reset</button>
  </section>  
  `;
};