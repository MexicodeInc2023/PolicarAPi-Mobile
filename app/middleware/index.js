const authJwt = require("./authJwt");
const verifySignUp = require("./verifySignUp");
//Exportamos los middlewares
module.exports = {
  authJwt,
  verifySignUp
};