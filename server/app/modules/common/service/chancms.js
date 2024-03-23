const Chan = require("chanjs");
let {utils: { filterFields, formatDay}} = Chan.helper;
let knex = Chan.knex;

class ChancmsService {
  constructor() {}

  // 网站栏目
  static async category() {
    try {
      let res = await knex("category").select([
        "id",
        "pid",
        "name",
        "pinyin",
        "path",
        "sort",
        "target",
        "status",
        "list_view",
        "article_view",
        "seo_title",
        "seo_keywords",
        "seo_description",
        "type",
      ]).orderBy("sort", "ASC");
      return res;
    } catch (err) {
      console.error(err);
      return err;;
    }
  }

  /**
   * @description 获取文章(头条、推荐、轮播、热门)
   * @param {Object} attr 1头条 2推荐 3轮播 4热门
   * @param {Object} len 查询个数
   * @param {Object} start 开始
   * @returns 
   */
  static async getArticleList({start, len, attr}) {
    try {
      const columns = [
        "a.id",
        "a.title",
        "a.short_title",
        "a.img",
        "a.createdAt",
        "a.description",
        "a.link",
        "c.pinyin",
        "c.name",
        "c.path",
      ];

      const query = knex
        .select(columns)
        .from("article AS a")
        .leftJoin("category AS c", "a.cid", "c.id")
        .where("a.status", 0)
        .orderBy("a.createdAt", "DESC")
        .limit(len)
        .offset(start);

      if (attr) {
        query.where("a.attr", "LIKE", `%${attr}%`);
      }

      const result = await query;
      return result;
    } catch (err) {
      console.error(err);
      return err;;
    }
  }

  /**
   * @description 获取栏目文章（头条、推荐、轮播、热门）
   * @param {*} cid 栏目id
   * @param {*} len 查询个数
   * @param {*} attr 1头条 2推荐 3轮播 4热门
   * @returns {Array}
   */
  static async getArticleListByCid(cid, len = 5, attr = "") {
    try {
      // 获取所有id
      const res = await knex.select("id").from("category").where("pid", cid);

      const ids = [cid, ...res.map((item) => item.id)];
      // 构建查询条件
      let queryBuilder = knex
        .select(
          "a.id",
          "a.title",
          "a.short_title",
          "a.img",
          "a.createdAt",
          "a.description",
          "c.pinyin",
          "c.name",
          "c.path"
        )
        .from("article AS a")
        .leftJoin("category AS c", "a.cid", "c.id")
        .whereIn("a.cid", ids)
        .where("a.status", 0)
        .orderBy("createdAt", "DESC")
        .limit(len);

      if (attr) {
        queryBuilder = queryBuilder.andWhere("a.attr", "LIKE", `%${attr}%`);
      }

      // 执行查询
      const result = await queryBuilder;
      return result;
    } catch (err) {
      console.error(`cid->${cid} attr-> ${attr} len->${len}`, err);
      return err;;
    }
  }

  /**
   * @description 通过文章id查找对应的tag标签
   * @param {Number} aid 文章id
   * @returns {Array} 返回数组
   */
  static async getArticleTag(id) {
    try {
      // 执行查询
      const result = await knex("article AS a")
      .select("a.cid", "t.id", "t.name", "t.path")
      .rightJoin("tag AS t", "t.id", "=", "a.tag_id")
      .where("a.id", id)
      .where("a.status", 0)
      .limit(10)
      .offset(0);;
      return result;
    } catch (err) {
      console.error(`aid->${id}`, err);
      return err;;
    }
  }

  /**
   * @param [1,2,3] 栏目id，指定栏目id进行返回
   * @description 返回所有的根栏目
   * @returns {Array}
   */
  static async getAllParentCategory(idArray=[]) {
    try {
      const result = await knex("category")
        .select([
          "id",
          "pid",
          "name",
          "pinyin",
          "path",
          "sort",
          "target",
          "status",
          "type",
        ])
        .where("pid", 0)
        .where("type", 0)
        .where((builder) => (!idArray.length || builder.whereIn("id", idArray)))
        .orderBy("sort", "ASC");
      return result;
    } catch (err) {
      console.error(err);
      return err;;
    }
  }

