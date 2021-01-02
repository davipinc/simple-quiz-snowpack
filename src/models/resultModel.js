import { PENDING_ANSWER, RESULT_MODEL } from '../app/constants';
import { model } from '../core/models';

export default function resultModel() {
  return model({
    name: RESULT_MODEL,
    fields: {
      score: PENDING_ANSWER
    },
    calculated: {},
    readOnly: false
  });
}
