# **Response Methods**

| **Method**             | **Description**                                                                             | **Example**                                                | **Output / Usage**                                          |
| ---------------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ----------------------------------------------------------- |
| **`res.send()`**       | Sends a response (string, array, object, or HTML). Ends the response process automatically. | `res.send("Hello World!")`                                 | Sends plain text or HTML to the client.                     |
| **`res.json()`**       | Sends a JSON response to the client.                                                        | `res.json({ name: "Hardik", age: 21 })`                    | Sends structured JSON data.                                 |
| **`res.jsonp()`**      | Sends a JSON response with JSONP support (used when calling APIs from other domains).       | `res.jsonp({ name: "Hardik" })`                            | Sends JSON wrapped in a callback for cross-domain requests. |
| **`res.redirect()`**   | Redirects the client to a different URL.                                                    | `res.redirect('/home')`                                    | Redirects the browser to another route or website.          |
| **`res.render()`**     | Renders a view template (like EJS, Pug, or Handlebars).                                     | `res.render('index', { title: 'Home' })`                   | Used in template-based web apps to send HTML pages.         |
| **`res.download()`**   | Prompts the user to download a file from the server.                                        | `res.download('report.pdf')`                               | Starts file download on the client side.                    |
| **`res.sendFile()`**   | Sends a file as a response to the client.                                                   | `res.sendFile(__dirname + '/index.html')`                  | Sends a file to the browser to view or render.              |
| **`res.end()`**        | Ends the response process without sending extra data.                                       | `res.end()`                                                | Used when no data needs to be sent (just to end).           |
| **`res.sendStatus()`** | Sets the status code and sends its string message.                                          | `res.sendStatus(404)`                                      | Sends `"Not Found"` with status code 404.                   |
| **`res.headersSent`**  | A **property (not function)** that returns `true` if headers have already been sent.        | `if (res.headersSent) console.log("Headers already sent")` | Helps check if you can still modify response.               |
| **`res.set()`**        | Sets one or more HTTP headers in the response.                                              | `res.set('Content-Type', 'text/html')`                     | Used to control HTTP headers.                               |
| **`res.get()`**        | Returns the value of a response header.                                                     | `res.get('Content-Type')`                                  | Reads header information previously set.                    |




| **Status Code** | **Name**              | **Meaning / Description**                                                                     | **Type**        |
| --------------- | --------------------- | --------------------------------------------------------------------------------------------- | --------------- |
| **200**         | OK                    | Request was successful. The server returned the expected response.                            | ✅ Success       |
| **201**         | Created               | The request was successful, and a new resource was created. Commonly used with POST requests. | ✅ Success       |
| **403**         | Forbidden             | The client is not allowed to access the requested resource (even if authenticated).           | 🚫 Client Error |
| **404**         | Not Found             | The requested resource could not be found on the server.                                      | 🚫 Client Error |
| **500**         | Internal Server Error | A general error occurred on the server side (bug, crash, etc.).                               | ❌ Server Error  |
| **503**         | Service Unavailable   | The server is temporarily unable to handle the request (maintenance or overload).             | ❌ Server Error  |
| **504**         | Gateway Timeout       | The server (acting as a gateway) did not receive a timely response from another server.       | ❌ Server Error  |
