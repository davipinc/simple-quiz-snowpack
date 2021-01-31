import { html } from 'lit-html';
import { newQuiz } from '../../app/interactions';
import state from '../../app/state';


function getResponses() {
  
  const responses = state.questions.map((question, questionIndex) => { 
    return {
      preferredAnswer: question.answers[0],
      userAnswer: state.answers[questionIndex].text,
      score: state.results[questionIndex].score,
      wasAnswered: state.answers[questionIndex].text.replace(/\s/g) !== ''
    }
  });
  
  return responses;
}

function getWrongAnswers() {
  return state.answers.map( answer => {
    return answer.score === 0 ? answer : undefined;
  });
}

function breakIntoLetters(string) {
  if (typeof string !== 'string') {
    console.warn('Not a string', string);
    return string;
  }
  return string.split('').join(', ')  
}
const summaryTemplate = () => {
  const responses = getResponses();
  const rightAnswers = responses.filter(response => response.score > 0);
  const wrongAnswers = responses.filter(response => response.score === 0);
  const notAnswered = responses.filter(response => !response.wasAnswered);

return html`
    <h2>Right Answers</h2>

    <ul>
      ${rightAnswers.map(response => html`<li>${response.userAnswer}</li>`)}
    </ul>

    <h2>Wrong Answers</h2>

    <ul>
      ${wrongAnswers.map(response => html`
        <li aria-label="${response.preferredAnswer}, spelled: ${breakIntoLetters(response.preferredAnswer)}">
          ${response.preferredAnswer}
          ${ response.wasAnswered ? `(not "${response.userAnswer}")` : '(not answered)' }
        </li>
      `)}
    </ul>

    <h3>Score</h3>
    <p>You spelled ${rightAnswers.length} out of ${responses.length} correctly.</p>
    <p>You did not answer ${notAnswered.length} question${notAnswered.length === 1 ? '' : 's'}.</p>

    <button @click=${newQuiz}>New Quiz</button>
  `;
};

export default summaryTemplate;
