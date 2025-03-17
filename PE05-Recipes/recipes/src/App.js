import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Recipes from './Recipes';
import AddRecipes from './AddRecipes';
import Recipe from './Recipe';
import Edit from './edit';

function App () {
  // Stores the recipes in an array
  const[recipeListValue, setRecipeListValue] = useState([])

  return (
    <BrowserRouter>
      <div className="container">
        <nav className="navbar">
          <ul>
            {/* Use NavLink to keep track of active tab*/}
            <li>
              <NavLink to="/" activeClassName="active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/recipes" activeClassName="active">Recipes</NavLink>
            </li>
            <li>
              <NavLink to="/addRecipes" activeClassName="active">Add Recipes</NavLink>
            </li>
          </ul>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="recipes" element={<Recipes recipeListValue={recipeListValue} setRecipeListValue={setRecipeListValue}/>}>
                <Route path={"recipe/:id"} element={<Recipe recipeListValue={recipeListValue} setRecipeListValue={setRecipeListValue}/>} />
            </Route>
            <Route path="addRecipes" element={<AddRecipes recipeListValue={recipeListValue} setRecipeListValue={setRecipeListValue}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;