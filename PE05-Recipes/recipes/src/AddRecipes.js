import React, { useState } from 'react';
  
function AddRecipes ({ recipeListValue, setRecipeListValue }) {
      // Stores the recipe name in text input
      const[inputName, setInputName] = useState('')

      // Stores the recipe prep time in text input
      const[inputPrepTime, setInputPrepTime] = useState('')

      // Stores the recipe ingredients in text input
      const[inputRecipeIngredients, setInputRecipeIngredients] = useState('')

      // Stores the recipe instructions in text input
      const[inputRecipeInstructions, setInputRecipeInstructions] = useState('')
    
      // Transfer the text in the input field into a new recipe and give it a unique ID.
      async function handleRecipeListAdd () {
        const delimiters = /[,:;|]/;
        var ingredients = inputRecipeIngredients.split(delimiters)
        setRecipeListValue([...recipeListValue, {name: inputName, prepTime: inputPrepTime, ingredients: ingredients, instructions: inputRecipeInstructions}])

        const newRecipe = {name: inputName, prepTime: inputPrepTime, ingredients: ingredients, instructions: inputRecipeInstructions}
        
        await fetch("https://ominous-waddle-44rg9x9v6xg25q74-5050.app.github.dev/record", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newRecipe),
        })
        .catch(error => {
          window.alert(error);
          return;
        });
      }

    return (
    <div>
        <div>
            {/* Components to handle user input through text boxes and an add recipe button*/}
            <h2>Add Recipes here</h2>
            <p>Recipe name:</p>
            <input type="text" value={inputName} onChange={(e) => setInputName(e.target.value)}/>
            <p>Recipe preparation time:</p>
            <input type="text" value={inputPrepTime} onChange={(e) => setInputPrepTime(e.target.value)}/>
            <p>Recipe ingredients (comma separated):</p>
            <input type="text" value={inputRecipeIngredients} onChange={(e) => setInputRecipeIngredients(e.target.value)}/>
            <p>Recipe instructions:</p>
            <input type="text" value={inputRecipeInstructions} onChange={(e) => setInputRecipeInstructions(e.target.value)}/>
            <button onClick={() => handleRecipeListAdd()}>Add Recipe</button>
        </div>
  </div>
    );
}

export default AddRecipes;