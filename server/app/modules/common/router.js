
module.exports = (opt) => {
  const {
    router,
    modules: {common:{controller}},
    app
  } = opt;

  router.get("/site", controller.chancms.site);
  router.get("/frag", controller.chancms.frag);
  router.get("/tag", controller.chancms.tag);
  router.get("/friendlink", controller.chancms.friendlink);
  router.get("/category", controller.chancms.category);
  router.get("/getArticleList", controller.chancms.getArticleList);
  
  //配置前缀
  app.use('/api-chancms/v1',router);

};
