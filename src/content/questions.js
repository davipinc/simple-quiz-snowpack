import { html } from 'lit-html';
import { TEXT_QUESTION } from '../models';

function speak(phrase) {
  var utterance = new SpeechSynthesisUtterance(phrase);
  window.speechSynthesis.speak(utterance);
}
function getDataProp(event, prop) {
  return event.srcElement.dataset[prop];
}
function readOut(event) {
  const word = getDataProp(event, 'word');
  speak(word);
}
const words = ['human', 'wombat'];
const questions = words.map((word) => {
  const phrasing = 'How do you spell';
  const ariaInstruction = `${phrasing} ${word}?`;
  const instructionHtml = html`<div class="aria-only">${ariaInstruction}</div>
    <div aria-hidden="true">
      ${phrasing} <input type="button" @click=${readOut}" data-word="${word}" style="vertical-align:text-bottom"
      value="&#9654;">
    </div>`;
  return {
    id: word,
    instruction: html`<p>${instructionHtml}</p>`,
    type: TEXT_QUESTION,
    answers: [word]
  };
});

export default questions;
