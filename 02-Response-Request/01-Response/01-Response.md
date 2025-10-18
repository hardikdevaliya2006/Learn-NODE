# **Response**

- In Node.js (especially with Express.js), response (often written as res or response) is an object that represents the HTTP response your server sends back to the client (browser or API caller).

It is used to:

- Send data (like text, JSON, or HTML)

- Set HTTP status codes

- Set headers

- End the communication between the server and client

```js
app.get("/hello", (request, response) => {
  response.send("Welcome to Node.js!");
});
```