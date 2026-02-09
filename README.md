# Naksh Jewels – Mini E-Commerce Application

This project is a **full-stack mini e-commerce application** developed as part of the **ReactJS & Node.js Internship Assignment** for **Naksh Jewels**.  
The goal of this assignment was to demonstrate real-world development skills, clean code structure, validation handling, and Docker-based deployment within a limited timeframe.

Despite the tight deadline and challenging requirements, the complete assignment was successfully implemented and delivered **on time**.

---

## 🚀 Features

### 📦 Product Management
- Add products with validation
- Fetch product listing from backend
- Active input validation to prevent invalid data
- Product schema validation at backend level

### 🛒 Cart Management
- Add products to cart
- Increase / decrease product quantity
- Remove products from cart
- Real-time cart updates
- Backend validation to avoid invalid quantities

### ✅ Active Validation
Validation is implemented at multiple levels:
- Backend validation using middleware
- Product fields validation (name, price, quantity, etc.)
- Cart validation to avoid negative or invalid quantities
- Proper error handling with meaningful responses

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Context API (State Management)
- Functional Components
- Responsive UI

### Backend
- Node.js
- Express.js
- MongoDB (Local)
- Mongoose
- JWT Authentication

### DevOps
- Docker
- Docker Compose

---

## 📁 Project Structure
```
project-root/
│
├── backend/
│ ├── config/ # MongoDB configuration
│ ├── controllers/ # Business logic
│ ├── middleware/ # Auth & validation middleware
│ ├── models/ # Mongoose schemas (User, Product, Cart)
│ ├── routes/ # API routes
│ ├── .env # Environment variables
│ ├── Dockerfile # Backend Docker configuration
│ └── index.js # Server entry point
│
├── frontend/
│ ├── components/ # UI components
│ ├── context/ # Global state management
│ ├── services/ # API calls
│ ├── App.jsx # Main app
│ ├── Dockerfile # Frontend Docker configuration
│ └── package.json
│
├── docker-compose.yml # Multi-container setup
└── README.md

```

---

## 🐳 Docker & Docker Compose

### Dockerfile
- Separate Dockerfiles for frontend and backend
- Handles dependency installation and build steps
- Ensures consistent runtime environment

### docker-compose.yml
- Runs frontend, backend, and MongoDB together
- Manages container networking
- Simplifies local setup with a single command

Run the complete application using:
```bash
docker-compose up --build

```
---
👤 Author

Harshit
Full-Stack Developer (React & Node.js)
```

If you want, I can also:
- ✔️ **Rewrite this in a slightly more corporate tone**
- ✔️ **Shorten it for GitHub reviewers**
- ✔️ **Align it exactly with Naksh Jewels evaluation points**
- ✔️ **Review your actual `docker-compose.yml` for correctness**

Just tell me what you want next 🙂
