const { getProduct } = require("../services/products");

exports.getDetailProducts = function (req, res, next) {
  const { id } = req.params;
  let user;
  if (req.session.user) {
    user = req.session.user;
  } else {
    user = false;
  }
  let data;
  if (id) {
    data = getProduct(parseInt(id));
    if (data) {
      res.render("detailProducts", { data, user });
    } else {
      console.log("error");
      // next(new Error("Product not found"));
    }
  } else {
    res.redirect("/");
  }
};
