import { ANSWER_MODEL } from '../app/constants';
import { getModel } from '../core/models';

export default function answerModel(questionId) {
  const model = getModel(ANSWER_MODEL, {
    text: ''
  });
  Object.defineProperty(model, 'questionId', {
    get: () => {
      return questionId;
    }
  });
  return model;
}
