QR Code Generator
The QR Code Generator is a web application built using React JS for the frontend and Node.js with Express and MongoDB for the backend. It provides users with the ability to create QR codes that can be used to link URLs, digital files, or media. The generated QR codes are downloadable in PNG format. The app offers various features to enhance user experience and manage the generated QR codes efficiently.

Features

Home Page
The Home Page serves as the landing page for the web app. It is designed to be visually appealing and provides a welcoming introduction to the app's purpose. However, it does not perform any functional actions.

Generate a QR Code
This feature allows users to generate a new QR code. The user can input a URL, digital file, or media and the app will generate a unique QR code corresponding to the provided input. The generated QR code can be downloaded in PNG format for easy sharing and usage.

Show all QR Codes
Users can access this feature to view and list all the QR codes that have been generated on the website. The app fetches the QR codes from the database and displays them in an organized manner. This functionality helps users keep track of all their generated QR codes.

Show one by ID
With this feature, users can view a specific QR code by providing its unique ID. The app retrieves the selected QR code from the database and displays additional details associated with it. This allows users to get more information about a particular QR code if needed.

Delete a QR Code
This feature enables users to delete any QR code from the database. By selecting the QR code they wish to remove, the app will initiate the deletion process. This functionality provides users with control and flexibility in managing their QR codes.

TECHNOLOGY STACK
Frontend: React JS
Backend: Node.js with Express
Database: MongoDB
The frontend is built using React JS, a popular JavaScript library for building user interfaces. It provides a responsive and interactive user interface for the web app. The backend is implemented using Node.js with the Express framework, which handles the server-side logic and API endpoints. MongoDB, a NoSQL database, is used to store and retrieve the QR codes and associated data.


Installation
To run the QR Code Generator Web App locally, follow these steps:

1. Clone the repository to your local machine: https://github.com/enizkarr/qr-code-generator.git

2. In the root folder of project install the necessary dependencies by running the command: npm install.
3. Configure the MongoDB connection settings in the backend.
4. Since the app is using CONCURENTLY package, only single command in root folder will start both server and client by running the command: npm run start.

Access the app in your web browser at the specified URL.
Make sure you have Node.js and MongoDB installed on your machine before running the app.

Conclusion
The QR Code Generator Web App provides users with a convenient way to generate QR codes for various purposes. With features like generating QR codes, displaying all codes, viewing specific codes, and deleting codes, users can efficiently manage their QR code generation and usage. The app's intuitive user interface and seamless integration of frontend and backend technologies offer a smooth user experience.