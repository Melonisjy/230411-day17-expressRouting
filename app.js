const express = require("express");
const userRouter = require("./routes/user");
const tweetRouter = require("./routes/tweet");

const app = express();

const port = 3010;

app.use("/user", userRouter);
app.use("/tweet", tweetRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the server!");
});

app.post("/", (req, res) => {
  res.send("Post");
});

app.put("/", (req, res) => {
  res.send("Put");
});

app.delete("/", (req, res) => {
  res.send("Delete");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
