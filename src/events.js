import { ANSWER_MODEL, QUESTION_MODEL, RESULT_MODEL, STATE_MODEL } from './constants';
import { updateQuiz } from './update';

export function updateFromModel(model, modelProp) {
  console.debug('update', model.name, modelProp);

  if (model.name === ANSWER_MODEL || model.name === QUESTION_MODEL) {
    updateQuiz();
    return;
  }

  if (model.name === RESULT_MODEL) {
    updateQuiz();
    // TODO: add results template 
    return;
  }

  if (model.name === STATE_MODEL) {
    if (['currentQuestion', 'questions', 'answers', 'results', 'totalQuestions'].indexOf(modelProp) >= 0) {
      updateQuiz();
      return;
    }

    console.warn(`Not sure what to render - MODEL: ${String(model.name)} PROP: ${modelProp}`);
    return;
  }

  throw new Error('Unhandled model update type');
}
