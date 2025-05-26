const express = require("express");
const cors = require("cors");
const data = require("./data");

const app = express();
app.use(cors());
app.use(express.json());

// REST API endpoint for /houses
app.get("/houses", (req, res) => {
  try {
    const name = req.query.name?.toLowerCase() || "";
    // if name param is present, use it to filter data, else return full data
    const filteredHouses = name
      ? data.filter((house) => house.name.toLowerCase().includes(name))
      : data;
    res.json(filteredHouses);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

//export it for testing
module.exports = app;

// start the server when not in test
if (require.main === module) {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
