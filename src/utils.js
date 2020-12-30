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