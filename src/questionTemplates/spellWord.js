import { html } from 'lit-html';
import { TEXT_INPUT, SPELL_WORD_QUESTION } from '../constants';
import { speak } from '../speech';

const spellQuestion = (word) => {
  function readOutWord() {
    speak(word);
  }

  function blockAnchor(event) {
    event.preventDefault();
  }

  const phrasing = 'How do you spell';
  const ariaInstruction = `${phrasing} ${word}?`;
  const instructionHtml = html`<div>
    <a href="#" @click=${blockAnchor} class="aria-only" role="main" aria-live="polite">${ariaInstruction}</a>
    <div aria-hidden="true">
      <span class="phrasing">${phrasing}</span>
      <input
        type="button"
        @click=${readOutWord}
        data-speak="${word}"
        autocomplete="off"
        spellcheck="false"
        value="Word &#9654;"
      />
    </div>
  </div>`;  

  return {
    id: word,
    instruction: html`<p>${instructionHtml}</p>`,
    questionType: SPELL_WORD_QUESTION,
    answerType: TEXT_INPUT,
    answers: [word]
  };
};

export default spellQuestion;
