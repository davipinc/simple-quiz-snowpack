import { html } from 'lit-html';
import { interactiveShape } from '../models';

import headingTemplate from '../panels/headingTemplate';
import resultTemplate from '../panels/resultTemplate';
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

    <section class="instruction-block" aria-live="assertive">${data.question.questionTemplate}</section>

    <section class="interactive-block" aria-live="polite">${getAnswerTemplate(data)}</section>

    <section class="result-block" aria-live="assertive">${resultTemplate(data)}</section>

    <section class="heading-block heading" aria-live="off">${headingTemplate()}</section>

    <section class="controls-block">${controlsTemplate()}</section>
  `;
};
