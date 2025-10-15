# **What are parameters in Express.js?**

- In Express.js, parameters are values you pass in the URL to make routes dynamic.
  They allow you to capture values (like `id`, `username`) from the URL and use them inside your code.

> ## Pass the value thought the route parametre

- Route parameters are dynamic values that you pass in the URL. They are written with a colon : before the name.

```
/user/:id
```

- Here, :id is a route parameter that can change depending on the request.

**Why use Route Parameters?**

To pass dynamic data like:

- User ID
- Product ID

- Post title

- Category name

**⚙️ Simple Example**

```js
const express = require("express");
const app = express();

// Example route with parameter
app.get("/user/:id", (req, res) => {
  // Access the value of 'id' from URL
  const userId = req.params.id;
  res.send(`You requested user with ID: ${userId}`);
});

// Another example with two parameters
app.get("/product/:category/:pid", (req, res) => {
  const { category, pid } = req.params;
  res.send(`Category: ${category}, Product ID: ${pid}`);
});

app.listen(3000, () => console.log("Server running on port 3000"));
```