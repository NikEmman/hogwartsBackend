const express = require("express");
const cors = require("cors");
const data = require("./data.js");

const app = express();
app.use(cors());
app.use(express.json());

// REST API endpoint for /houses
app.get("/houses", (req, res) => {
  try {
    const name = req.query.name?.toLowerCase() || "";
    // if name param is present, use it to filter data, else return full data
    // data.default is used because data.js is an ES6 module
    const filteredHouses = name
      ? data.default.filter((house) => house.name.toLowerCase().includes(name))
      : data.default;
    res.json(filteredHouses);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
