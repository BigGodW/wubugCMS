
const dayjs = require('dayjs');
const Chan = require("chanjs");
const {
  modules: {
    api: {
      service: { slide },
    },
  },
  helper: {
    api: { success },
  },
} = Chan;

class SlideController {
  // 增
  static async create(req, res, next) {
    try {
      const body = req.body;
      const data = await slide.create(body);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 删除
  static async delete(req, res, next) {
    try {
      const {id} = req.query;
      const data = await slide.delete(id);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 改
  static async update(req, res, next) {
    try {
      const body = req.body;
      const data = await slide.update(body);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 查
  static async detail(req, res, next) {
    try {
      const {id} = req.query;
      const data = await slide.detail(id);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 搜索
  static async search(req, res, next) {
    try {
      const {cur,keyword,cid=0,pageSize=10} = req.query;
      const data = await slide.search(keyword, cur, pageSize, +cid);
      data.list.forEach(ele => {
        ele.updatedAt = dayjs(ele.updatedAt).format('YYYY-MM-DD HH:mm:ss');
      });
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }


  // 列表
  static async list(req, res, next) {
    try {
      const {cur,cid=0,pageSize=10} = req.query;
      const data = await slide.list(cur, pageSize, cid);
      data.list.forEach(ele => {
        ele.updatedAt = dayjs(ele.updatedAt).format('YYYY-MM-DD HH:mm:ss');
      });
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 上传图片
  static async upload(req, res, next) {
    try {
      let file = req.files;
      const { originalname, filename, path } = file[0];
      res.json({
        ...success, data: {
          link: path.replace('app', ''),
          domain: req.hostname,
          originalname,
          filename,
          path: '/' + path.replace(/\\/g, "/").replace(/^app\//, "")
        }
      });
    } catch (err) {
      next(err);
    }
  }
  
}

module.exports = SlideController;
