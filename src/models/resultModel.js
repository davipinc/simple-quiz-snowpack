import { PENDING_ANSWER, RESULT_MODEL } from "../app/constants";
import { getModel } from "../standard/models";

export default function resultModel() {
  const model = getModel(RESULT_MODEL, {
    score: PENDING_ANSWER
  });
  return model;
}