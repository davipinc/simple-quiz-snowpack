import loadedQuestions from './content/questions';
import state from './state';
import { answerModel, questionModel } from './models';

export function resetAnswers() {
  const { questions } = state;

  state.answers = questions.map( question => {
    return answerModel(question.id);
  });
}

export function importQuestions() {
  state.questions = loadedQuestions.map( question => {
    return questionModel(question);
  });

  resetAnswers();
}
