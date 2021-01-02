import state from '../../app/state';

export default function questiontTemplate() {
  return state.currentQuestionData.question.questionTemplate;
}
