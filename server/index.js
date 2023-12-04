const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json()); 

let bloodData = {};
let solveData = {};
let leaderboardData = {};


app.post("/api/blood", (req, res) => {
  if (req.body) {
    bloodData = req.body;
    res.status(200).send("Data received for /blood route");
  } else {
    res.status(400).send("Bad Request: No data provided");
  }
});


app.get("/api/blood", (req, res) => {
  res.json(bloodData);
});

app.post("/api/solve", (req, res) => {
  if (req.body) {
    solveData = req.body;
    res.status(200).send("Data received for /solve route");
  } else {
    res.status(400).send("Bad Request: No data provided");
  }
});

app.get("/api/solve", (req, res) => {
  res.json(solveData);
});

app.post("/api/leaderboard", (req, res) => {
  if (req.body) {
    leaderboardData = req.body;
    res.status(200).send("Data received for /leaderboard route");
  } else {
    res.status(400).send("Bad Request: No data provided");
  }
});

app.get("/api/leaderboard", (req, res) => {
  res.json(leaderboardData);
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
