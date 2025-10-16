# **Get Data From Request Query**

- In Express.js, the `app.get()` method is used to define a route handler for the HTTP GET request. When the client sends a request to a specific URL, this route executes a callback function that handles the request and sends a response.

```js
app.get(path, callback);
```

- path → defines the endpoint (like /search)

- callback → function that takes two arguments:

- request → contains details about the HTTP request

- response → used to send data back to the client

> ## **Query Parameters**

- Query parameters are the key-value pairs that appear in a URL after the question mark ?. They are used to send small pieces of data from the client to the server.

```
http://localhost:5000/search?age=25&userName=Hardik
```

> Accessing Query Parameters

```
request.query
```

- `request.query` returns an object containing all query parameters from the URL.

```js
// URL: /search?age=25&userName=Hardik
request.query; // { age: '25', userName: 'Hardik' }
```

> Code Explanation

```js
app.get("/search", (request, response) => {
  const { age, userName } = request.query;
  response.send(`The Age of ${userName} is ${age}`);
});
```

1. The route /search listens for `GET` requests.

2. The user provides query parameters like `?age=25&userName=Hardik`.

3. Express stores them in `request.query`.

4. The values are extracted using object destructuring.

5. A response message is created and sent back using `response.send()`.

```
http://localhost:5000/search?age=25&userName=Hardik
```

The server will respond with:

```csharp
The Age of Hardik is 25
```