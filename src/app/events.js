import { readQuestion } from './navigation';
import { ANSWER_MODEL, OPTIONS_MODEL, QUESTION_MODEL, RESULT_MODEL, STATE_MODEL } from './constants';
import update from './update';

export function updateFromModel(model, modelProp) {
  console.debug('update', model.name, modelProp);
  console.log(`${String(model.name)}:${modelProp}`);

  if (model.name === ANSWER_MODEL || model.name === QUESTION_MODEL) {
    update();
    return;
  }

  if (model.name === RESULT_MODEL) {
    update();
    // TODO: add results template
    return;
  }

  if (model.name === STATE_MODEL) {
    if (['currentQuestion', 'started'].indexOf(modelProp) >= 0) {
      update();
      readQuestion();
      return;
    }

    if (
      ['quizzesGenerated', 'ready', 'questions', 'answers', 'results', 'totalQuestions', 'finished'].indexOf(
        modelProp
      ) >= 0
    ) {
      update();
      return;
    }

    console.warn(`Not sure what to render - MODEL: ${String(model.name)} PROP: ${modelProp}`);
    return;
  }

  if (model.name === OPTIONS_MODEL) {
    update();
    return;
  }

  throw new Error(`Unhandled model update type: ${String(model.name)}`);
}
