const { getAllProducts } = require("../services/products");

exports.getHome = function (req, res, next) {
  data = getAllProducts();
  res.render("home", { data });
};
