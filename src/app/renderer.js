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

export default function renderer() {
  if (!state.ready) {
    render(loadingTemplate(), getAppNode());
    return;
  }

  if (!state.started) {
    render(startPageTemplate(), getAppNode());
    return;
  }

  if (!state.finished) {
    const { currentQuestion, questions, answers, results } = state;
    const question = questions[currentQuestion];
    const answer = answers[currentQuestion];
    const result = results[currentQuestion];

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
