# cs628-PE02

Input:
The app accepts input in the form of mouseclicks on the movie cards, and changes to the genre dropdown list.

Process:
When a mouseclick occurs over a movie card, the onClick handler of the <div> tag is called and displays a short message including the title of the movie encapsulated in that card. When the dropdown menu is changed, the onChange handler updates the genreValue state. This state is used to conditionally render movie cards that contain the selected genre.

Output:
An alert is displayed after a movie card is clicked, and the list of rendered cards updates when a new value is selected in the genres dropdown.