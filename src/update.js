import { render } from 'lit-html';
import state from './state';
import options from './options';

import quizTemplate from './pages/quizTemplate';
import summaryTemplate from './pages/summaryTemplate';
import loadingTemplate from './pages/loadingTemplate';
import startPageTemplate from './pages/startPageTemplate';
import { readQuestion } from './navigation';

function getAppNode() {
  return document.querySelectorAll(options.selector)[0];
}

// function getSelectedNode(selector) {
//   return document.querySelectorAll(options.selector + ' ' + selector)[0];
// }

export function updateQuiz() {
  const { currentQuestion, questions, answers, results, ready, started } = state;
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

  // if (!question) {
  //   console.debug('Questions object not ready yet');
  //   return;
  // }

  // if (!answer) {
  //   console.debug('Answers object not ready yet');
  //   return;
  // }

  // if (!result) {
  //   console.debug('Results object not ready yet');
  //   return;
  // }

  const data = {
    question,
    answer,
    result
  };

  render(quizTemplate(data), getAppNode());
}

export function questionChange() {
  updateQuiz();
  readQuestion();
}

export function updateSummary() {
  render(summaryTemplate(), getAppNode());
}
