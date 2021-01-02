import { html } from 'lit-html';

import headingTemplate from '../panels/headingTemplate';
import resultTemplate from '../panels/resultTemplate';
import controlsTemplate from '../panels/controlsTemplate';
import questionTemplate from '../panels/questionTemplate';
import answerTemplate from '../panels/answerTemplate';

export default () => {
  return html`
    <section class="instruction-block" aria-live="assertive">${questionTemplate()}</section>
    <section class="interactive-block" aria-live="polite">${answerTemplate()}</section>
    <section class="result-block" aria-live="assertive">${resultTemplate()}</section>
    <section class="heading-block heading" aria-live="off">${headingTemplate()}</section>
    <section class="controls-block">${controlsTemplate()}</section>
  `;
};
