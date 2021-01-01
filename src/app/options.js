import { getModel } from '../core/models';
import { OPTIONS_MODEL } from './constants';

export const defaultOptions = {
  selector: '#something'
};

export const options = getModel(OPTIONS_MODEL, defaultOptions);

export default options;
