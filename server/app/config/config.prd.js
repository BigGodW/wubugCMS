const base = require("./config.base.js");
const config = { ...base };

//mysql配置
config.database = {
  // client: "mysql2", 默认mysql
  host: "localhost",
  // port: "3306",默认3306
  user: "root",
  password: "123456",
  database: "chanyue",
  // charset: "utf8mb4",
};
config.static = [{
  prefix: "/public/",
  dir:"app/public",
  maxAge: 0,
}];
//sql debug
config.SqlDebug = false;

// jwt 配置
config.token = {
  KEY: "ChanCMS",
  TIME: "1d",
};

// md5 加盐
config.secretcms = {
  key: "chanyue-cms",
};

//控制模板缓存 
config.env = "prd";

config.logger = {
  level: "tiny",
};

module.exports = config;
