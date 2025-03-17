import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';

function Recipe({ recipeListValue, setRecipeListValue }) {

    const { id } = useParams();

    // Stores return navigation state
    const[goBack, setgoBack] = useState(false)

    const[editRedirect, setEditRedirect] = useState(false)
        
    // Set the goBack flag
    const handleReturnToRecipeList = () => {
      setgoBack(!goBack)
    }
        
    // Remove the recipe from the stored list
    async function handleRemoveRecipe() {
      if (window.confirm('Are you sure you want to delete this recipe?')) {
        await fetch(`https://ominous-waddle-44rg9x9v6xg25q74-5050.app.github.dev/record/${id}`, {
          method: "DELETE"
        });
        setRecipeListValue(recipeListValue.filter((val) => val.id !== id))
        setgoBack(!goBack)
      }
    }

    // Edit the information for the recipe
    const handleEditRedirect = () => {
      setEditRedirect(!editRedirect)
    }

    // Filter the list of recipes on the id parameter passed from the URL
    let recipeDetails = recipeListValue.filter(recipe => recipe._id === id)
  
    if(editRedirect){
      return <Navigate to={"/edit/" + id} />;
    }

    if(goBack){
      return <Navigate to="/Recipes" />;
    }

    // If a URL with a bad recipe ID is passed (typically by typing it directly into the address bar), this will redirect to the home page avoiding an application crash.
    if (recipeDetails[0] === undefined) {
      return <Navigate to="/" />;
    }

    return (
      <div>
        <h2>{recipeDetails[0].name} Details</h2>
        <button className='collapseRecipeButton' onClick={() => handleReturnToRecipeList()}>Collapse</button>
        <button className='editRecipeButton' onClick={() => handleEditRedirect()}>Edit Recipe</button>
        <button className='deleteRecipeButton' onClick={() => handleRemoveRecipe()}>Delete Recipe</button>
        <p>Prep Time: {recipeDetails[0].prepTime}</p>
        <p>Ingredients:
          <ul style={{ listStyleType: "none" }}>{recipeDetails[0].ingredients.map((item) => (
            <li>
              {item}
            </li>
            )
          )}</ul>
        </p>
        <h2>Instructions</h2>
        <p>{recipeDetails[0].instructions}</p>
      </div>
    );
}

export default Recipe;