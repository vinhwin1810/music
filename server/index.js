const express = require("express");
const bodyParser = require("body-parser");
const port = 4000;
const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//ROUTES
app.get("/api", (req, res) => {
  res.json({ message: "BACKEND API" });
});

app.listen(port, () => {
  console.log("APP");
});
