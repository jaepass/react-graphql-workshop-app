import React from 'react';
import { render, cleanup } from '../../utils/test-utils';
import InitiativeDetail from '../initiative-detail';

const mockInitiative = {
  initiative: {
    id: 'c_0',
    name: 'Cat-stronomy, an introduction',
    description: '# Pulchra vehi vidit misera sola armenta secabatur\n\n',
    image:
      'https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg',
    organization: {
      name: 'Henri, le Chat Noir',
      website: 'website',
      image:
        'https://images.unsplash.com/photo-1442291928580-fb5d0856a8f1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzA0OH0',
    },
  },
};

describe('Module Detail View', () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it('renders without error', () => {
    render(<InitiativeDetail {...mockInitiative} />);
  });
});
