# cs628-PE03

Input:
Input into the app is done through the text input area and the add and delete task buttons.

Process:
The internal state of the task list records the value in the text input area and updates as the text changes. When the Add task button is pressed the value of the tect input is added to the task list with a unique ID. When the delete task
buttons are pressed the task list is filtered and the task with the designated ID is removed. 

Output:
The list of todo tasks are displayed as indivdual items on screen with their own delete buttons. As tasks are added to the list they are rendered in new TodoTask components.