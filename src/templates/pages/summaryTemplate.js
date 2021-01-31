import { html } from 'lit-html';
import { newQuiz } from '../../app/interactions';
import state from '../../app/state';

function breakIntoLetters(string) {
  if (typeof string !== 'string') {
    console.warn('Not a string', string);
    return string;
  }
  return string.split('').join(', ')  
}

function getResponses() {
  
  const responses = state.questions.map((question, questionIndex) => { 
    const answer = question.answers[0];
    return {
      preferredAnswer: answer,
      userAnswer: state.answers[questionIndex].text,
      score: state.results[questionIndex].score,
      wasAnswered: state.answers[questionIndex].text.replace(/\s/g) !== '',
      dictionaryUrl: `https://en.wiktionary.org/wiki/${answer}`,
      spelledOut: `${answer}, spelled: ${breakIntoLetters(answer)}`
    }
  });
  
  return responses;
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
        <li>
          <a href="${response.dictionaryUrl}" aria-label="${response.spelledOut}" target="_blank">${response.preferredAnswer}</a>
          ${ response.wasAnswered ? `(not "${response.userAnswer}")` : '' }
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
