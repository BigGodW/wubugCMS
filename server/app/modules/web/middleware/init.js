const {
  web: {service: { common }},
  api: {service: { site, frag, tag, friendlink }},
} = Chan.modules;

let api = { site, frag, tag, friendlink, common };

module.exports = () => {
  return async (req, res, next) => {
    try {
      let { utils } = Chan.helper;
      let {config: { template, dataCache }} = req.app.locals;
      if ("site" in req.app.locals && dataCache == "1") {
        await next();
        return;
      }
      // 站点
      const site = await api.site.find();
      site.json = site.json || "";
      // 分类
      const category = await api.common.category();
      //导航
      const nav = utils.tree(category);
      // 友情链接
      let friendlink = await api.friendlink.list();
      friendlink = friendlink.list || [];
      //样式路径
      const base_url = `/public/template/${template}`;
      //获取碎片 默认100条
      const frag = await api.frag.list();
      //获取热门标签 默认20条
      const tag = await api.tag.hot();
      req.app.locals = {
        ...req.app.locals,
        site,
        nav,
        category,
        friendlink,
        base_url,
        frag,
        tag,
      };
      await next();
    } catch (error) {
      next(error);
    }
  };
};
