import { speakNow } from '../utils/speech';
import { state, resetState } from './state';
import { getCurrentQuestion, newQuestions } from './core';

export function prevQuestion() {
  if (state.currentQuestion === 0) {
    alert('You are on the first question already');
    return;
  }

  state.currentQuestion -= 1;
}

export function nextQuestion() {
  if (state.currentQuestion === state.totalQuestions - 1) {
    alert('You are on the last question already');
    return;
  }

  state.currentQuestion += 1;
}

export function reset() {
  if (!confirm('Are you sure you want to reset?')) {
    return;
  }
  resetState();
}

export function newQuiz() {
  if (!confirm('Are you sure you want to try a new quiz?')) {
    return;
  }
  newQuestions();
}

export function readQuestion() {
  if (!state.ready) return;

  const question = getCurrentQuestion();

  const phrasing = question.instructionsText;
  speakNow(phrasing);
}