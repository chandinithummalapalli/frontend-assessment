📘 Frontend Developer Task – Full Stack Application
📌 Project Description
This project is a Full Stack Web Application developed as part of a Frontend Developer assessment.
It includes user authentication, protected dashboard, and task management (CRUD) functionality.
The frontend is built using React (Vite) and the backend is built using Node.js & Express.

🧩 Tech Stack
Frontend
React (Vite)
React Router DOM
Axios
CSS
Backend
Node.js
Express.js
JWT Authentication
Middleware-based route protection

📂 Project Structure

FRONTEND TASK/
│
├── backend/
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   │
│   ├── routes/
│   │   ├── auth.js
│   │   └── tasks.js
│   │
│   ├── .env
│   ├── server.js
│   ├── package.json
│   └── node_modules/
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   │
│   ├── src/
│   │   ├── assets/
│   │
│   │   ├── components/
│   │   │   └── ProtectedRoute.jsx
│   │
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── Dashboard.jsx
│   │
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   └── taskService.js
│   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── node_modules/

🚀 Features Implemented
🔐 Authentication
User Registration (Name, Email, Password)
User Login
JWT-based authentication
Protected routes using middleware and frontend guard

📊 Dashboard
Accessible only after login
Displays user-specific data
Task management functionality

📝 Task Management
Create tasks
View tasks
Delete tasks
Secured with authentication middleware

🔒 Security
JWT token validation
Protected backend routes
Frontend route protection using ProtectedRoute.jsx

▶️ How to Run the Project
1️⃣ Run Backend
cd backend
npm install
node server.js
Backend runs on:
Copy code

http://localhost:5000

2️⃣ Run Frontend
cd frontend
npm install
npm run dev
Frontend runs on:

http://localhost:5173

🔄 Application Flow
User registers using Register page
User logs in using Login page
JWT token is generated and stored
User is redirected to Dashboard
Dashboard allows task operations
Logout clears authentication state
