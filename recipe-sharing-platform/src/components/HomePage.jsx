import React from 'react';
import { useParams, Link } from 'react-router-dom';
import recipesData from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipesData.find((r) => r.id.toString() === id);

  if (!recipe) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Recipe Not Found</h1>
        <Link to="/" className="text-blue-500 hover:underline">Go Back Home</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <Link to="/" className="text-blue-500 hover:underline">&larr; Back to Home</Link>
      <h1 className="text-4xl font-bold mt-4 mb-6">{recipe.title}</h1>

      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full max-h-96 object-cover rounded-lg shadow-md mb-6"
      />

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul className="list-disc list-inside space-y-1">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-700">{ingredient}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
        <ol className="list-decimal list-inside space-y-2">
          {recipe.instructions.map((step, index) => (
            <li key={index} className="text-gray-700">{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
