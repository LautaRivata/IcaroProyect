const { getProduct } = require("../services/products");

exports.getDetailProducts = function (req, res, next) {
  const { id } = req.params;
  let data;
  if (id) {
    data = getProduct(parseInt(id));
    if (data) {
      res.render("detailProducts", { data });
    } else {
      console.log("error");
      // next(new Error("Product not found"));
    }
  } else {
    res.redirect("/");
  }
};
