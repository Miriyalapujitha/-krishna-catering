const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

console.log("STARTING SERVER...");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb+srv://pujithamiriyala418_db_user:MyPass123@catering-cluster.rrmidfw.mongodb.net/catering?retryWrites=true&w=majority")
.then(() => console.log("MongoDB Connected ✅"))
.catch(err => console.log(err));

// Test route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000 🔥");
});