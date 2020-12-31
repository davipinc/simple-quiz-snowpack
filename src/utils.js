export function varType(thing) {
  if (thing === null) {
    return 'null';
  }

  if (Array.isArray(thing)) {
    return 'array';
  }

  return typeof thing;
}

export function isByValue(thing) {
  const type = varType(thing);
  return type === 'string' || type === 'boolean' || type === 'number' || type === 'undefined' || type === 'null';
}
export function isByReference(thing) {
  return !isByValue(thing);
}

export function getDataProp(event, prop) {
  return event.srcElement.dataset[prop];
}

/* https://stackoverflow.com/a/6274381 */
export function shuffleArray(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
