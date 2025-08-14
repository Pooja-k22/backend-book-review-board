# Backend - Book Review Board

This is the backend for the **Book Review Board** web app. Built with **Node.js**, **Express**, and **MongoDB**, it provides RESTful APIs for managing users, books, and reviews. Authentication is handled using **JWT**.


---


## 🚀 Setup Instructions

1. **Clone the repository**
   ```sh
   git clone https://github.com/Pooja-k22/fontend-book-review.git
   cd fontend-book-review
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Create a .env file in the root directory**
   ```sh
   DATABASE =your_mongodb_url
   SECTETKEY = your secret key for jwt 
   ```

4. **Start the development server**
   ```sh
   npm start
   ```

---

## API Routes

| Method | Route                       | Description                |
|--------|----------------------------|----------------------------|
| POST   | `/register`                | Register a new user        |
| POST   | `/login`                   | User login                 |
| POST   | `/add-book`                | Add a new book             |
| GET    | `/get-book`                | Get all books              |
| GET    | `/book-detail/:id`         | Get details of a book      |
| POST   | `/add-review`              | Add a review to a book     |
| GET    | `/get-review/:id`          | Get reviews for a book     |

---

---

## License

MIT
