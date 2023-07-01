const bcrypt = require("bcrypt");

const {
  findIdDisponible,
  createUsers,
  findUserByUsermail,
} = require("../services/users");

exports.getLoginController = function (req, res, next) {
  res.render("login", { user: false });
};

exports.postLoginController = function (req, res, next) {
  const { body } = req;

  const user = findUserByUsermail(body.email);
  if (!user) return res.status(404).send("Usuario no existe");

  const isValid = bcrypt.compareSync(body.password, user.password);

  if (isValid) {
    req.session.user = user;
    res.redirect("/");
  } else res.status(401).send("Password no valido");
};

/*******************  Not Implemented *******************/
exports.getMyProfile = function (req, res, next) {
  if (req.session.user) {
    const user = req.session.user;
    res.render("profile", { title: "My Profile", user });
  }
  return res.status(400).send("No iniciaste session");
};

exports.getLogout = (req, res, next) => {
  console.log("Session ", req.session);
  req.session.destroy(function (err) {
    res.redirect("/users/login");
  });
};
