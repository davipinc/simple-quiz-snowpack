import { ANSWER_MODEL } from "../app/constants";
import { getModel } from "../standard/models";

export default function answerModel(questionId) {
  const model = getModel(ANSWER_MODEL, {
    text: ''
  });
  Object.defineProperty(model, 'questionId', {
    get: function () {
      return questionId;
    }
  });
  return model;
}