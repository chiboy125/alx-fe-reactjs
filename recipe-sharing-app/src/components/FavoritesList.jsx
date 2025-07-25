// src/components/FavoritesList.jsx
import React from 'react';
import useRecipeStore from '../recipeStore';

const FavoritesList = () => {
  const favorites = useRecipeStore((state) =>
    state.favorites.map((id) =>
      state.recipes.find((recipe) => recipe.id === id)
    )
  );
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favorites.map((recipe) =>
          recipe ? (
            <div key={recipe.id}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <button onClick={() => removeFavorite(recipe.id)}>Remove</button>
            </div>
          ) : null
        )
      )}
    </div>
  );
};

export default FavoritesList;
