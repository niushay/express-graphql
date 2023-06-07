const express = require('express');

const { ApolloServer } = require('apollo-server-express');

const { makeExecutableSchema } = require('@graphql-tools/schema')
const { loadFilesSync } = require('@graphql-tools/load-files')

const PORT = 4000;

const typesArray = loadFilesSync('**/*', {
    extensions: ['graphql'],
});

const resolversArray = loadFilesSync('**/*', {
    extensions: ['resolvers.js']
})

async function startApolloServer(){
    const app = express();

    const schema = makeExecutableSchema({
        typeDefs: typesArray,
        resolvers: resolversArray
    });

    const server = new ApolloServer({
        schema
    });

    await server.start();
    server.applyMiddleware({app, path:'/graphql'});
    app.listen(PORT, () => {
        console.log(`Running GraphQL server...`);
    })
}

startApolloServer();

