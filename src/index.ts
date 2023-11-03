import { ApolloServer } from 'apollo-server';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';
import { connectDB } from './config/connectDB';
import dotenv from 'dotenv';
dotenv.config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen({ port: 5000 }).then(({ url }) => {
  console.log(`Server ready at ${url}`);

  connectDB();
});
