import { readQuestion } from './interactions';

const hooks = {
  'Question changed': {
    matches: ['state::currentQuestion', 'state::started'],
    afterUpdate: readQuestion
  }
};

export default hooks;
