export function speak(phrase) {
  var utterance = new SpeechSynthesisUtterance(phrase);
  utterance.lang = 'en-GB';
  utterance.rate = 0.85;
  window.speechSynthesis.speak(utterance);
}
