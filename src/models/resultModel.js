import { PENDING_ANSWER, RESULT_MODEL } from '../app/constants';
import { model } from '../core/models';

export default function resultModel(answer = { qid: '' }) {
  const { qid } = answer;
  return model({
    name: RESULT_MODEL,
    fields: {
      score: PENDING_ANSWER,
      qid
    },
    calculated: {},
    readOnly: false
  });
}
