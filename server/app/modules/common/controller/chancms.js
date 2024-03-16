const dayjs = require("dayjs");
const Chan = require("chanjs");
const {
  utils: { success, tree },
} = Chan.helper;
console.log(Chan.modules);
const {
  api: {
    service: { site, frag, tag, friendlink, article },
  },
  common: {
    service: { chancms },
  },
} = Chan.modules;

class ChancmsController {
  // 获取站点信息
  static async site(req, res, next) {
    try {
      const data = await site.find();
      res.json({ ...success, data: data });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  //碎片
  static async frag(req, res, next) {
    try {
      const data = await frag.list();
      res.json({ ...success, data: data });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  //Tag标签
  static async tag(req, res, next) {
    try {
      const data = await tag.list();
      res.json({ ...success, data: data });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  //友情链接
  static async friendlink(req, res, next) {
    try {
      const data = await friendlink.list();
      res.json({ ...success, data: data });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  //友情链接
  static async category(req, res, next) {
    try {
      const category = await chancms.category();
      const nav = tree(category);
      res.json({ ...success, data: nav});
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

   /**
   * @param {Object} attr 1头条 2推荐 3轮播 4热门
   * @param {Object} len 查询个数
   * @param {Object} start 开始
   * @returns 
   */
  static async getArticleList(req, res, next){
    try {
      let params = {start:0, len: 5, attr:""}
      const data = await chancms.getArticleList(params);
      res.json({ ...success, data});
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

}

module.exports = ChancmsController;
