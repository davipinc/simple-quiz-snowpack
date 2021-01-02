import { html } from 'lit-html';
import { QUESTION_MODEL } from '../app/constants';
import { model } from '../core/models';

export default function questionModel(
  question = {
    id: '',
    instructionsText: '',
    questionTemplate: html`<!-- empty -->`,
    questionType: 'unknown-question-type',
    answerType: 'unknown-answer-type',
    answers: []
  }
) {
  return model({
    name: QUESTION_MODEL,
    fields: question,
    calculated: {},
    readOnly: true
  });
}
