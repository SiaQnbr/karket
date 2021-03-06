import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import * as Express from 'express';
import { buildSchema, Resolver, Query } from 'type-graphql';

@Resolver()
class HelloResolver {
    @Query(() => String, {
        name: 'sayHello',
        description: 'this is hello func',
    })
    async hello() {
        return 'Hello World From Type-GraphQL';
    }
}

const main = async () => {
    const schema = await buildSchema({
        resolvers: [HelloResolver],
    });

    const apolloServer = new ApolloServer({ schema });
    const app = Express();
    apolloServer.applyMiddleware({ app });
    app.listen(4000, () => {
        console.log('server started at http://localhost:4000/graphql');
    });
};

main();
