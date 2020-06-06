const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

var database = mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// checking the connection status
mongoose.connection
  .once("open", () => {
    console.log("connection established:", mongoose.connection.readyState);
  })
  .on("error", () => {
    console.log("connection error:", error);
  });

module.exports = database;
