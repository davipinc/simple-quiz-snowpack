import { ANSWER_MODEL } from '../app/constants';
import { model, modelFactory } from '../core/models';

export default modelFactory((question = { qid: '' }) => {
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
});
