import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!title.trim() || !ingredients.trim() || !steps.trim()) {
      setError('Please fill in all fields.');
      return;
    }

    // Optional: ensure ingredients contain at least two items
    const ingredientsList = ingredients.split(',').map(item => item.trim()).filter(Boolean);
    if (ingredientsList.length < 2) {
      setError('Please provide at least two ingredients.');
      return;
    }

    // If everything is valid
    setError('');
    console.log('New Recipe:', { title, ingredients: ingredientsList, steps });

    // Reset form after submission
    setTitle('');
    setIngredients('');
    setSteps('');
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Add a New Recipe</h2>
      
      {error && (
        <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium mb-1">Recipe Title</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:border-blue-300"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter recipe title"
          />
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-sm font-medium mb-1">Ingredients (separate with commas)</label>
          <textarea
            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:border-blue-300"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="e.g. Sugar, Flour, Eggs"
            rows="3"
          />
        </div>

        {/* Preparation Steps */}
        <div>
          <label className="block text-sm font-medium mb-1">Preparation Steps</label>
          <textarea
            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:border-blue-300"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder="Describe the preparation process"
            rows="4"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
