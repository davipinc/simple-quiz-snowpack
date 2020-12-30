import { initialiseState } from './state';
import { setOptions } from './options';
import { updateQuestion } from './events';

export function quiz( options = { selector : ''}) {
  setOptions(options);
  initialiseState();
  updateQuestion();
}
