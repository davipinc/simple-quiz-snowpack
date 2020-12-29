import { initialiseState } from './state';
import { renderQuestion } from './render';

export function quiz() {
  initialiseState();
  renderQuestion();
}
