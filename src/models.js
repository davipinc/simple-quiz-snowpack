import { renderQuestion } from './render';
import { html } from 'lit-html';
const TEXT = Symbol('text');

export function spell(word) {
  return {
    id: word.toLowerCase(),
    instruction: html`
      <h2>How do you spell '${word}'</h2>
    `,
    type: TEXT,
    answers: [
      word
    ]
  };
}

export function answerModel(questionId) {
  return {
    _questionId: questionId,
    _text: '',
    get questionId(){ return this._questionId; },
    get text(){ return this._text; },
    set text( value ){
      this._text = value;
      renderQuestion();
    }
  };  
}