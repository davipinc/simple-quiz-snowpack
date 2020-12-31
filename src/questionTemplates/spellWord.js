import { html } from 'lit-html';
import { TEXT_INPUT, SPELL_WORD_QUESTION } from '../constants';
import { readOut } from '../speech';

const spellQuestion = (word) => {
  const phrasing = 'How do you spell';
  const ariaInstruction = `${phrasing} ${word}?`;
  const instructionHtml = html`<div class="aria-only">${ariaInstruction}</div>
    <div aria-hidden="true">
      ${phrasing} <input type="button" @click=${readOut}" data-speak="${word}" style="vertical-align:text-bottom"
      value="&#9654;">
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
