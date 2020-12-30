import { initialiseState } from './state';
import { setOptions } from './options';

export function quiz( options = { selector : ''}) {
  setOptions(options);
  initialiseState();
}
