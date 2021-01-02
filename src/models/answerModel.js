import { ANSWER_MODEL } from '../app/constants';
import { model } from '../core/models';

export default function answerModel(question = { qid: '' }) {
  const { qid } = question;
  return model({
    name: ANSWER_MODEL,
    fields: {
      text: '',
      qid
    },
    calculated: {},
    readOnly: false
  });
}
