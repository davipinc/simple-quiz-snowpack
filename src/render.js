import { render } from 'lit-html';
const app = document.querySelectorAll('#app')[0];
import { state } from './state';
import questions from './content/questions';

import quizTemplate from './templates/quizTemplate';
import summaryTemplate from './templates/summaryTemplate';

export function renderQuestion() {
  const { currentQuestion } = state;
  render(quizTemplate(questions[currentQuestion]), app);  
}

export function renderSummary() {
  render(summaryTemplate(), app);  
}