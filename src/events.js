import { ANSWER_MODEL, QUESTION_MODEL, STATE_MODEL } from './models';
import { updateQuiz } from './update';

export function updateFromModel(model, modelProp) {
  console.debug('update', model.name, modelProp);

  if (model.name === ANSWER_MODEL || model.name === QUESTION_MODEL) {
    updateQuiz();
    return;
  }

  if (model.name === STATE_MODEL) {
    if (['currentQuestion', 'questions', 'answers', 'totalQuestions'].indexOf(modelProp) >= 0) {
      updateQuiz();
      return;
    }

    console.warn('Not sure what to render');
    return;
  }

  throw new Error('Unhandled model update type');
}
