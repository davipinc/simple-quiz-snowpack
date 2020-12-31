import getQuestions from './questionGenerators/spellingQuestions';
import state from './state';
import { answerModel, questionModel, resultModel } from './models';

export function resetAnswers() {
  const { questions } = state;

  state.answers = questions.map((question) => {
    return answerModel(question.id);
  });
}

export function resetResults() {
  const { answers } = state;

  state.results = answers.map(() => {
    return resultModel();
  });
}

export function importQuestions() {
  state.quizzesGenerated += 1;
  state.questions = getQuestions().map((question) => {
    return questionModel(question);
  });

  resetAnswers();
  resetResults();
}
