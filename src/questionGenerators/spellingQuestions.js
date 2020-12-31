import spellWord from '../questionTemplates/spellWord';
import textImports from '../textImports';

function onlyWords(word) {
  const check = word.trim();
  return check.length > 0 && check.indexOf('#') !== 0;
}

function removeVariants(word) {
  // make 'accident(ally)' into 'accident' and 'woman/women' in to 'woman'
  return word.replace(/\(.+\)/g, '').split('/')[0];
}

const words = textImports.year3to4.split('\n').filter(onlyWords).map(removeVariants);
console.log(words);
const questions = words.map(spellWord);

export default questions;
