# **EJS Code**

⚠️ If You Don’t Have a Folder Named "views" :

- If you want to use a different folder name (like templates, pages, or frontend),
you can manually set the folder path using:

```js
app.set("views", "./templates");
app.set("view engine", "ejs");  
```

Folder Structure Example:
```
project/
│
├── app.js
└── templates/
    ├── home.ejs
    └── about.ejs

```

> Passing Values from index.js to EJS
- When using EJS (Embedded JavaScript) as a templating engine in Express.js, you can pass data from your server file (index.js) to an EJS file for display in the browser.

```js
// Route
app.get("/", (req, res) => {
  const data = {
    title: "Welcome to My Website",
    userName: "Hardik",
    age: 20,
  };

  // Passing data to EJS file
  res.render("home", data);
});
```

- “EJS allows you to write JavaScript conditions inside HTML to show or hide content based on data sent from your server.”