const PAUSE = 750; // to wait out screen reader inputs
function speak(phrase, immediately = false) {
  if (immediately) {
    window.speechSynthesis.cancel();
  }

  const utterance = new SpeechSynthesisUtterance(phrase);
  utterance.lang = 'fr-FR';
  utterance.rate = 0.85;
  utterance.onend = () => {
    console.debug('Speaking stopped', phrase);
  };
  setTimeout(() => {
    window.speechSynthesis.speak(utterance);
  }, PAUSE);
}

export function speakNow(phrase) {
  return speak(phrase, true);
}

export function speakNext(phrase) {
  return speak(phrase, false);
}
