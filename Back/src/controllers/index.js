const { getAllProducts } = require("../services/products");

exports.getHome = function (req, res, next) {
  data = getAllProducts();
  let user;
  if (req.session.user) {
    user = req.session.user;
  } else {
    user = false;
  }
  res.render("home", { data, user });
};
