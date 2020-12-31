import { html } from 'lit-html';
import { interactiveShape } from '../models';
import { state } from '../state';

function setAnswer(event) {
  console.debug('answer', event.srcElement.value, event);
  state.answers[state.currentQuestion].text = event.srcElement.value;
}

export default function (data = interactiveShape) {
  return html`
    <input
      type="text"
      placeholder="Type your answer here"
      .value=${data.answer.text}
      @keyup=${setAnswer}
      @change=${setAnswer}
    />
  `;
}
