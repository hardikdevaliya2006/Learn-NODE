const express = require('express')
const app = express()

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

app.get("/", (request, response) => {
    response.send("Ok")
})

app.get("/search", (request, response) => {
    const {age, userName} = request.query
    response.send(`The Age of ${userName} is ${age}`)
})