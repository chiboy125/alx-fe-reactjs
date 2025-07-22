import { useRecipeStore } from '../recipeStore';
import { Link } from 'react-router-dom'; // ✅ Add this line

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          {/* ✅ Wrap title in a Link to the recipe details page */}
          <h3>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
