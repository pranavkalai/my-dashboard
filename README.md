# Transport Business Dashboard

A full-stack web application for managing data for a small business. This project is built using **React**, **Node.js**, **Express**, and **PostgreSQL**, with plans for deployment on **AWS**. It is designed to be easy to set up locally and extendable for further features.

---

## Tech Stack

**Frontend:**  
- React (Vite)  
- React Router DOM for client-side routing  
- Axios for API requests  
- React-Bootstrap and custom CSS for UI components  

**Backend:**  
- Node.js  
- Express.js for API routes and server  
- PostgreSQL database  
- `pg` Node library for database access  

---

## Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository
```bash
git clone https://github.com/pranavkalai/my-dashboard.git
cd my-dashboard
```

### 2. Backend Setup
1. Naviagte to the banckend directory:
```bash
cd ./backend/
```
2. Install Dependencies:
```bash
npm install
```
3. Set up your PostgreSQL database:
- Create a new database
- Create a `.env` file in the `backend` folder (if not already present)
- Add your database credentials:
```bash
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_postgres_username
DB_PASSWORD=your_postgres_password
DB_NAME=my_dashboard_db
```

4. Start the bankend server:
```bash
node server.js
```

### 3. Frontend Setup

1. Navigate to the frontend directory:
```bash
cd ./frontend/
```
2. Install dependencies:
```bash
npm install
```

3. Start the React development server:
```bash
npm run dev
```
