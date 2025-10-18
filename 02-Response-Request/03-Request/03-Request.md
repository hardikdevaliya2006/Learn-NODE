# **🧩 What is a Request in Node.js?**

- In Node.js (with Express),
  a request is the information that a client (like browser or app) sends to the server. When a user visits a webpage or sends data (for example, by submitting a form), the browser sends a request to the server.

> ## 📦 Request Object Property

| **Property**          | **Description**                                              |
| --------------------- | ------------------------------------------------------------ |
| `req.url`             | The full URL of the incoming request                         |
| `req.method`          | The HTTP method (GET, POST, PUT, DELETE, etc.)               |
| `req.query`           | Contains query string parameters (from `?key=value`)         |
| `req.params`          | Contains route parameters (from `/route/:id`)                |
| `req.body`            | Contains data sent in the body (POST/PUT requests)           |
| `req.headers`         | Contains header information about the request                |
| `req.path`            | The path part of the URL (without query string)              |
| `req.hostname`        | The hostname of the request (e.g., `localhost`)              |
| `req.protocol`        | The protocol used (`http` or `https`)                        |
| `req.ip`              | The IP address of the client                                 |
| `req.cookies`         | Contains cookies sent by the client (if using cookie-parser) |
| `req.baseUrl`         | The base URL path on which the router instance was mounted   |
| `req.originalUrl`     | The original URL requested (before any changes)              |
| `req.secure`          | Returns `true` if request was made using HTTPS               |
| `req.get(headerName)` | Get a specific header value                                  |

> ## ⚙️ Response Object — Common Methods

| **Method**        | **Description**                                                                                |
| ----------------- | ---------------------------------------------------------------------------------------------- |
| `res.accepts()`   | Checks what content types (like JSON, HTML, etc.) the client can accept.                       |
| `res.get()`       | Returns the value of a response header.                                                        |
| `res.is(type)`    | Checks if the incoming request’s `Content-Type` matches the given type (e.g., `json`, `html`). |
| `res.range(size)` | Parses the `Range` header from the request to determine which part of the content to send.     |

> 🧠 Step 1: Create a Basic Express Server

- Create a new file — for example, server.js

```js
const express = require("express");
const app = express();
const PORT = 3000;
```

> 🧠 Step 2: Use Middleware to Parse JSON

- Before handling any request, we must tell Express to understand JSON data.

```js
app.use(express.json());
```

👉 This line allows the server to automatically parse incoming JSON data
and make it available inside req.body.

> 🧠 Step 3: Create a POST Route to Receive Data

```js
app.post("/user", (req, res) => {
  const userData = req.body; // Receive JSON data from client
  console.log("Received Data:", userData);

  res.status(201).json({
    message: "User data received successfully!",
    received: userData,
  });
});


req.body → holds the JSON data sent by the client

res.status(201) → sets status code “Created”

res.json() → sends a JSON response back to the client
```

> 🧠 Step 4: Start the Server

```js
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

> 🧠 Step 5: Send JSON Data from Client

You can send data using Postman, curl, or fetch (from frontend).

**🧪 Using Postman:**

1. Open Postman

2. Choose POST method

3. Enter URL → http://localhost:3000/user

4. Go to Body → raw → JSON

5. Type your JSON:

```json
{
  "name": "Hardik",
  "age": 21,
  "email": "hardik@example.com"
}
```

Click Send 🚀

✅ The server will log:

Received Data: { name: 'Hardik', age: 21, email: 'hardik@example.com' }

And return a response:

```json
{
  "message": "User data received successfully!",
  "received": {
    "name": "Hardik",
    "age": 21,
    "email": "hardik@example.com"
  }
}
```

> 🧠 Step 6: (Optional) Send JSON from Frontend Using Fetch

If you’re using a frontend like React or plain JS:

```js
fetch("http://localhost:3000/user", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Hardik",
    age: 21,
    email: "hardik@example.com",
  }),
})
  .then((res) => res.json())
  .then((data) => console.log(data));
```
