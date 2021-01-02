import { render } from 'lit-html';
import state from './state';

import quizTemplate from '../templates/pages/quizTemplate';
import summaryTemplate from '../templates/pages/summaryTemplate';
import loadingTemplate from '../templates/pages/loadingTemplate';
import startPageTemplate from '../templates/pages/startPageTemplate';
import errorPageTemplate from '../templates/pages/errorPageTemplate';
import options from './options';

function getAppNode() {
  return document.querySelectorAll(options.selector)[0];
}

function renderApp(template) {
  const app = getAppNode();
  render(template, app);
  return app;
}

export default function renderer() {
  if (!state.ready) {
    return renderApp(loadingTemplate());
  }

  switch (state.currentPage) {
    case 'splash':
      return renderApp(startPageTemplate());
    case 'quiz':
      return renderApp(quizTemplate());
    case 'summary':
      return renderApp(summaryTemplate());
    default:
      return renderApp(errorPageTemplate());
  }
}
