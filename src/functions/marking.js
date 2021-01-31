import { RIGHT_ANSWER, WRONG_ANSWER } from '../app/constants';
import { state } from '../app/state';

export function checkAnswer(questionIndex = 0) {
  const { questions, answers, results } = state;
  const question = questions[questionIndex];
  const userAnswer = answers[questionIndex];

  function processAnswerText(answerText = '') {
    let outputText = answerText;
    outputText = outputText.trim();
    outputText = question.checkCase ? outputText : outputText.toLowerCase();

    return outputText;
  }

  function isCorrectAnswer(validAnswer = '') {
    console.groupCollapsed(`Marking [${questionIndex}]`)
    console.info('raw', userAnswer.text, validAnswer);
    console.info('processed', processAnswerText(validAnswer), processAnswerText(userAnswer.text));
    console.info('isCorrectAnswer', processAnswerText(validAnswer) === processAnswerText(userAnswer.text));
    console.groupEnd();
    return processAnswerText(validAnswer) === processAnswerText(userAnswer.text);
  }
  const matchingCorrectAnswers = question.answers.filter(isCorrectAnswer);
  const score = matchingCorrectAnswers.length > 0 ? RIGHT_ANSWER : WRONG_ANSWER;
  return score;
}

export function markAllAnswers() {
  state.questions.forEach( (_, questionIndex)  => {
    console.warn('markAllAnswers', questionIndex);
    const score = checkAnswer(questionIndex);
    state.results[questionIndex].score = score;
  });
}

export function checkCurrentAnswer() {
  const { currentQuestion } = state;
  return checkAnswer(currentQuestion);
}

export function showResult() {
  const { results, currentQuestion } = state;
  results[currentQuestion].score = checkCurrentAnswer();
}
