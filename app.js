const User = require("./models/usermodel");
const express = require("express");
const app = express();
app.use(express.json());

const port = 3000;
User.sync((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
});
app.listen(port, () => {
  console.log(`app running on ${port}`);
});
