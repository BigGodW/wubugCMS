const base = require("./config.base.js");
const data = require("./data/index.js");
const config = { ...base, ...data };

//mysql配置
config.db = [
  {
    client: "mysql2",
    host: "47.109.179.80",
    user: "wuyong",
    password: "A190218a",
    database: "wubug",
    debug: false,
  },
];

//web端口
config.port = "81";

//模板静态资源
config.static = [
  ...base.static,
];

// jwt 配置
config.token = {
  KEY: "ChanCMS",
  TIME: "1d",
  REFRESH: false, //是否开启刷新token
};

// bcrypt 加盐
config.secretcms = {
  key: 10,
};

//cors
config.cors = {
  origin: "*", //或者['http://localhost:8080', 'http://localhost:8081']
};

//多个views
config.views = []; //path.join(config.appRoot, `modules/web/view`)

// 模板缓存 dev 环境不缓存 prod 环境缓存
config.env = "dev";

config.logger = {
  level: "dev",
};

module.exports = config;
