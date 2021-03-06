import spellWord from '../../templates/questionTemplates/spellWord';
import { shuffleArray } from '../../core/arrays';
import year3to4 from '../../content/spellings/year3to4/getSpellings';

const textImports = {
  year3to4
};

const defaultMaxQuestions = 10;

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

const getSpellingQuestions = (maxQuestions = defaultMaxQuestions) => {
  const shuffledWords = shuffleArray(words);
  return shuffledWords.slice(0, maxQuestions).map(spellWord);
};

export default getSpellingQuestions;
