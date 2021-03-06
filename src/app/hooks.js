import { readQuestion } from './interactions';

const hooks = {
  'Question changed': {
    matches: ['state::currentQuestion', 'state::currentPage'],
    afterUpdate: readQuestion
  }
};

export default hooks;
