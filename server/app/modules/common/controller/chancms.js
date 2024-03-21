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

  //栏目
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
      const { attr, len, start } = req.query;
      let params = {attr, len:+len, start:+start}
      console.log(params)
      const data = await chancms.getArticleList(params);
      res.json({ ...success, data});
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
  static async getArticleListByCid(req, res, next){
    try {
      const {cid, attr, len } = req.query;
      let params = {cid,attr, len:+len}
      const data = await chancms.getArticleListByCid(params);
      res.json({ ...success, data});
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  /**
   * @description 通过文章id查找对应的tag标签
   * @param {Object} aid 文章id
   */
  static async getArticleTag(req, res, next){
    try {
      const {id } = req.query;
      const data = await chancms.getArticleTag(id);
      res.json({ ...success, data});
    } catch (error) {
      console.error(error);
      next(error);
    }
  }


   /**
   * @description 栏目列表
   * @param {Object} id 栏目id
   * @param {Object} current 当前页面
   * @param {Object} pageSize = 10 每页显示条数
   */
   static async list(req, res, next){
    try {
      const {id,current=1,pageSize=10 } = req.query;
      const data = await chancms.list(id, current, pageSize);
      res.json({ ...success, data});
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  /**
   * @description 栏目列表
   * @param {Object} id 栏目id
   * @param {Object} current 当前页面
   * @param {Object} pageSize = 10 每页显示条数
   */
  static async article(req, res, next){
    try {
      const {id} = req.query;
      const data = await chancms.article(id);
      res.json({ ...success, data});
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
  



}

module.exports = ChancmsController;
