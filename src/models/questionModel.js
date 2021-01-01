import { html } from 'lit-html';
import { QUESTION_MODEL } from '../app/constants';
import { getReadOnlyModel } from '../core/models';

export default function questionModel(
  question = {
    id: '',
    instructionsText: '',
    questionTemplate: html`<!-- empty -->`,
    questionType: Symbol('unknown-question-type'),
    answerType: Symbol('unknown-answer-type'),
    answers: []
  }
) {
  const model = getReadOnlyModel(QUESTION_MODEL, question);

  return model;
}
