
const Recipe = require("./models/Recipe");

// asynchronous resolver: args(obj, args, context, info)
exports.resolvers = {
  Query: {
    getAllRecipes: async () => {
      const allRecipes = await Recipe.find();
      return allRecipes;
    }
  },

  Mutation: {
    addRecipe: async (obj, { name, category, description, instructions, username }) => {
      const newRecipe = await new Recipe({
        name,
        category,
        description,
        instructions,
        username
      }).save();
      console.log(newRecipe);
      return newRecipe;
    }
  }
};
