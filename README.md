# Naksh Jewels - E-Commerce Module

A mini e-commerce application built for the Naksh Jewels Internship Assessment. This project features a product listing, shopping cart functionality, and is fully containerized with Docker.

## 🚀 Features
- **Frontend:** React with Context API for state management.
- **Backend:** Node.js & Express with custom validation middleware.
- **Image Handling:** Multer storage for persistent and formatted image uploads.
- **DevOps:** Dockerized frontend and backend services.

## 🛠️ Setup Instructions

### Prerequisites
- Docker & Docker Compose installed.
- Node.js (if running locally without Docker).

### Running with Docker (Recommended)
1. Clone the repository.
2. Create a `.env` file in the `backend/` folder (see Environment Variables below).
3. Run the following command from the root:
   ```bash
   docker-compose up --build