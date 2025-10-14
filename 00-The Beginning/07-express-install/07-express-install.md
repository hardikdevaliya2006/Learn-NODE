# **Express.js Install**

> Step 1: Initialize Project (if not done yet)

Inside your project folder, make sure you have package.json:

```
> npm init -y
```

> Step 2: Install Express

Run this command in terminal:

```
> npm install express
```

> Step 3: Verify Installation

Check package.json, you should see:

```json
"dependencies": {
  "express": "^4.19.2"
}
```

> Step 4: Create First Express App

Make a file `index.js`

```js
// Import express
const express = require("express");
const app = express();

// Define a route
app.get("/", (req, res) => {
  res.send("🚀 Hello Express!");
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```

Run it:

```
> node index.js
```
