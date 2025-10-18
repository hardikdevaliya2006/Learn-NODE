const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
  console.log("Server running on http://localhost:3000");
});

app.get("/", (request, response) => {
  console.log("Serever Start");
  response.send("Serever Start");
});

/* Property */

app.post("/sendJsonData", (request, response) => {
  const userData = request.body;
  response.send(userData);
});

app.post("/sendFromData", (request, response) => {
  const userData = request.body;
  response.send(userData);
});

app.get("/getHostname", (request, response) => {
  response.send(request.hostname);
});

app.get("/getip", (request, response) => {
  response.send(request.ip);
});

app.get("/getips", (request, response) => {
  response.send(request.ips);
});

app.get("/getMethod", (request, response) => {
  response.send(request.method);
});

app.get("/getRoute", (request, response) => {
  response.send(request.originalUrl);
});

app.get("/getPath", (request, response) => {
  response.send(request.path);
});

app.get("/getProtocol", (request, response) => {
  response.send(request.protocol);
});

app.get("/getIsSafe", (request, response) => {
  response.send(request.secure);
});

app.get("/getRouteInfo", (request, response) => {
  response.send(request.route);
});

/* Method */

app.get("/acceptsMethod", (request, response) => {
  if (request.accepts("html")) {
    response.send("<h1>Hello This is HTML Response</h1>");
  } else if (request.accepts("json")) {
    response.send({
      message: "Hello JSON",
    });
  } else if (request.accepts("XML")) {
    response.send("<message>Hello this is XML</message>");
  } else {
    response.send("Contantan type not supported");
  }
});

app.get("/aboutSender", (request, response) => {
  response.send(request.get("Accept"));
});

app.post("/requestType", (request, response) => {
  if (request.is('application/json')) {
    response.send("Valid Json");
  } else if (request.is('text/html')) {
    response.send("This is Text/HTML");
  } else {
    response.status(400).send("Unspported contant Type.");
  }
});

/* Cookie Will be learn Later */