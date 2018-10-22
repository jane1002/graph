const Recipe = require("./models/Recipe");

exports.resolvers = {
  Query: {
    getAllRecipes: () => {}
  },

  Mutation: {
    addRecipe: async (root, { name, category, description, instructions, username }) => {
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
