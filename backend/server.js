const express = require("express");
const cors = require("cors");

const options = {
  origin: "localhost: ",
  optionSuccessStatus: 200,
};
app.use(cors(options));
const app = express();

app.route("/", (req, res) => {
  console.log("Server is listening on port 3000");
});

app.listen(8000, () => {
  console.log("Server is listening on port 8000 🏃🏃🏃");
});
