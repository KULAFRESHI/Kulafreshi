KulaFreshi

Overview:
KulaFreshi is an eCommerce web application designed to sell and advertise coconut oil products. The primary aim is to solve the problem of limited access to high-quality coconut oil products by providing a convenient online platform for customers. The target audience is the general public, with a focus on health-conscious individuals and those interested in natural oil products.

Functionality:
1. Home Page:
   - A welcoming introduction to KulaFreshi.
   - Highlights of featured products.
   - Advertisements for the brand and its benefits.

2. Products Pages:
   - A detailed list of various available coconut oil products.
   - Information on each product including name, description, price, and image.
   - An "Add to Cart" button for each product.

3. Cart:
   - A section where users can view selected products.
   - Display of product names, quantities, and total price.
   - Instructions for payment and completing the purchase.

Technical Details:
The web application will be built using the following technologies:
- Node.js: For the server-side JavaScript environment.
- Express: A web framework for building the server.
- MongoDB: A NoSQL database for storing product data.
- EJS: A templating engine for rendering dynamic web pages.
- CSS: For styling the web pages.
- JavaScript: For client-side interactivity.

Project Structure:
KulaFreshi/
│
├── models/
│   └── product.js
│
├── public/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── cart.js
│
├── routes/
│   ├── index.js
│   └── sales.js
│
├── views/
│   ├── partials/
│   │   ├── navbar.ejs
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── home.ejs
│   ├──product1.ejs
│   └──product2.ejs
│
├── .env
├── app.js
├── package.json
└── package-lock.json

Implementation Steps:

1. Setting Up the Project:
   - Initialize the project 
   - Install dependencies: `express`, `mongoose`, `ejs`, `dotenv`, `body-parser`.
   - Defining the application. ‘i.e app.js’

2. Creating Models:
   - Define the product schema and model .

3. Setting Up Routes:
   - Create the home page route 
   - Create the products page route

4. Creating Views:
   - Design the home page 
   - Design the products pages 
   - Include partial views for the header, navigation and footer.

5. Adding Static Files:
   - Create CSS for styling in `public/css/styles.css`.
   - Create JavaScript for cart functionality in `public/js/cart.js`.

6. Environment Variables:
   - Store environment variables in a `.env` file for MongoDB connection and port configuration.

Running the App:
1. Start MongoDB.
2. Run the app using `node app.js`.

This document provides a comprehensive plan for building the KulaFreshi eCommerce web application, outlining the key functionalities and the steps required to implement them.
