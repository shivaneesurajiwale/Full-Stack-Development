# Student Feedback System (Assignment 7)

## Project Overview

The Student Feedback System is a full-stack web application designed to collect and manage feedback from Computer Engineering students. It allows students to:

* Submit course feedback (faculty, subject, rating)
* Submit college feedback (infrastructure, issues, suggestions)
* Log in using PRN and password
* Store all data in MongoDB

---

## Tech Stack

### Frontend

* HTML, CSS, JavaScript
* React (via CDN)
* Tailwind CSS

### Backend

* Node.js
* Express.js
* REST APIs

### Database

* MongoDB (Local)
* Mongoose (ODM)

---

## Project Structure

```id="7pi7jj"
Assignment-7/
│
├── back-end/
│   ├── models/
│   │   ├── User.js
│   │   ├── CourseFeedback.js
│   │   └── CollegeFeedback.js
│   │
│   ├── routes/
│   │   ├── auth.js
│   │   └── feedback.js
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── components/
│   ├── Login.js
│   ├── Dashboard.js
│   ├── CourseFeedbackForm.js
│   ├── CollegeFeedbackForm.js
│   └── Navbar.js
│
├── index.html
└── app.js
```

---

## Setup Instructions

### 1. Install Dependencies

```bash id="sg3n2p"
cd back-end
npm install
```

---

### 2. Setup Environment Variables

Create a `.env` file inside `back-end`:

```env id="9oxf88"
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/feedbackDB
```

---

### 3. Start MongoDB

```bash id="bw4bn4"
"C:\Program Files\MongoDB\Server\8.2\bin\mongod.exe"
```

---

### 4. Run Backend

```bash id="ze4adp"
npx nodemon server.js
```

Server runs at:

```id="uw0iwr"
http://localhost:5000
```

---

### 5. Run Frontend

* Open `index.html` using Live Server
  OR
* Double-click `index.html`

---

## API Endpoints

### Authentication

| Method | Endpoint          | Description           |
| ------ | ----------------- | --------------------- |
| POST   | `/api/auth/login` | Login / Register user |

---

### Course Feedback

| Method | Endpoint               |
| ------ | ---------------------- |
| POST   | `/api/feedback/course` |
| GET    | `/api/feedback/course` |

---

### College Feedback

| Method | Endpoint                |
| ------ | ----------------------- |
| POST   | `/api/feedback/college` |
| GET    | `/api/feedback/college` |

---

## Database Collections

* users
* coursefeedbacks
* collegefeedbacks

---

## Sample Data

### User

```json id="7kpbat"
{
  "prn": "12345",
  "password": "abc"
}
```

### Course Feedback

```json id="hcfbb6"
{
  "prn": "12345",
  "courseId": "CS101",
  "courseName": "DBMS",
  "faculty": "XYZ Sir",
  "rating": 5,
  "feedback": "Great teaching"
}
```

### College Feedback

```json id="93vkqv"
{
  "prn": "12345",
  "issueType": "Infrastructure",
  "comments": "Need better labs"
}
```

---

## Features

* User login using PRN and password
* Separate feedback forms for course and college
* Data stored in MongoDB collections
* REST API integration
* Clean UI with Tailwind CSS

---

## Limitations

* Passwords are stored in plain text (no hashing)
* No authentication tokens (JWT not implemented)
* Basic validation only

---

## Future Enhancements

* Add password hashing (bcrypt)
* Implement JWT authentication
* Admin dashboard for viewing feedback
* Data visualization (charts)
* Deployment on cloud

---

## Conclusion

This project demonstrates a complete full-stack application using MERN stack concepts, including frontend UI, backend APIs, and database integration.

---



