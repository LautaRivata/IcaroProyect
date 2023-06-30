const {
  findIdDisponible,
  createUsers,
  findUserByUsername,
} = require("../services/users");

exports.getLoginController = function (req, res, next) {
  res.render("login");
};

exports.postLoginController = function (req, res, next) {
  const { body } = req;

  const idDisponible = findIdDisponible();

  const newUser = {
    id: idDisponible,
    nombre: body.name,
    email: body.email,
    password: "",
  };

  bcrypt.hash(body.password, 10, function (err, hash) {
    newUser.password = hash;
    console.log("Body: ", newUser);

    createUsers(newUser);
    req.session.user = user;
    res.redirect("/users/my-profile");
    return;
  });
};

exports.getMyProfile = function (req, res, next) {
  if (req.session.user) {
    const user = req.session.user;
    res.render("profile", { title: "My Profile", user });
  }
  return res.status(400).send("No iniciaste session");
};

exports.getLogin = function (req, res, next) {
  const { body } = req;
  const user = findUserByUsername(body.email);
  if (!user) return res.status(404).send("Usuario no existe");

  const isValid = bcrypt.compareSync(body.password, user.password);

  if (isValid) {
    req.session.user = user;
    res.redirect("/users/myProfile");
  } else res.status(401).send("Password no valido");
};

exports.getLogout = (req, res, next) => {
  console.log("Session ", req.session);
  req.session.destroy(function (err) {
    res.redirect("/users/login");
  });
};
