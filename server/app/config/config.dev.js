const base = require("./config.base.js");
const config = { ...base };

config.database = {
  // client: "mysql2", 默认mysql
  host: "localhost",
  // port: "3306",默认3306
  user: "root",
  password: "123456",
  database: "chanyue",
  // charset: "utf8mb4",
};
//cors
config.cors = {
  origin: "*",//或者['http://localhost:8080', 'http://localhost:8081']
}
//sql debug
config.debug = false;
config.env = "dev";

config.logger = {
  level: "dev",
};

module.exports = config;
