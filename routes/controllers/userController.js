const User = require("../../models/usermodel");

exports.addUser = async (req, res, next) => {
  const { name, email } = req.body;
  const response = await User.create({ name, email });
  const data = response.dataValues;

  res.status(201).json({
    status: "success",
    data,
  });
};
exports.allUser = (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: [],
  });
};
exports.deleteUser = (req, res, next) => {
  console.log(req.params);
  res.status(204).json({
    status: "success",
  });
};

exports.editUser = (req, res, next) => {
  console.log(req.params);
  res.status(200).json({
    status: "success",
    data: "updated user",
  });
};
