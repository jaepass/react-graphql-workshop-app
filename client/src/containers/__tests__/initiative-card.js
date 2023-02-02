import React from 'react';
import { renderApollo, cleanup, waitForElement } from '../../utils/test-utils';
import InitiativeCard from '../initiative-card';

const mockInitiativeCardData = {
  id: 'c_0',
  name: 'Cat-stronomy, an introduction',
  image:
    'https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg',
  description: '# Pulchra vehi vidit misera sola armenta secabatur\n\n',
  organization: {
    name: 'Henri, le Chat Noir',
    website: 'website',
    image:
      'https://images.unsplash.com/photo-1442291928580-fb5d0856a8f1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzA0OH0',
  },
};

describe('Initiative Card', () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it('renders initiative Card', async () => {
    const mocks = [];
    const { getByText } = await renderApollo(
      <InitiativeCard initiative={mockInitiativeCardData} />,
      {
        mocks,
        resolvers: {},
        addTypename: false,
      }
    );
    await waitForElement(() => getByText(/cat-stronomy/i));
  });
});
