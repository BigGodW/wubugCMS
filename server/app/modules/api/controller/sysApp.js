const path = require("path");
const Chan = require("chanjs");
const {
  modules: {
    api: {
      service: { sysApp },
    },
  },
  helper: {
    api: { success },
    utils: { getHtmlFilesSync },
  },
} = Chan;

class SysAppController {
  // 查
  async find(req, res, next) {
    try {
      const data = await sysApp.find();
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 查
  async getViews(req, res, next) {
    try {
      const {
        config: { APP_PATH, template },
      } = req.app.locals;
      const viewsPath = path.join(APP_PATH, `/modules/web/view/${template}`);
      const data = getHtmlFilesSync(viewsPath);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }
  // app配置
  async config(req, res, next) {
    try {
      const data = await sysApp.config();
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

  // 改
  async update(req, res, next) {
    try {
      const body = req.body;
      const data = await sysApp.update(body);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = SysAppController;
