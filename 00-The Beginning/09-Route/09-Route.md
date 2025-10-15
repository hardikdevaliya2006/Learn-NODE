# **Route**

> 🧭 What is a Route?

- A Route is a path or URL that defines how an application responds to a client request. In web development, a route decides which code or component should be executed when a user visits a specific URL.

> 🔢 Types of Routes in Node.js (Express.js)

1. Static Routes : Used when the route path is fixed (doesn’t change).

```
Ex. https://localhost:3000/about
```

2. Nested Routes : Nested Routes are routes defined inside another route, usually to reflect a hierarchy or relationship between resources.

```
Ex. https://localhost:3000/dashboard → Dashboard Home
    https://localhost:3000/dashboard/profile → User Profile
    https://localhost:3000/dashboard/settings → Settings
```

3. Query Routes : Query routes use query strings in the URL to pass data.

```
Ex. http://localhost:3000/search?term=shoes&category=men
```

4. Dynamic Routes (Parameterized Routes) : Used when part of the URL is variable (like user ID, product ID).

```
Ex. http://localhost:3000/user/10 → “User ID: 10”
    http://localhost:3000/user/45 → “User ID: 45”
```

## **When to use Route?**

- We use Routes in Node.js (Express) to handle different HTTP requests for different URLs or paths. Each route defines what happens when the client makes a request to a specific endpoint (URL) using a specific HTTP method.

| HTTP Method | Purpose              | CRUD Operation | Example                      |
| ----------- | -------------------- | -------------- | ---------------------------- |
| **GET**     | Fetch data           | **Read**       | `/users` → get all users     |
| **POST**    | Add new data         | **Create**     | `/users` → add new user      |
| **PUT**     | Update existing data | **Update**     | `/users/:id` → update a user |
| **DELETE**  | Remove data          | **Delete**     | `/users/:id` → delete a user |

```js
const express = require("express");
const app = express();
app.use(express.json()); // to read JSON data

// 🟢 CREATE - POST
app.post("/users", (req, res) => {
  res.send("New user created!");
});

// 🔵 READ - GET
app.get("/users", (req, res) => {
  res.send("Fetching all users...");
});

// 🟡 UPDATE - PUT
app.put("/users/:id", (req, res) => {
  res.send(`Updating user with ID ${req.params.id}`);
});

// 🔴 DELETE - DELETE
app.delete("/users/:id", (req, res) => {
  res.send(`Deleting user with ID ${req.params.id}`);
});

// Start Server
app.listen(3000, () => console.log("Server running on port 3000"));
```