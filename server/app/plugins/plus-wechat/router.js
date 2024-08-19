
const Chan = require("chanjs");
const info = require("../../middleware/info.js");
module.exports = (opt) => {
  const {
    router,
    modules: { 'plus-wechat':{controller}},
    app
  } = opt;

  //版本信息，是否需要更新
  router.use(info());
  router.get("/login", controller.wechat.login);
  //配置前缀
  app.use('/plus-wechat',router)
};

