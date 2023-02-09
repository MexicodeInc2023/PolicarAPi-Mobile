const db = require("../models");
const Student = db.student;
const Emergency = db.emergency;
const Carrers = db.carrers;
const Op = db.Sequelize.Op;



exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};

exports.userCard = (req, res) => {
    // filtramos por id de usuario logeado
    Student.findAll({
      where: { userId: req.userId }
    })
      .then(studentsData => {
        // obtenemos el id del estudiante
        const studentId = studentsData[0].id;
        // hacemos una promesa para obtener los datos de emergencia y carreras por el id de estudiante
        return Promise.all([
          Emergency.findAll({
            where: { studentId: studentId }
          }),
          Carrers.findAll({
            where: { studentId: studentId }
          })
        ]).then(([emergencyData, careersData]) => {
          res.status(200).send({ studentsData, emergencyData, careersData });
        });
      }) // manejo de errores
      .catch(err => {
        res.status(500).send({
          message: err.message || "Error al obtener los datos del usuario."
        });
      });
};
  