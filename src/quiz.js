import { initialiseState } from './state';
import { setOptions } from './options';
import { renderQuestion } from './render';

export function quiz( options = { selector : ''}) {
  setOptions(options);
  initialiseState();
  renderQuestion();
}
