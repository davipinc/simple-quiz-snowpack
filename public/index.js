import app from '../src/app/main';

const options = {
  selector: '#app'
};

const myApp = app(options);

window.QUIZ = myApp.state; // for debug only
