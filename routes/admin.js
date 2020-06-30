const path = require("path");
const express = require("express");

const router = express.Router();

const products = [];

router.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    PageTitle: "Add Product",
    path: "/admin/add-product",
  });
});

router.post("/product", (req, res, next) => {
  products.push({ title: req.body.title });
  console.log(products);
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
