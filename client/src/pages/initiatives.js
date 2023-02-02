import React from 'react';
import { Layout } from '../components';
import { useQuery, gql } from '@apollo/client';
import InitiativeCard from '../containers/initiative-card';
import QueryResult from '../components/query-result';

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

  if (loading) return 'Loading...';

  if (error) return `Error ${error.message}`;

  return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
        { data?.initiativesForMain?.map((initiative) => (
          <InitiativeCard key={initiative.id} initiative={initiative} />
        ))}
      </QueryResult>
    </Layout>
  )
};

export default Initiatives;
