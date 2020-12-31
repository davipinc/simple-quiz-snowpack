import { getDataProp } from './utils';

export function speak(phrase) {
  var utterance = new SpeechSynthesisUtterance(phrase);
  window.speechSynthesis.speak(utterance);
}

export function readOut(event) {
  const word = getDataProp(event, 'speak');
  speak(word);
}
