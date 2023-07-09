# Calendar Project

## Description
The Work Day Scheduler is a web application that allows users to schedule their work day by entering tasks for each hour. The application provides a visual representation of time blocks for each hour from 9 AM to 5 PM. The time blocks are color-coded based on the current time, indicating past, present, and future hours. Users can enter their tasks in the corresponding time block and save them using the save button.

## Features
-	Dynamic time block colors: The time blocks are dynamically styled based on the current time, providing a clear indication of past, present, and future hours.
-	Local storage: The application saves the user's input to the corresponding hour using the localStorage feature of the browser. This allows the user's tasks to persist even after refreshing the page.
-	Current day and time: The current day and time are displayed at the top of the page using the dayjs library.

## Learning point
By working on this project, I have gain experience in:
1.	Manipulating the Document Object Model (DOM) using JavaScript and jQuery.
2.	Understanding and implementing event handling in web development.
3.	Styling web pages using CSS frameworks like Bootstrap.
4.	Interacting with the browser's localStorage to store and retrieve data.
5.	Working with external libraries to enhance JavaScript functionality.
6.	Developing a user-friendly interface with clear visual cues.
Overall, this project was a valuable opportunity to reinforce my knowledge of front-end web development concepts and enhance my skills in building interactive web applications.

## How to Use
1.	Open the Work Day Scheduler in your web browser.
2.	The page will display time blocks for each hour from 9 AM to 5 PM.
3.	Each time block contains a text area where you can enter your tasks for that hour.
4.	The time blocks are color-coded to indicate past, present, and future hours:
•	Past hours are displayed with a gray background.
•	The current hour is displayed with a red background.
•	Future hours are displayed with a green background.
5.	Enter your tasks in the corresponding time block text area.
6.	To save your tasks, click the save button (represented by a floppy disk icon) in the respective time block.
7.	Your tasks will be saved to the browser's local storage and will persist even if you refresh the page.
8.	To view the current day and time, refer to the "Work Day Scheduler" heading at the top of the page.

## Technologies Used
-	[jQuery](https://jqueryui.com/)
-	[dayjs library](https://day.js.org/docs/en/display/format)
## Credits
•	dayjs - JavaScript library used for date and time manipulation.
