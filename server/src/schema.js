const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    "Query to get initiatives array for the main view"
    initiativesForMain: [Initiative!]!
  }

  "An initiative is a single entity that a company has"
  type Initiative {
    id: ID!
    "The initiative's name"
    name: String!
    "The initiative's organization"
    organization: Organization!
    "The initiative's illustration to display in initiative card or initiative page detail"
    description: String
    "The initiative's image or logo to display in an initiatve card or single initiative details page"
    image: String
  }

  "Organization that an Initiative belongs to"
  type Organization {
    id: ID!
    "Name of organization"
    name: String!
    "Organization's website"
    website: String!
    "The organization's logo to display in an organization card or single organization details page"
    image: String
  }
`;

module.exports = typeDefs;
