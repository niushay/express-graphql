# Express.js GraphQL Demo with Apollo Server

This is a small project that demonstrates how to use GraphQL with Express.js and Apollo Server. It provides a basic setup to create a GraphQL API server using Express.js and Apollo Server.

## Prerequisites

Before running this project, ensure that you have the following dependencies installed on your system:

- Node.js (version 12 or later)
- npm (Node Package Manager)

## Installation

Follow the steps below to set up and run the project:

1. Clone the repository or download the source code:

   ```shell
   git clone https://github.com/niushay/express-graphql.git
   ```

2. Navigate to the project directory:

   ```shell
   cd express-graphql
   ```

3. Install the required dependencies:

   ```shell
   npm install
   ```

## Usage

To start the server and run the project, execute the following command:

```shell
npm start
```

Once the server is running, you can access the GraphQL playground at `http://localhost:4000/graphql`. The playground provides an interactive interface to test and explore the GraphQL API.

## Project Structure

The project structure is organized as follows:

```
express-graphql/
  ├── orders/
  │   ├── resolvers.js
  │   └── graphql
  │   └── model.js
  ├── products/
  │   ├── resolvers.js
  │   └── graphql
  │   └── model.js
  ├── server.js
  └── package.json
```

- `/resolvers.js`: This file contains the resolver functions that define how the GraphQL server handles different queries and mutations.
- `/graphql.js`: Here, you define the GraphQL schema. It includes the types, queries, and mutations supported by your API.
- `server.js`: This is the main entry point of the application. It sets up the Express.js server and integrates Apollo Server with the defined schema and resolvers.
- `package.json`: The package configuration file containing project metadata and dependencies.

## Additional Resources

- [Express.js](https://expressjs.com/): Official website for Express.js.
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/): Official documentation for Apollo Server.
- [GraphQL](https://graphql.org/): Official website for GraphQL.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Acknowledgments

Feel free to modify and extend this project to suit your needs. Happy coding!
