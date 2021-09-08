import utf8 from 'utf8';
import spellWord from '../../templates/questionTemplates/spellWord';
import { shuffleArray } from '../../core/arrays';
import year3to4 from '../../content/spellings/year3to4/getSpellings';
import french1 from '../../content/spellings/french-1/getSpellings';

const textImports = {
  year3to4,
  french1
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

// const words = utf8.decode(textImports.year3to4).split('\n').filter(noComments).filter(onlyWords).map(removeVariants);
const words = utf8.decode(textImports.french1).split('\n')
                .map(line => line.replace(/\t+.*/g, ''))
                .filter(noComments)
                .filter(onlyWords)
                .map(removeVariants)
                .map(line => line.replace(/[ ]+/g, ' ').replace(/’/g, `'`).replace(/[!\.?,…]/g, ``));

console.log(words);

const getSpellingQuestions = (maxQuestions = defaultMaxQuestions) => {
  const shuffledWords = shuffleArray(words);
  return shuffledWords.slice(0, maxQuestions).map(spellWord);
};

export default getSpellingQuestions;
