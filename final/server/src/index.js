const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');

const mocks = {
	Query: () => ({
	    initativesForMain: () => [...new Array(6)],
	  }),
   Initiative: () => ({
    id: () => "initiative_01",
    name: () => "Ocean Risk Alliance",
    organization: () => {
      return {
        name: "Ocean Risk",
				website: "https://www.oceanriskalliance.org/",
        image:
          "https://supportclimateaction.com/internal_resources/1",
      };
    },
    image: () =>
      "https://supportclimateaction.com/internal_resources/1",
    description: () => "The Ocean Risk and Resilience Action Alliance (ORRAA) pioneers innovative finance products that drive investment in marine and coastal natural capital, reduce ocean and climate risks, and build resilience in coastal communities.",
  }),
};

const server = new ApolloServer({
  typeDefs,
  mocks,
});

server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
`);
});
