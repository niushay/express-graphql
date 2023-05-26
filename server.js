const express = require('express');
const path = require('path');
const { graphqlHTTP } = require('express-graphql')
const { makeExecutableSchema } = require('@graphql-tools/schema')
const { loadFilesSync } = require('@graphql-tools/load-files')

const PORT = 4000;

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));
const schema = makeExecutableSchema({
    typeDefs: [typesArray]
})

const root = {
    products: require('./products/products.model.js'),
    orders: require('./orders/orders.model.js')
}

const app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(PORT, () => {
    console.log(`Running GraphQL server...`);
})