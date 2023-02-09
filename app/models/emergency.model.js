module.exports = (sequelize, Sequelize) => {
    const Emergency = sequelize.define("emergency", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        emergencyName: {
            type: Sequelize.STRING
        },
        emergencyPhone: {
            type: Sequelize.STRING
        },
        emergencyPhone2: {
            type: Sequelize.STRING
        },
        bloodType: {
            type: Sequelize.STRING
        },
        allergy: {
            type: Sequelize.STRING
        },
        allergy2: {
            type: Sequelize.STRING
        },

    });

    return Emergency;
}