import { html } from 'lit-html';
import { interactiveShape, TEXT_QUESTION } from '../models';
import { state } from '../state';

import textQuestion from '../interactives/textQuestion';
import controlsTemplate from '../panels/controlsTemplate';

function getTemplate(data = interactiveShape) {
  const templateType = data.question.type;

  if (templateType === TEXT_QUESTION) {
    return textQuestion(data);
  }

  throw new Error('Unknown question type');
}

export default (data = interactiveShape) => {
  return html`
    <section class="heading-block heading">
      <h1>Question ${state.currentQuestion + 1} of ${state.totalQuestions}</h1>
    </section>

    <section class="interactive-block" aria-live="assertive">${getTemplate(data)}</section>

    <section class="controls-block">${controlsTemplate()}</section>
  `;
};
