import { PENDING_ANSWER, RESULT_MODEL } from '../app/constants';
import { model, modelFactory } from '../core/models';

export default modelFactory((answer = { qid: '' }) => {
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
});
