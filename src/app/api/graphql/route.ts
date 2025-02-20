import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { NextRequest } from "next/server";
import { gql } from "graphql-tag";
import ads from "@/data/ads.json"; // Import mock ad data

// Define GraphQL schema
const typeDefs = gql`
  type Ad {
    id: ID!
    platform: String!
    headline: String!
    description: String!
    image: String!
    url: String!
  }

  type Query {
    ads: [Ad!]!
    ad(id: ID!): Ad
  }
`;

// Define resolvers
const resolvers = {
  Query: {
    ads: () => ads,
    ad: (_parent: unknown, args: { id: string }) => ads.find((ad) => ad.id === args.id),
  },
};

// Create Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Correct function to handle API routes in App Router
const handler = startServerAndCreateNextHandler<NextRequest>(server);

export { handler as GET, handler as POST };
