const express = require("express");
const app = express();

require("dotenv").config();
// parse requests of content-type - application / json;

let dbConnect = require("./dbConnect");
let userRoutes = require("./routes/userRoutes");
let postRoutes = require('./routes/postRoutes');
let commentRoutes = require('./routes/commentRoutes');
let likeRoutes = require('./routes/likeRoutes');

app.use(express.json());
app.use("/api/users", userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/likes', likeRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MongoDB application. Module 9, Exercise 2" });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080 || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port
${PORT}.`);
});