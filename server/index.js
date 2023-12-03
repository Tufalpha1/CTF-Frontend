const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json()); 

let jsonData = {};

app.post("/api/data", (req, res) => {
  if (req.body) {
    jsonData = req.body;
    res.status(200).send("Data received");
  } else {
    res.status(400).send("Bad Request: No data provided");
  }
});


app.get("/api/data", (req, res) => {
  res.json(jsonData);
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
