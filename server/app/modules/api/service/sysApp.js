const BaseService = require("./base");
const {knex} = require('chanjs');

class SysConfigService {
  static model = "sys_config";

  static async find() {
    try {
      let res = await BaseService.all(SysConfigService.model);
      return res[0];
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  static async config() {
    try {
      let res = await knex
        .select(["template", "uploadWay", "maxAge", "dataCache"])
        .from(SysConfigService.model)
        .limit(1);
      return res[0];
    } catch (err) {
      return err;
    }
  }

  static async update(body) {
    const { id } = body;
    delete body.id;
    delete body.createdAt;
    delete body.updatedAt;
    try {
      const result = await knex(SysConfigService.model)
        .where("id", "=", id)
        .update(body);
      return result ? "success" : "fail";
    } catch (err) {
      console.error(err);
      return err;
    }
  }
}

module.exports = SysConfigService;
