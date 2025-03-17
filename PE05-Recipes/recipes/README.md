# cs628-PE05

Input:
Input into the app is done through the text input areas on the Add Recipes route and through the add recipe button. In addition the Recipes route contains the list of recipes which can be clicked on to display recipe details. These also have edit and delete buttons. On the Edit route, another form can be intereacted with to update a recipe. Lastly there is a navigation bar at the top of the application to allow traveling to the different routes.

Process:
The internal state of the recipe list is tied to the back end. When the Recipes route is entered, the data is pulled from the MongoDB server and stored in the recipe list on the frontend. As items are edited, added to, or removed from the recipe list requests are sent to the backend to update the database and the changes are reflected on the Recipes route each time it is reloaded.

Output:
The list of recipes are displayed as individual items on screen. As recipes are added to or removed from the list they are shown in the updated recipe list on the Recipes route. Each of which can be interacted with to show additional details about that recipe.