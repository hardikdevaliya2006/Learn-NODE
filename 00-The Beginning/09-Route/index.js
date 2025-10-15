const express = require("express")
const app = express();

app.listen(3000, () => {
    console.log("App running on http://localhost:3000")
})

app.get("/", (request, response) => {
    response.send("The Project Has been Running Smotthly")
})