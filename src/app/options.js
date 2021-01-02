import { model } from '../core/models';
import { OPTIONS_MODEL } from './constants';

export const defaultOptions = {
  selector: '#something'
};

export const options = model({ name: OPTIONS_MODEL, fields: defaultOptions, calculated: {}, readOnly: false });

export default options;
