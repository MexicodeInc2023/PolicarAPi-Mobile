module.exports = (sequelize, Sequelize) => {
    const Carrers = sequelize.define("carrers", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        nameCareer: {
            type: Sequelize.STRING
        },
    });

    return Carrers;
}