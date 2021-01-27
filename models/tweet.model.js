module.exports = (sequelize, Sequelize) => {
    const Tweet = sequelize.define("tweet", {
        id: {
            type:Sequelize.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
        userid: {
            type: Sequelize.INTEGER
        },
        tweet: {
            type: Sequelize.STRING
        },
        
    });

    return Tweet;
};