  /**
   * @description 获取所需多个栏目文章
   * @param {Array} cids 栏目id
   * @returns {Array}
   */
   static async getArticleListByCids(cids=[]){
    try {

      //tag去重
      function uniqueByPath(arr) {
        const map = new Map();
        return arr.filter((item) => {
            if (!map.has(item.path)) {
                map.set(item.path, item);
                return true;
            }
            return false;
        });
      }

        //主栏目-图-文
        let cate = await CommonService.getAllParentCategory(cids);
        const cateField = ["id", "name", "path", "pinyin"];
        cate = filterFields(cate, cateField);
        let article = [];
        for (let i = 0, item; i < cate.length; i++) {
          let item = cate[i];
          let tags = [];
          // 推荐
          let top = await CommonService.getArticleListByCid(item.id, 1, 2);
          // 最新
          let list = await CommonService.getArticleListByCid(item.id, 4);
          list = formatDay(list);

          // tag列表
          for (let j = 0, sub; j < list.length; j++) {
            sub = list[j];
            let res = await CommonService.getTagsFromArticleByAid(sub.id);
            tags.push(...res);
          }
          tags = uniqueByPath(tags);
          article.push({ top, list, tags, category: item })
        }
        
        return article;

    } catch (error) {
      console.error(err);
      return err;;
    }
   }

  /**
   * @description 浏览pv排行(全局|指定栏目)
   * @param {Number|String} id 栏目id
   * @param {Number} len 默认10条
   * @returns
   */
  static async pv(len = 10, id = "") {
    try {
      let query = knex
        .select(
          "a.id",
          "a.title",
          "a.short_title",
          "a.img",
          "a.createdAt",
          "a.description",
          "c.pinyin",
          "c.name",
          "c.path"
        )
        .from("article AS a")
        .leftJoin("category AS c", "a.cid", "c.id")
        .where("a.status", 0);

      if (id) {
        const ids = await knex("category")
          .select("id")
          .where("pid", id)

          .pluck("id");

        ids.push(id);
        query.whereIn("cid", ids);
      }

      query.orderBy("pv", "DESC").limit(len);
      let result = await query;
      return result;
    } catch (err) {
      console.error(`id->${id} len->${len}`, err);
      return err;;
    }
  }

  /**
   * @description 图文(全局|指定栏目)
   * @param {Number|String} id 栏目id
   * @param {Number} len 默认10条
   * @param {*} attr 1头条 2推荐 3轮播 4热门
   * @returns
   */
  static async articleImg({len, id,attr}) {
    try {
      let query = knex
        .select(
          "a.id",
          "a.title",
          "a.short_title",
          "a.img",
          "a.createdAt",
          "a.description",
          "c.pinyin",
          "c.name",
          "c.path"
        )
        .from("article AS a")
        .leftJoin("category AS c", "a.cid", "c.id")
        .where("a.img", "!=", "")
        .where("a.status", 0);

      if (id) {
        const ids = await knex("category")
          .select("id")
          .where("pid", id)
          .pluck("id");

        ids.push(id);
        query.whereIn("a.cid", ids);
      }

      if (attr) {
        query.where("a.attr", "LIKE", `%${attr}%`);
      }
      query.orderBy("a.createdAt", "DESC").limit(len);

      let result = await query;
      return result;
    } catch (err) {
      console.error(`id->${id} len->${len}`, err);
      return err;;
    }
  }

