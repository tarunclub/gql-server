import { ApolloServer } from 'apollo-server';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';
import { connectDB } from './config/connectDB';
import dotenv from 'dotenv';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
dotenv.config();
import jwt from 'jsonwebtoken';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const { authorization } = req.headers;
    if (authorization) {
      // @ts-ignore
      const { userRole } = jwt.verify(authorization, process.env.JWT_SECRET!);
      return { userRole };
    }
  },
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen({ port: 5001 }).then(({ url }) => {
  console.log(`Server ready at ${url}`);

  connectDB();
});
