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

let fakeBloodData = {
  chal_name: "test",
  points: 100,
  team_name: "test-team",
  solved_by: "ashfaq",
  first_blood: true,
};

let fakeSolveData = [
  {
    chal_name: "test",
    points: 100,
    team_name: "test-team",
    solved_by: "ashfaq",
    first_blood: false,
  },
  {
    chal_name: "test",
    points: 150,
    team_name: "test-team_1",
    solved_by: "ashfaq",
    first_blood: false,
  },
];

let fakeLeaderboardData = {
  data: [
    {
      position: 1,
      name: "Ali",
      points: 1520,
    },
    {
      position: 2,
      name: "Ali T",
      points: 1280,
    },
    {
      position: 3,
      name: "Zain Z",
      points: 1200,
    },
    {
      position: 4,
      name: "T Ali",
      points: 1150,
    },
    {
      position: 5,
      name: "Zain Ali",
      points: 1080,
    },
  ],
  leader: {
    name: "Ali",
    points: 1520,
  },
  new_leader: true,
};




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
  fakeBloodData = req.body;
  res.status(200).send({ status: "ok" });
});


app.get("/api/blood", (req, res) => {
  res.json(fakeBloodData);
   fakeBloodData = {};
});

app.post("/api/solves", (req, res) => {
  validateRequest(req, res);
  console.log(`[/api/solves]      Got data: ${JSON.stringify(req.body)}`);
  solveData = req.body;
  res.status(200).send({ status: "ok" });
});

app.get("/api/solves", (req, res) => {
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
