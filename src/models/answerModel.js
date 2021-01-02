import { ANSWER_MODEL } from '../app/constants';
import { model } from '../core/models';

export default function answerModel(questionId) {
  return model({
    name: ANSWER_MODEL,
    fields: {
      text: '',
      questionId
    },
    calculated: {},
    readOnly: false
  });
}
