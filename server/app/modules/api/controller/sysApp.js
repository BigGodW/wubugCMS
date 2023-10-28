const {helper: {success}} = require('../../config.js');
const path = require('path');
const SysAppService = require('../service/sysApp.js');

class SysAppController  {

  // 查
  static async find(req, res, next) {
    try {
      const data = await SysAppService.find();
      res.json({ ...success, data: data })
    } catch (err) {
      next(err);
    }
  }

  // 查
static async getViews(req, res, next) {
  try {
    const {config:{appRoot,template},helper:{getHtmlFilesSync}} = req.app.locals;
    const viewsPath = path.join(appRoot,`/modules/home/view/${template}`);
    const data = getHtmlFilesSync(viewsPath);
    res.json({ ...success, data: data })
  } catch (err) {
    next(err);
  }
}
   // app配置
  static async config(req, res, next) {
    try {
      const data = await SysAppService.config();
      res.json({ ...success, data: data })
    } catch (err) {
      next(err);
    }
  }

  // 改
  static async update(req, res, next) {
    try {
      const body = req.body;
      const data = await SysAppService.update(body);
      res.json({ ...success, data: data });
    } catch (err) {
      next(err);
    }
  }

}

module.exports = SysAppController;