  /**
   * @description 文章列表
   * @param {Number} id 栏目id
   * @param {Number|String} current 当前页面
   * @param {Number} pageSize 默认10条
   * @returns {Array}
   */
  static async list({ id, current, pageSize}) {
    try {
      const start = (current - 1) * pageSize;

      // 获取所有id
      let ids = [id];
      const res = await knex("category").select("id").where("pid", id);

      res.forEach((item) => {
        ids.push(item.id);
      });

      // 查询个数
      const total = await knex("article")
        .count("id as count")
        .whereIn("cid", ids)
        .where("status", 0)
        .first();

      const count = total.count || 1;

      // 查询文章列表
      const result = await knex
        .select(
          "a.id",
          "a.title",
          "a.short_title",
          "a.img",
          "a.description",
          "a.createdAt",
          "a.author",
          "a.pv",
          "c.pinyin",
          "c.name",
          "c.path"
        )
        .from("article AS a")
        .leftJoin("category AS c", "a.cid", "c.id")
        .whereIn("a.cid", ids)
        .where("a.status", 0)
        .orderBy("a.createdAt", "DESC")
        .offset(start)
        .limit(pageSize);

      return {
        count,
        total: Math.ceil(count / pageSize),
        current: +current,
        list: result,
      };
    } catch (err) {
      console.error(`id->${id} current->${current} pageSize->${pageSize}`, err);
      return err;;
    }
  }

  /**
   * @description tag搜索
   * @param {Number} tag tagpath
   * @param {Number|String} current 当前页面
   * @param {Number} pageSize 默认10条
   */
  static async tagList({name,current,pageSize}) {
    try {
      const start = (current - 1) * pageSize;

      // 查询个数
      const total = await knex("article as a")
        .join("category as c", "a.cid", "c.id")
        .whereExists(function () {
          this.select(1)
            .from("tag as t")
            .whereRaw("FIND_IN_SET(t.id, a.tag_id) > 0")
            .andWhere("t.name", name);
        })
        .count("* as total");

      // 查询文章列表
      const result = await knex("article as a")
        .select(
          "a.id",
          "a.title",
          "a.short_title",
          "a.img",
          "a.description",
          "a.createdAt",
          "a.author",
          "a.pv",
          "c.pinyin",
          "c.name",
          "c.path"
        )
        .join("category as c", "a.cid", "c.id")
        .whereExists(function () {
          this.select(1)
            .from("tag as t")
            .whereRaw("FIND_IN_SET(t.id, a.tag_id) > 0")
            .andWhere("t.name", name);
        })
        .where("a.status", 0)
        .orderBy("a.createdAt", "DESC")
        .offset(start)
        .limit(pageSize);

      const count = total.total || 1;

      return {
        count,
        total: Math.ceil(count / pageSize),
        current: +current,
        list: result,
      };
    } catch (err) {
      console.error(
        `id->${path} current->${current} pageSize->${pageSize}`,
        err
      );
      return err;;
    }
  }



  // banner轮播图
  static async banner(cur = 1, pageSize = 10) {
    try {
     
      const offset = parseInt((cur - 1) * pageSize);
      const list = await knex
        .select(['id','title','img_url','link_url'])
        .from('slide')
        .limit(pageSize)
        .offset(offset)
        .orderBy("id", "desc");
      return list;
    } catch (err) {
      console.error(err);
      return err;;
    }
  }


  // 查
  static async article(id) {
    try {
      // 查询文章
      const data = await knex("article").where("id", "=", id).select();
      //兼容mysql错误
      if (!data[0] || !data[0].cid) {
        return false;
      }
      // 通过栏目id查找模型id
      const modId = await knex.raw(
        `SELECT mid FROM category WHERE id=? LIMIT 0,1`,
        [data[0].cid]
      );

      let field = [];
      if (modId[0].length > 0 && modId[0][0].mid !== "0") {
        // 通过模型查找表名
        const tableName = await knex.raw(
          `SELECT table_name FROM model WHERE id=?`,
          [modId[0][0].mid]
        );
        // 通过表名查找文章
        field = await knex.raw(`SELECT * FROM ? WHERE aid=? LIMIT 0,1`, [
          tableName[0][0].table_name,
          id,
        ]);
      }
      return { ...data[0], field: field[0] || {} };
    } catch (err) {
      console.error(err)
      return err;
    }
  }
}

module.exports = ChancmsService;
