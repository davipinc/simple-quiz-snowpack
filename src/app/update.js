import { render } from 'lit-html';
import state from './state';

import quizTemplate from '../templates/pages/quizTemplate';
import summaryTemplate from '../templates/pages/summaryTemplate';
import loadingTemplate from '../templates/pages/loadingTemplate';
import startPageTemplate from '../templates/pages/startPageTemplate';
import options from './options';

function getAppNode() {
  return document.querySelectorAll(options.selector)[0];
}

// function getSelectedNode(selector) {
//   return document.querySelectorAll(options.selector + ' ' + selector)[0];
// }

export default function update() {
  const { currentQuestion, questions, answers, results, ready, started, finished } = state;
  const question = questions[currentQuestion];
  const answer = answers[currentQuestion];
  const result = results[currentQuestion];

  if (!ready) {
    render(loadingTemplate(), getAppNode());
    return;
  }

  if (!started) {
    render(startPageTemplate(), getAppNode());
    return;
  }

  if (!finished) {
    const data = {
      question,
      answer,
      result
    };

    render(quizTemplate(data), getAppNode());
    return;
  }

  // finished
  render(summaryTemplate(), getAppNode());
}
