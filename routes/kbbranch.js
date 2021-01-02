var express = require('express');
var router = express.Router();
var {Branch,validate} = require("../models/kbbranch");
var checkSessionAuth = require("../middlewares/checkSessionAuth");
/* GET home page. */
router.get("/", async function (req, res, next) {
  let products = await Branch.find();
  res.render("branchs/list", { title: "Branches in Our Brand", products });
});
router.get("/add",checkSessionAuth, async function (req, res, next) {
  res.render("branchs/add");
});
router.post("/add", async function (req, res, next) {
  const { error } = validate(req.body);
	if (error) return res.status(400).send(error.details[0].message);
  let product = new Branch(req.body);
  await product.save();
  res.redirect("/branchs");
});
router.get("/delete/:id", async function (req, res, next) {
  let product = await Branch.findByIdAndDelete(req.params.id);
  res.redirect("/branchs");
});

module.exports = router;
