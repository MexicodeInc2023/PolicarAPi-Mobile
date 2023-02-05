module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define("students", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        },
        lastname: {
            type: Sequelize.STRING
        },
        enrolment: {
            type: Sequelize.STRING
        },
        birthdate: {
            type: Sequelize.DATE
        },
        grade: {
            type: Sequelize.INTEGER
        },
        city: {
            type: Sequelize.STRING
        },
        active: {
            type: Sequelize.BOOLEAN
        },

    });

    return Student;
}