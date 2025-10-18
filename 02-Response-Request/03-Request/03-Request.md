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

