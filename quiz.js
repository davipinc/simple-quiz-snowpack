import {html, render} from 'lit-html';

const app = document.querySelectorAll('#app')[0];
const initialState = {
  currentQuestion: 0
};

const state = {};

const questions = [
  {
    instruction: html`<h2>foo</h2><p>bar</p>`
  },
  {
    instruction: html`<h2>bat</h2><p>baz</p>`
  }
];

function renderQuestion() {
  const { currentQuestion } = state;
  render(quizTemplate(questions[currentQuestion]), app);  
}

function renderSummary() {
  render(summaryTemplate(), app);  
}

function checkState(currentState = {}) {
  const stateKeys = Object.keys(currentState);
  const initialStateKeys = Object.keys(initialState);

  const uninitialisedKeys = stateKeys.filter(key => initialState[key] === undefined);  
  const removedKeys = initialStateKeys.filter(key => state[key] === undefined);  

  if (uninitialisedKeys.length) {
    console.warn('You have added state but not defined an initial value', uninitialisedKeys);
  }
  
  if (removedKeys.length) {
    console.warn('You have removed state items', removedKeys);
  }

  return {
    uninitialisedKeys,
    removedKeys
  };
}

function removeKeys(uninitialisedKeys) {
  uninitialisedKeys.forEach(key => {
    console.info(`Removing state '${key}': ${state[key]}`);
    delete state[key];
  });
}

function initialiseState() {
  Object.keys(initialState).forEach(key => {
    state[key] = initialState[key];
  });
}

function resetState() {
  const { uninitialisedKeys } = checkState(state);
  removeKeys(uninitialisedKeys);
  initialiseState();
  writePage();
}

function endQuiz() {
  renderSummary();
}

function nextQuestion() {
  state.currentQuestion += 1;

  if (!questions[state.currentQuestion]) {
    endQuiz();
    return;
  }
  renderQuestion();
}

const summaryTemplate = () => html`
  <h2>Finished</h2>
`;

const quizTemplate = (question) => html`
  <section class="question" aria-live="polite">
    <h1>Question ${state.currentQuestion + 1}</h1>
    <p>${question.instruction}</p>
  </section>
  <button @click=${nextQuestion}>Next Question</button>
  <button @click=${resetState}>Reset</button>
`;

function writePage() {
  renderQuestion();
}

export function quiz() {
  initialiseState();
  writePage();
}
