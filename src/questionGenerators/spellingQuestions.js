import spellWord from '../questionTemplates/spellWord';
import textImports from '../textImports';
import { shuffleArray } from '../utils';

const defaultMaxQuestions = 20;

function noComments(line) {
  const check = line.trim();
  // treat lines starting with # as comments and ignore them
  return check.indexOf('#') !== 0;
}

function onlyWords(line) {
  const check = line.trim();
  // treat lines starting with # as comments and ignore them
  return check.length > 0;
}

function removeVariants(word) {
  // make 'accident(ally)' into 'accident' and 'woman/women' in to 'woman'
  return word.replace(/\(.+\)/g, '').split('/')[0];
}

const words = textImports.year3to4.split('\n').filter(noComments).filter(onlyWords).map(removeVariants);

const getQuestions = (maxQuestions = 20) => {
  const shuffledWords = shuffleArray(words);
  return shuffledWords.slice(0, maxQuestions).map(spellWord);
}

export default getQuestions;
