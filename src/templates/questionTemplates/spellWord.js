import { html } from 'lit-html';
import { TEXT_INPUT, SPELL_WORD_QUESTION } from '../../app/constants';
import { speakNow } from '../../utils/speech';

const spellQuestion = (word) => {
  function readOutWord() {
    speakNow(word);
  }

  function blockAnchor(event) {
    event.preventDefault();
  }

  const phrasing = 'How do you spell';
  const instructionsText = `${phrasing} ${word}?`;
  // <a href="#" @click=${blockAnchor} class="question-phrasing aria-only" role="main" aria-live="polite">${instructionsText}</a>

  const instructionHtml = html`<div>
    <div aria-hidden="true">
      <span class="phrasing">${phrasing}</span>
      <input aria-hidden="true"
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
    questionTemplate: html`<p>${instructionHtml}</p>`,
    instructionsText,
    questionType: SPELL_WORD_QUESTION,
    answerType: TEXT_INPUT,
    answers: [word],
    checkCase: false
  };
};

export default spellQuestion;
