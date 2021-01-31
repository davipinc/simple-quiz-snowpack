import { speakNow } from '../core/speech';
import { state } from './state';
import { finishQuiz, getCurrentQuestion, newQuestions, reset } from './main';

export function prevQuestion() {
  if (state.viewingFirstQuestion) {
    alert('You are on the first question already');
    return;
  }

  state.currentQuestion -= 1;
}

export function nextQuestion() {
  if (state.viewingLastQuestion) {
    alert('You are on the last question already');
    return;
  }

  state.currentQuestion += 1;
}

export function resetQuiz() {
  if (!confirm('Are you sure you want to reset?')) {
    return;
  }
  reset();
}

export function newQuiz() {
  if (!confirm('Are you sure you want to try a new quiz?')) {
    return;
  }
  newQuestions();
}

export function endQuiz() {
  if (!confirm('Are you sure you want to submit your answers?')) {
    return;
  }
  finishQuiz();
}

export function readQuestion() {
  if (!state.ready) return;

  const question = getCurrentQuestion();

  const phrasing = question.instructionsText;
  speakNow(phrasing);
}
