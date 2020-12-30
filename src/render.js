import { render } from 'lit-html';
import state from './state';
import options from './options';

import textTemplate from './questionTypes/textTemplate';
import summaryTemplate from './templates/summaryTemplate';

function getAppNode() {
  return document.querySelectorAll(options.selector)[0];
}

export function renderQuestion() {
  render(textTemplate(state.currentQuestion), getAppNode());  
}

export function renderSummary() {
  render(summaryTemplate(), getAppNode());  
}