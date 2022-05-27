import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
    type Query {
        greeting: String
    }
`;

const resolvers = {
    Query: {
        greeting: () => "Hello World"
    }
}

const server = new ApolloServer({typeDefs, resolvers});
// await for serverInfo
const serverInfo = await server.listen({ port: 9000 });
//get properties about the server
console.log(`Server running at ${serverInfo.url}`);