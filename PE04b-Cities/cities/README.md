# cs628-PE04

Input:
Input into the app is done through the text input areas on the AddCities route and through the add city button. In addition the Cities routes containes the list of cities which can be clicked on to display city details. Lastly there is a navigation bar at the top of the application to allow traveling to the different routes.

Process:
The internal state of the city list records the value in the text input areas and updates as the text changes. When the add city button is pressed the value of the text input area are grouped and added to the city list with a unique ID. When the city name is selected from the list on the Cities route, the city list is filtered using the parameter ID that was passed to the City component. When the navigation bars buttons are activated, they direct the user to ther corresponding route using browserrouter, routes, and Navlink components. If a bad city id is passed directly into the address bar, redirection will prevent the application from crashing and the user will be brought back to the home page.

Output:
The list of cities are displayed as individual items on screen. As Cites are added to the list they are shown in the updated city list, each of which can be interacted with to show additional details about that city.