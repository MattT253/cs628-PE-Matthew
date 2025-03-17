import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

function Recipes({ recipeListValue, setRecipeListValue }) {

// This method fetches the records from the database.
useEffect(() => {
	async function getRecords() {
	  const response = await fetch(`https://ominous-waddle-44rg9x9v6xg25q74-5050.app.github.dev/record`);
  
	  if (!response.ok) {
		const message = `An error occurred: ${response.statusText}`;
		window.alert(message);
		return;
	  }
  
	  const recipes = await response.json();
	  setRecipeListValue(recipes);
	}
  
	getRecords();
  
	return;
  }, [recipeListValue.length]);

  return (
    <div>
      <h2>Here are your recipes</h2>
      <div>
	  	<Outlet />
	  	<div>
			{/* Use map to iterate over our array of recipe items and create a link to each, using their unique ids. */}
			<ul style={{ listStyleType: "none" }}>{recipeListValue.map((item) => (
			<li>
			  <Link to={"/recipes/recipe/"+ item._id}>
				{item.name}
			  </Link>
			</li>
			)
			)}</ul>
		</div>
      </div>
    </div>
  );
}

export default Recipes;