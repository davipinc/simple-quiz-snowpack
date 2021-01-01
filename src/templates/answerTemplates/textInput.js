import { html } from 'lit-html';
import { ENTER_KEYCODE } from '../../app/constants';
import { interactiveShape } from '../../standard/models';
import { nextQuestion, readQuestion } from '../../app/navigation';
import { state } from '../../app/state';


function setAnswer(event) {
  console.debug('answer', event.srcElement.value, event);
  state.answers[state.currentQuestion].text = event.srcElement.value;
}

function keyHandler(event) {
  if (event.keyCode === ENTER_KEYCODE) {
    nextQuestion();
    return;
  }

  setAnswer(event);
}
export default function (data = interactiveShape) {
  const fieldId = 'answer-text';
  return html`
    <label for=${fieldId}>
    Answer:
      <input
        id=${fieldId}
        type="text"
        placeholder="Type your answer here"
        .value=${data.answer.text}
        @keyup=${keyHandler}
        @change=${setAnswer}
      />
    </label>
    <button @click=${readQuestion}>Read Question</button>
  `;
}
