# **🧠 What Are Partials in EJS?**

- Partials in EJS are reusable template files that help you avoid writing the same code again and again. They are like “components” in React or “includes” in PHP.

🔹 Definition:

> A Partial in EJS is a piece of code (usually a common layout section like header, footer, or navbar) that can be included in multiple pages using `<%- include() %>`.

🧩 header.ejs (Partial)

```html
<header>
  <h1>My EJS Website</h1>
  <nav>
    <a href="/">Home</a> | <a href="/about">About</a> |
    <a href="/contact">Contact</a>
  </nav>
</header>
<hr />
```

🧩 footer.ejs (Partial)

```html
<hr />
<footer>
  <p>© 2025 My EJS Website. All rights reserved.</p>
</footer>
```

📄 index.ejs (Main Page)
```html
<%- include("partials/header") %>

<h2>Welcome to the Home Page!</h2>
<p>This is the content of the home page.</p>

<%- include("partials/footer") %>
```

📄 about.ejs (Another Page)

```
<%- include("partials/header") %>

<h2>About Us</h2>
<p>We are building awesome EJS-based websites!</p>

<%- include("partials/footer") %>
```