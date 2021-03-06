//Validation
const Joi = require("@hapi/joi");

//Register Validation
const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });

  //Input Validation
  return schema.validate(data);
  //res.send(error);
};

module.exports.registerValidation = registerValidation;
