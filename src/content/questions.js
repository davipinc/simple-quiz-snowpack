import { html } from 'lit-html';
import { TEXT_QUESTION } from '../models';

const words = ['human', 'wombat'];
const questions = words.map((word) => ({
  id: word,
  instruction: html`<p>How do you spell ${word}</p>`,
  type: TEXT_QUESTION,
  answers: [word]
}));

export default questions;
