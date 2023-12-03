const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000; 

app.use(cors());

const jsonData = {
  message: "Hello from the server!",
  data: [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
  ],
};

app.get("/api/data", (req, res) => {
  res.json(jsonData);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
