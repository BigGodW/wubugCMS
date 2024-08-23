const BaseService = require("./base");
const {knex} = require("chanjs");

class ArticleTagService{

  static model = "cms_articleTag";

  // 新增
  static async create(body) {
    try {
      const result = await BaseService.insert(ArticleTagService.model,body);
      return result ? "success" : "fail";
    } catch (err) {
      console.error(err)
      return err;
    }
  }

  // 删
  static async delete(id) {
    try {
      const result = await knex(ArticleTagService.model).where("id", "=", id).del();
      return result ? "success" : "fail";
    } catch (err) {
      console.error(err)
      return err;
    }
  }

  // 修改
  static async update(body) {
    const { id } = body;
    delete body.id;
    try {
      const result = await knex(ArticleTagService.model).where("id", "=", id).update(body);
      return result ? "success" : "fail";
    } catch (err) {
      console.error(err)
      return err;
    }
  }

  // 文章列表
  static async list(cur = 1, pageSize = 10) {
    try {
      // 查询个数
      const total = await knex(ArticleTagService.model).count("id", { as: "count" });
      const offset = parseInt((cur - 1) * pageSize);
      const list = await knex
        .select("*")
        .from(ArticleTagService.model)
        .limit(pageSize)
        .offset(offset)
        .orderBy("id", "desc");
        const count = total[0].count || 1;
      return {
        count: count,
        total: Math.ceil(count / pageSize),
        current: +cur,
        list: list,
      };
    } catch (err) {
      console.error(err)
      return err;
    }
  }

  // 查
  static async detail(id) {
    try {
      const data = await knex(ArticleTagService.model).where("id", "=", id).select();
      return data[0];
    } catch (err) {
      console.error(err)
      return err;
    }
  }

  // 搜索
  static async search(key = "", cur = 1, pageSize = 10) {
    try {
      // 查询个数
      const total = key
        ? await knex(ArticleTagService.model)
            .whereRaw("name COLLATE utf8mb4_general_ci LIKE ?", [`%${key}%`])
            .count("id", { as: "count" })
        : await knex(ArticleTagService.model).count("id", { as: "count" });
      // 查询个数
      const offset = parseInt((cur - 1) * pageSize);
      const list = key
        ? await knex
            .select(["id", "name", "mark"])
            .from(ArticleTagService.model)
            .whereRaw("name COLLATE utf8mb4_general_ci LIKE ?", [`%${key}%`])
            .limit(pageSize)
            .offset(offset)
            .orderBy("id", "desc")
        : await knex
            .select(["id", "name", "mark"])
            .from(ArticleTagService.model)
            .limit(pageSize)
            .offset(offset)
            .orderBy("id", "desc");
            const count = total[0].count || 1;
      return {
        count: count,
        total: Math.ceil(count / pageSize),
        current: +cur,
        list: list,
      };
    } catch (err) {
      console.error(err)
      return err;
    }
  }
}

module.exports = ArticleTagService;
