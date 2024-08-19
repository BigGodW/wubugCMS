const Chan = require("chanjs");
const {
  modules: {
    api: {
      service: { tag },
    },
  },
  helper: {
    api: { success },
  },
} = Chan;

class tagController  {

  // 增
  static async create(req, res, next) {
    try {
      const body = req.body;
      const data = await tag.create(body);
      res.json({ ...success, data: data })
    } catch (err) {
      next(err);
    }
  }

  // 删除
  static async delete(req, res, next) {
    try {
      const {id} = req.query;
      const data = await tag.delete(id);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 改
  static async update(req, res, next) {
    try {
      const body = req.body;
      const data = await tag.update(body);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 查
  static async detail(req, res, next) {
    try {
      const {id} = req.query;
      const data = await tag.detail(id);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 列表
  static async list(req, res, next) {
    try {
      const {cur,pageSize=50} = req.query;
      const data = await tag.list(cur, pageSize);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }


  static async has(req, res, next) {
    try {
      const {path} = req.query;
      const data = await tag.has(path);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 搜索
  static async search(req, res, next) {
    try {
      const {cur,keyword,pageSize=10} = req.query;
      const data = await tag.search(keyword, cur, pageSize);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

}

module.exports = tagController;
