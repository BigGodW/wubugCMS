const Chan = require("chanjs");

const {
  modules: {
    api: {
      service: { field },
    },
  },
  helper: {
    api: { success,fail },
  },
} = Chan;

class FieldController  {

  // 增
  static async create(req, res, next) {
    try {
      const body = req.body;
      const has = await field.findByName(body.field_cname, body.field_ename);
      if (has.length > 0) {
        res.json({ ...fail, msg: '字段命名已重复' });
        return;
      }
      const data = await field.create(body);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 删除
  static async delete(req, res, next) {
    try {
      const {id} = req.query;
      const data = await field.delete(id);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 改
  static async update(req, res, next) {
    try {
      const body = req.body;
      const data = await field.update(body);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }


  // 查
  static async detail(req, res, next) {
    try {
      const {id} = req.query;
      const data = await field.detail(id);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 列表 
  static async list(req, res, next) {
    try {
      const {cur,model_id,pageSize=10} = req.query;
      const data = await field.list(model_id, cur, pageSize);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = FieldController;
