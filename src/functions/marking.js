import { RIGHT_ANSWER, WRONG_ANSWER } from '../app/constants';
import { state } from '../app/state';

export function checkCurrentAnswer() {
  const { currentQuestion, questions, answers } = state;
  const question = questions[currentQuestion];
  const userAnswer = answers[currentQuestion];

  function processAnswerText(answerText = '') {
    let outputText = answerText;
    outputText = outputText.trim();
    outputText = question.checkCase ? outputText : outputText.toLowerCase();

    return outputText;
  }

  function isCorrectAnswer(validAnswer = '') {
    console.debug('raw', userAnswer.text, validAnswer);
    console.debug('processed', processAnswerText(validAnswer), processAnswerText(userAnswer.text));
    console.debug('isCorrectAnswer', processAnswerText(validAnswer) === processAnswerText(userAnswer.text));
    return processAnswerText(validAnswer) === processAnswerText(userAnswer.text);
  }
  const matchingCorrectAnswers = question.answers.filter(isCorrectAnswer);
  return matchingCorrectAnswers.length > 0 ? RIGHT_ANSWER : WRONG_ANSWER;
}

export function showResult() {
  const { results, currentQuestion } = state;
  results[currentQuestion].score = checkCurrentAnswer();
}
