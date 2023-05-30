FRONTEND 
This readme file provides an overview of the frontend for web application, which is built using React. It contains information about the technology stack, installation instructions, project structure, and other relevant details.

TECHNOLOGY STACK
The frontend of your application is built using the following technologies:

React: A JavaScript library for building user interfaces. React allows you to create reusable UI components and efficiently manage the application state.
HTML: The standard markup language for creating web pages.
CSS: The stylesheet language used for styling the web pages and components.
Installation
To set up the frontend on your local machine, follow these steps:

LIBRARIES:
It also uses some libraries like:
React Router DOM,
Axios,
Bootstrap, 
React Bootstrap,
Font Awesome Icons,

Project Structure
The frontend follows a common project structure to ensure maintainability and modularity. Here's an overview of the main directories and files:

src/: This directory contains the main source code of your application.
components/: This directory holds reusable UI components used throughout the application.
App.js: The main component that acts as the entry point of your application.
index.js: The file responsible for rendering the root component and mounting it into the HTML document.
api/: contains files that configure api endpoints which connect to the backend.
assest/: contains images that are displayed on home page.
config/: contains configuration that connects the application to the backend.
components/AppContext.js: contains a React component that uses context api that helps manage states over other components.
components/Footer.js: is a simple footer bar.
components/Generate.js: is a component that renders a modal and that server function of generating a new QR Code
components/Header.js: is a component that renders headers which contains logo, searchbar and two buttons.
components/Home.js: is a file where most of the logic happens, like fetching data, rendering data and also functionality of deletion
components/Show.js: is a component that is a modal that displays relevant information when clicked on a certain QR Code. It also has unique function that downloads the QR Code image. 
