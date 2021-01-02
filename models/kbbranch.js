var mongoose = require("mongoose");
const Joi = require("@hapi/joi");

var productSchema = mongoose.Schema({
  name: String,
  location: String,
});
const Branch = mongoose.model("Branch", productSchema);

function validateBranch(data) {
	const schema = Joi.object({
	  name: Joi.string().min(3).max(20).required(),
	  location: Joi.string().required(),

	});
	return schema.validate(data, { abortEarly: false });
  }
  module.exports.Branch = Branch;
  module.exports.validate = validateBranch;
