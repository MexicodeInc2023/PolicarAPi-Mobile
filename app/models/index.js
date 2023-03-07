const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// modelos de la base de datos 
db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.student = require("../models/student.model.js")(sequelize, Sequelize);
db.carrers = require("../models/carrers.model.js")(sequelize, Sequelize);
db.emergency = require("../models/emergency.model.js")(sequelize, Sequelize);

// relaciones de la base de datos
db.user.hasMany(db.student, { foreignKey: 'userId' });
db.student.belongsTo(db.user,{ foreignKey: 'userId' });
db.carrers.belongsTo(db.student,{ foreignKey: 'studentId' });
db.emergency.belongsTo(db.student,{ foreignKey: 'studentId' });

module.exports = db;