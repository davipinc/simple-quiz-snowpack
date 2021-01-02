import textInput from '../answerTemplates/textInput';
import { TEXT_INPUT } from '../../app/constants';
import state from '../../app/state';

export default function answerTemplate() {
  const answerType = state.currentQuestionData.question.answerType;

  switch (answerType) {
    case TEXT_INPUT:
      return textInput();
    default:
      throw new Error('Unknown question type');
  }
}
