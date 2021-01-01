const defaultOptions = { selector: '#something' };
const options = {};

// TODO: make into a model
export function setOptions(customOptions = defaultOptions) {
  Object.keys(customOptions).forEach((key) => {
    const isDefault = options[key] !== defaultOptions[key];
    const optionExists = defaultOptions[key] !== undefined;

    if (optionExists) {
      console.debug(`${isDefault ? 'Default' : 'Custom'} option '${key}':`, customOptions[key]);
      options[key] = customOptions[key];
    } else {
      console.warn(`Non-existent option '${key}'`);
    }
  });
}

export default options;
