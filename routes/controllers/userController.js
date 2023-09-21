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
exports.allUser = async (req, res, next) => {
  const response = await User.findAll();
  const data = response.map((user) => {
    return user.dataValues;
  });
  res.status(200).json({
    status: "success",
    data,
  });
};
exports.deleteUser = async (req, res, next) => {
  console.log("pppppppppppppppppppppp", req.params);
  const id = req.params.id * 1;
  const response = await User.destroy({
    where: {
      id,
    },
  });
  res.status(204).json({
    status: "success",
  });
};

exports.editUser = async (req, res, next) => {
  const id = req.params.id * 1;
  const response = await User.update(req.body, {
    where: {
      id,
    },
  });
  res.status(200).json({
    status: "success",
    data: response,
  });
  return;
};
