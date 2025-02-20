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

// Fix: Correctly handle Next.js App Router API Routes
const handler = startServerAndCreateNextHandler<NextRequest>(server);

//  Explicitly define API routes with required `RouteContext`
export async function GET(req: NextRequest) {
  return handler(req);
}

export async function POST(req: NextRequest) {
  return handler(req);
}
