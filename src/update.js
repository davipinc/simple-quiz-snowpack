import { render } from 'lit-html';
import state from './state';
import options from './options';

import textTemplate from './questionTypes/textTemplate';
import summaryTemplate from './templates/summaryTemplate';

function getAppNode() {
  return document.querySelectorAll(options.selector)[0];
}

export function updateQuestion() {
  const { currentQuestion, questions, answers } = state;
  const question = questions[currentQuestion];
  const answer = answers[currentQuestion];

  if (!question) {
    console.debug('Questions object not ready yet');
    return;
  }

  if (!answer) {
    console.debug('Answers object not ready yet');
    return;
  }

  const data = {
    question,
    answer
  };

  render(textTemplate(data), getAppNode());  
}

export function updateSummary() {
  render(summaryTemplate(), getAppNode());  
}