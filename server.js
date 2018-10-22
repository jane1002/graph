const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config({ path: "variables.env" });
// const Recipe = require("./models/Recipe");
// const User = require("./models/User");

// Bring in GraphQL-Express middleware
const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./schema");
const { resolvers } = require("./resolvers");

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  playground: {
    endpoint: "http://localhost:4444/graphql",
    settings: {
      "editor.theme": "light"
    }
  }
});

const app = express();
server.applyMiddleware({
  app,
  path: "/graphql",
  bodyParser: bodyParser.json
});

// connects to databas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB connect."))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
  console.log(`Start server, listening on ${PORT}`);
});
