const dbConfig = require("../config/db.config.js");
const mysql = require('mysql2/promise');
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  //   operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};
initialize();
async function initialize() {
  // create db if it doesn't already exist
  const { HOST, PORT, USER, PASSWORD, DB } = dbConfig;
  try {
    const connection = await mysql.createConnection({ host: HOST, port: PORT, user: USER, password: PASSWORD });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${DB}\`;`);
  } catch (error) {

  }

}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model.js")(sequelize, Sequelize);
db.tweet = require("./tweet.model.js")(sequelize, Sequelize);
// db.client = require("./client.model.js")(sequelize, Sequelize);
// db.adminUser = require("./adminUser.model.js")(sequelize, Sequelize);

module.exports = db;