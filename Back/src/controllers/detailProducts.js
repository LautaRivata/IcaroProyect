const { getProduct } = require("../services/products");

exports.getDetailProducts = function (req, res, next) {
  const data = getProduct(3);
  if (data == false) {
    res.send("error 404 Object Not Found");
  } else {
    res.render("detailProducts", { data });
  }
};
