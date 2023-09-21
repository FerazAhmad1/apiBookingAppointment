const User = require("./models/usermodel");
const express = require("express");
const userRoutes = require("./routes/userRoutes");
const app = express();
app.use(express.json());
app.use("/api/v1/user", userRoutes);

const port = 3000;
User.sync((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
});
app.listen(port, () => {
  console.log(`app running on ${port}`);
});
