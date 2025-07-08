# QTEC Test - E-commerce Product Management System

A modern e-commerce web application built with React, Vite, and JSON Server. This application allows users to browse products, view product details, and manage a shopping cart with add/remove functionality.

## 🚀 Features

-   **Product Catalog**: Browse through a collection of products with images, titles, descriptions, and prices
-   **Product Details**: View detailed information about individual products
-   **Shopping Cart**: Add and remove products from cart
-   **Responsive Design**: Mobile-friendly UI built with Tailwind CSS
-   **Real-time Updates**: Cart state persists across page navigation
-   **Modern Tech Stack**: Built with React 19, React Router, and Vite

## 🛠️ Technology Stack

### Frontend

-   **React 19.1.0** - Modern React with latest features
-   **React Router 7.6.3** - Client-side routing
-   **Vite 7.0.0** - Fast build tool and development server
-   **Tailwind CSS 4.1.11** - Utility-first CSS framework
-   **Axios 1.10.0** - HTTP client for API requests

### Backend

-   **JSON Server 1.0.0-beta.3** - Mock REST API server

## 📁 Project Structure

```
qtec-task/
├── backend/
│   └── db.json                 # JSON database file
├── src/
│   ├── api/
│   │   └── api.js             # Axios configuration
│   ├── assets/                # Product images
│   ├── components/            # React components
│   │   ├── AllProducts.jsx
│   │   ├── Cart.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── HeaderLayout.jsx
│   │   ├── HomePage.jsx
│   │   ├── LoadingSkeleton.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── SideCart.jsx
│   │   └── SingleProduct.jsx
│   ├── context-api/
│   │   └── productContext.js  # React Context for state management
│   ├── reducer/
│   │   └── productReducer.js  # Reducer for cart and product state
│   ├── utils/
│   │   └── cartActions.js     # Cart action handlers
│   ├── App.jsx               # Main App component
│   ├── main.jsx             # App entry point
│   └── index.css            # Global styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your system:

-   **Node.js** (version 18 or higher)
-   **npm** or **pnpm** (pnpm is used in this project for node files reusability)

### Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/MU1147-LEGEND/qtec-task
    cd qtec-task
    ```

2. **Install dependencies**
    ```bash
    pnpm install or npm install
    ```

## 🖥️ Running the Application

You need to run both the frontend and backend servers for the application to work properly.

### Step 1: Start the Backend Server (JSON Server)

Open a terminal and run:

```bash
npm run server (must use this command when starting the backend server)
```

This will start the JSON Server on `http://localhost:3000` with the following endpoints:

-   `GET http://localhost:3000/products` - Get all products
-   `GET http://localhost:3000/products/:id` - Get a specific product
-   `PATCH http://localhost:3000/products/:id` - Update product (used for cart status)

**Note**: Keep this terminal window open as the backend server needs to run continuously.

### Step 2: Start the Frontend Development Server

Open a **new terminal window or split the existing terminal** (don't close the backend server) and run:

```bash
pnpm dev
```

This will start the Vite development server on `http://localhost:5173`

### Step 3: Open the Application

Navigate to `http://localhost:5173` in your web browser to view the application.

## 📋 Available Scripts

| Script             | Description                            |
| ------------------ | -------------------------------------- |
| `pnpm dev`         | Starts the frontend development server |
| `npm run server`   | Starts the JSON Server backend         |
| `pnpm run build`   | Builds the project for production      |
| `pnpm run preview` | Preview the production build locally   |
| `pnpm run lint`    | Run ESLint to check code quality       |

## 🌐 API Endpoints

The backend JSON Server provides the following REST API endpoints:

### Products

-   **GET** `/products` - Retrieve all products
-   **GET** `/products/:id` - Retrieve a specific product by ID
-   **PATCH** `/products/:id` - Update a product (used for cart status)

### Example API Response

```json
{
    "id": "1",
    "title": "Men's Zip‑Pocket Casual",
    "description": "A versatile and stylish zip-pocket casual pant for everyday wear.",
    "price": 29.99,
    "image": "http://localhost:5173/src/assets/img1.png",
    "isCarted": false
}
```

## 🛒 Core Features

### Shopping Cart Functionality

-   Add products to cart with real-time UI updates
-   Remove products from cart
-   Cart state persistence using React Context and Reducer
-   Backend synchronization for cart status

### Product Management

-   Product listing with grid layout
-   Individual product detail pages
-   Product search and filtering (if implemented)
-   Responsive product cards

### Navigation

-   React Router for seamless page navigation
-   Header with navigation links
-   Product detail pages with back navigation

## 🎨 UI/UX Features

-   **Responsive Design**: Works on desktop, tablet, and mobile devices
-   **Modern UI**: Clean and intuitive interface using Tailwind CSS
-   **Loading States**: Skeleton loaders for better user experience
-   **Interactive Elements**: Hover effects and smooth transitions
-   **Cart Indicators**: Visual feedback for cart operations

## 🐛 Troubleshooting

### Common Issues

1. **Page refreshes when adding/removing from cart**

    - Ensure both frontend and backend servers are running
    - Check browser console for any JavaScript errors
    - Verify the JSON Server is accessible at `http://localhost:3000`

2. **Products not loading**

    - Make sure the JSON Server is running (`npm run server`)
    - Check if `backend/db.json` file exists and contains product data

3. **Images not displaying**

    - Verify that image files exist in `src/assets/` directory
    - Check if image paths in `db.json` are correct

4. **Build fails**
    - Run `pnpm install` to ensure all dependencies are installed
    - Check for any ESLint errors with `pnpm run lint`

### Port Conflicts

If you encounter port conflicts:

-   Frontend (Vite): Change port in `vite.config.js`
-   Backend (JSON Server): Use `npx json-server ./backend/db.json --port 3000`


## 📝 License

This project is created for QTEC technical assessment purposes.

