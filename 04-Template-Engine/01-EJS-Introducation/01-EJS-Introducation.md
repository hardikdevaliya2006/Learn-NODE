# **🌐 EJS Introduction**

- EJS (Embedded JavaScript) is a templating engine used with Node.js and Express.js to generate dynamic HTML pages. It allows you to embed JavaScript code directly inside HTML files, making web pages more flexible and data-driven.

> ⚙️ How EJS Works :
- When a request comes to the server, Express renders an `.ejs` file.
It processes the JavaScript code inside it and converts it into a plain HTML file that is sent to the client browser. 

> 🧩 EJS Basic Tags

| **Tag Type**             | **Syntax** | **Description**                                                                                      | **Example**                                   |
| ------------------------ | ---------- | ---------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| **Output Tag**           | `<%= %>`   | Displays (prints) data or the result of JavaScript expression directly into the HTML output.         | `<h2>Welcome <%= userName %></h2>`            |
| **Scriptlet Tag**        | `<% %>`    | Runs JavaScript code **without printing** the output to the page (used for loops, conditions, etc.). | `<% if (age >= 18) { %> <p>Adult</p> <% } %>` |
| **Unescaped Output Tag** | `<%- %>`   | Displays data **without escaping HTML** (used for HTML content like `<b>` tags).                     | `<%- "<b>Hello User</b>" %>`                  |
| **Comment Tag**          | `<%# %>`   | Used to write comments that will **not appear** in the final HTML output.                            | `<%# This is a comment %>`                    |

```html
<!DOCTYPE html>
<html>
  <head>
    <title>EJS Example</title>
  </head>
  <body>
    <h1>Welcome, <%= userName %></h1>

    <% if (age >= 18) { %>
      <p>You are an adult.</p>
    <% } else { %>
      <p>You are under 18.</p>
    <% } %>

    <ul>
      <% users.forEach(function(user) { %>
        <li><%= user %></li>
      <% }); %>
    </ul>
  </body>
</html>
```
