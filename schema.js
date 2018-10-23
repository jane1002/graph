exports.typeDefs = `
  
  type Recipe {
    id: ID
    name: String!
    category: String!
    description: String!
    instructions: String!
    createDate: String
    likes: Int
    username: String
  }
  
  
  type User {
    id: ID
    username: String! 
    password: String!
    email: String!
    joinDate: String
    favourites:[Recipe]
  }
  
  type Query {
    getAllRecipes: [Recipe]
  }
  
  type Mutation {
    addRecipe(name: String!, description: String!, category: String!, instructions: String!, username: String): Recipe
  }

`;
