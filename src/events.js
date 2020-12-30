import { ANSWER_MODEL, QUESTION_MODEL, STATE_MODEL } from './models';
import { renderSummary, renderQuestion } from './render'; 
import { state, resetState } from './state';

export function endQuiz() {
  renderSummary();
}

export function reset() {
  if (!confirm('Are you sure you want to reset?')) {
    return;
  }
  resetState();
}

export function prevQuestion() {
  if (state.currentQuestion === 0) {
    alert('You are on the first question already');
    return;
  }

  state.currentQuestion -= 1;
}

export function nextQuestion() {
  if (state.currentQuestion === state.totalQuestions-1) {
    alert('You are on the last question already');
    return;
  }

  state.currentQuestion += 1;
}

export function updateFromModel(model, modelProp) {
  console.debug('update', model.name, modelProp);

  if (model.name === ANSWER_MODEL || model.name === QUESTION_MODEL) {
    renderQuestion();
    return;
  }

  if (model.name === STATE_MODEL) {
    if (['currentQuestion', 'questions', 'answers', 'totalQuestions'].indexOf(modelProp) >= 0) {
      renderQuestion();
      return;
    }

    console.warn('Not sure what to render');
    return;
  }

  throw new Error('Unhandled model update type');
}