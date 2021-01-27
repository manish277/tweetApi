module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        id: {
            type:Sequelize.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        userType: {
            type: Sequelize.STRING
        },
    });

    return User;
};