#  The Souled Store – Full Stack Web Application

##  Overview

This project is a full-stack e-commerce web application inspired by *The Souled Store*. It allows users to browse products, add items to the cart, and place orders. The application also includes a newsletter subscription feature.

The system is built using a simple frontend-backend architecture with MongoDB for data storage.

---

##  Objectives

* To design an interactive e-commerce user interface
* To implement cart and wishlist functionality
* To integrate a backend using Node.js
* To store user orders and email subscriptions in a database
* To understand full-stack data flow (Frontend → Backend → Database)

---

##  Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript (Vanilla JS)

### Backend

* Node.js
* Express.js

### Database

* MongoDB

---

##  Project Structure

```
project/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── app.js
│
├── backend/
│   ├── server.js
│   ├── package.json
```

---

##  Features

###  User Features

* Browse products by category
* Add items to cart
* Update quantity or remove items
* Wishlist functionality
* Apply promo codes
* Place orders

###  Newsletter

* Users can subscribe using email
* Email is stored in database

###  Backend Features

* REST API for handling requests
* Stores:

  * Orders (`/order`)
  * Subscribers (`/subscribe`)

---

##  Working Flow

1. User adds products to cart
2. User clicks **Place Order**
3. Frontend sends POST request to backend
4. Backend stores order in MongoDB

Similarly:

* Email subscription sends data to `/subscribe`

---

## 🔌 API Endpoints

| Method | Endpoint   | Description             |
| ------ | ---------- | ----------------------- |
| POST   | /order     | Save user order         |
| POST   | /subscribe | Save email subscription |

---

##  How to Run the Project

### 1. Install Dependencies

```
npm install
```

### 2. Start Backend Server

```
node server.js
```

### 3. Run Frontend

* Open `index.html` in browser
  OR
* Use Live Server in VS Code

---

##  Testing

* Add items to cart → Click *Place Order*
* Check if order is stored in MongoDB
* Enter email → Click *Subscribe*
* Verify email storage

---

##  Expected Output

* Orders stored in database
* Emails stored in database
* Smooth UI interaction for shopping

---

##  Conclusion

This project demonstrates a basic full-stack e-commerce system with frontend interactivity and backend data handling. It highlights how user actions are processed and stored using REST APIs and MongoDB.

---

## 🔮 Future Enhancements

* User authentication system
* Payment gateway integration
* Admin dashboard to view orders
* Product database integration instead of static data
* Deployment using cloud services

---

## 👨‍💻 Author

* Computer Engineering Student
* Pimpri Chinchwad College of Engineering

---
