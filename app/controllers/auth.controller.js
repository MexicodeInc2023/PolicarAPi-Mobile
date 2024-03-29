const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;


const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  // Guardar Usuario en la base de datos
  User.create({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  })
    .then(user => {
        res.send({ message: "Usuario Registrado con exito!" });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

// Metodo para iniciar sesion
exports.signin = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      // Si no existe el usuario
      if (!user) {
        return res.status(404).send({ message: "Email Not found." });
      }
       
      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

        res.status(200).send({
          id: user.id,
          email: user.email,
          accessToken: token
        });
      
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};