import { html } from 'lit-html';
import { interactiveShape } from '../models';

import headingTemplate from '../panels/headingTemplate';
import textInput from '../answerTemplates/textInput';
import controlsTemplate from '../panels/controlsTemplate';
import { TEXT_INPUT } from '../constants';

function getAnswerTemplate(data = interactiveShape) {
  const answerType = data.question.answerType;

  if (answerType === TEXT_INPUT) {
    return textInput(data);
  }

  throw new Error('Unknown question type');
}

export default (data = interactiveShape) => {
  return html`
    <section class="heading-block heading">${headingTemplate()}</section>

    <section class="instruction-block" aria-live="polite">${data.question.instruction}</section>

    <section class="interactive-block" aria-live="polite">${getAnswerTemplate(data)}</section>

    <section class="controls-block">${controlsTemplate()}</section>
  `;
};
