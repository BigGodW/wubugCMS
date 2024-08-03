
const Chan = require("chanjs");
const info = require("./middleware/info.js");
module.exports = (opt) => {
  const {
    router,
    modules: { 'plus-pdf':{controller}},
    app
  } = opt;
  console.log("plus-pdf-->",controller);
  //版本信息，是否需要更新
  router.use(info());
  router.get("/pdf", controller.pdf.pdf);
  //配置前缀
  app.use('/plus-pdf',router)
};

