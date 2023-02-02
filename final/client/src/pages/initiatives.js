import React from 'react';
import { useQuery, gql } from '@apollo/client';
import InitiativeCard from '../containers/initiative-card';
import { Layout, QueryResult } from '../components';

/** INITIATIVES gql query to retreive all initiatives */
export const INITIATIVES = gql`
  query initiativesForMain {
    initiativesForMain {
      id
      name
      organization {
        name
        image
        id
      }
      image
      description
    }
  }
`;

/**
 * Initiatives Page is the Climate Initiatives home page.
 * We display a grid of initiatives fetched with useQuery with the INITIATIVES query
 */
const Initiatives = () => {
  const { loading, error, data } = useQuery(INITIATIVES);

  return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
        { data?.initiativesForMain?.map((initiative) => (
          <InitiativeCard key={initiative.id} initiative={initiative} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Initiatives;