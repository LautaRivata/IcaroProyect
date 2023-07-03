const bcrypt = require("bcrypt");
const { createUsers, findIdDisponible } = require("../services/users");

exports.getRegister = function (req, res, next) {
  res.render("register", { user: false });
};

exports.postRegister = function (req, res, next) {
  const { body } = req;

  const idDisponible = findIdDisponible();
  const newUser = {
    id: idDisponible,
    nombre: body.nombre,
    email: body.email,
    password: "",
  };

  bcrypt.hash(body.password, 10, function (err, hash) {
    newUser.password = hash;
    console.log("Body: ", newUser);
    createUsers(newUser);
    res.redirect("/");
  });
};
