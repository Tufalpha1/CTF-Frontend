const express = require("express");
const cors = require("cors");

const app = express();

const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); 

let bloodData = {};
let solveData = {};
let leaderboardData = {};

function validateRequest(req, res) {
  // A simple validation function to check if the request body is valid
  if(req.body === undefined || req.body === null || Object.keys(req.body).length === 0) {
    res.status(400).send("Bad Request: No data provided");
  }

  if(
    !req.body.hasOwnProperty("points")    ||
    !req.body.hasOwnProperty("category")  ||
    !req.body.hasOwnProperty("chal_name") ||
    !req.body.hasOwnProperty("team_name") ||
    !req.body.hasOwnProperty("solved_by") ||
    !req.body.hasOwnProperty("first_blood")
  ) {
    res.status(400).send({ status: "Bad Request: Missing data" });
    }
}

app.post("/api/blood", (req, res) => {
  validateRequest(req, res);
  console.log(`[/api/blood]       Got data: ${JSON.stringify(req.body)}`);
  bloodData = req.body;
  res.status(200).send({ status: "ok" });
});


app.get("/api/blood", (req, res) => {
  res.json(bloodData);
});

app.post("/api/solve", (req, res) => {
  validateRequest(req, res);
  console.log(`[/api/solve]       Got data: ${JSON.stringify(req.body)}`);
  solveData = req.body;
  res.status(200).send({ status: "ok" });
});

app.get("/api/solve", (req, res) => {
  res.json(solveData);
});

app.post("/api/leaderboard", (req, res) => {
  
  if(req.body === undefined || req.body === null || Object.keys(req.body).length === 0) {
    res.status(400).send({ status: "Bad Request: No data provided" });
  }

  console.log(`[/api/leaderboard] Got data: ${JSON.stringify(req.body)}`);

  prev_leader = leaderboardData["leader"] || undefined;
  new_leader = req.body[0];
  has_new_leader = false;

  // Please tell me of a better way to do this
  console.log(`[/api/leaderboard] Previous leader: ${JSON.stringify(prev_leader)}`);
  console.log(`[/api/leaderboard] New leader: ${JSON.stringify(new_leader)}`);

  if(prev_leader === undefined || new_leader.name !== prev_leader.name) { has_new_leader = true; }
  leaderboardData = {"data": req.body, "leader": new_leader, "new_leader": has_new_leader};
  console.log(`[/api/leaderboard] Leaderboard data: ${JSON.stringify(leaderboardData)}`);
  res.status(200).send({ status: "ok" });
});

app.get("/api/leaderboard", (req, res) => {
  res.json(leaderboardData);
});


app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
