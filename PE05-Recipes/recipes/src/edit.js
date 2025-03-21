import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
 
export default function Edit() {
 const [form, setForm] = useState({
   name: "",
   prepTime: "",
   ingredients: "",
   instructions: "",
   records: [],
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`https://ominous-waddle-44rg9x9v6xg25q74-5050.app.github.dev/record/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record = await response.json();
     if (!record) {
       window.alert(`Record with id ${id} not found`);
       navigate("/");
       return;
     }
 
     setForm(record);
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
   e.preventDefault();

   const delimiters = /[,:;|]/;
   var ingredients = form.ingredients.split(delimiters)

   if (ingredients != null) {
    ingredients = form.ingredients.split(delimiters)
   }

   const editedRecipe = {
     name: form.name,
     prepTime: form.prepTime,
     ingredients: ingredients,
     instructions: form.instructions
   };
 
   // This will send a post request to update the data in the database.
   await fetch(`https://ominous-waddle-44rg9x9v6xg25q74-5050.app.github.dev/record//${params.id}`, {
     method: "PATCH",
     body: JSON.stringify(editedRecipe),
     headers: {
       'Content-Type': 'application/json'
     },
   });
 
   navigate("/");
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
   <div>
     <h3>Update Record</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">Name: </label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="prepTime">Prep Time: </label>
         <input
           type="text"
           className="form-control"
           id="prepTime"
           value={form.prepTime}
           onChange={(e) => updateForm({ prepTime: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="ingredients">Ingredients: </label>
         <input
           type="text"
           className="form-control"
           id="ingredient"
           value={form.ingredients}
           onChange={(e) => updateForm({ ingredients: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="instructions">Instructions: </label>
         <input
           type="text"
           className="form-control"
           id="instructions"
           value={form.instructions}
           onChange={(e) => updateForm({ instructions: e.target.value })}
         />
       </div>
       
       <br />
 
       <div className="form-group">
         <input
           type="submit"
           value="Update Record"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}