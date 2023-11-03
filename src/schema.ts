import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

export default Query;
