const path = require("path");

const ROOT_PATH = process.cwd();
const APP_PATH = path.join(ROOT_PATH, "app");
const config = {};
config.appRoot = APP_PATH;
config.version = "v3.2.4";
config.appName = "ChanCms";
config.port = "81";
config.versionTime = "2024-08-04";
config.author = "明空";
config.authorEmail = "867528315@qq.com";
config.authorWechat = "yanyutao2014";
config.JSON_LIMIT = "100kb";

// cookie
config.keys = "chanyue-cms_202301032044";
config.token = {
  KEY: "chanyue-cms",
  TIME: "1d",
};
// md5 加盐
config.secretcms = {
  key: "chanyue-cms",
};

// 关闭csrf
config.security = {
  csrf: {
    enable: false,
  },
};

// 配置上传
config.multipart = {
  fileSize: "50mb",
  mode: "stream",
  whitelist: [
    ".jpg",
    ".jpeg",
    ".png",
    ".gif",
    ".zip",
    ".gz",
    ".tgz",
    ".gzip",
    ".mp3",
    ".mp4",
    ".avi",
  ],
  fileExtensions: [".pdf", ".txt"],
};

// 模板配置
config.static = {
  prefix: "/public/",
  dynamic: true, // 如果当前访问的静态资源没有缓存，则缓存静态文件，和`preload`配合使用；
  dir: ["app/public"],
  maxAge: 0, // in prod env, 0 in other envs
  buffer: false, // in prod env, false in other envs
  preload: false,
};

config.views = [path.join(APP_PATH, `plugin/open/view`)];

module.exports = config;
