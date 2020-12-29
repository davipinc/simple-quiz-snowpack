import { html } from 'lit-html';
const TEXT = Symbol('text');

export function spell(word) {
  return {
    instruction: html`
      <h2>How do you spell '${word}'</h2>
    `,
    type: TEXT,
    answers: [
      word
    ]
  };
}