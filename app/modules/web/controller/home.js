const {
  modules: {
    web: {
      service: { common, home },
    },
    api: {
      service: { article },
    },
  },
  helper: {
    utils: { pages, getChildrenId, treeById, filterFields, htmlDecode },
  },
} = Chan;

const webUtils = require("../utils/index.js");

const ArticleService = article;

class HomeController {
  // 首页
  async index(req, res, next) {
    try {
      const { nav, template } = req.app.locals;
      const defaultView = webUtils.homeView(nav);
      const data = await home.home();
      res.render(`${template}/${defaultView}`, data);
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  // 列表页
  async list(req, res, next) {
    try {
      const { template, category, cate, id, current } =
        webUtils.listGetParams(req);
      if (!id) {
        return await res.render(`${template}/404.html`);
      }
      const data = await home.list(id, current);
      const { pageHtml, view, position } = webUtils.listDataParse({
        id,
        category,
        cate,
        current,
        data,
      });
      await res.render(`${template}/${view}`, {
        position,
        cate,
        pageHtml,
        ...data,
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  // 详情页
  async article(req, res, next) {
    try {
      let { id, template, category } = webUtils.articleGetParams(req);
      if (!id) {
        await res.render(`${template}/404.html`);
        return;
      }
      // 文章列表
      const article = await common.article(id);
      if (!article) {
        await res.render(`${template}/404.html`);
        return;
      }
      // 栏目id
      const cid = article.cid || "";
      let { cate, position, view } = webUtils.articleDataParse({
        article,
        cid,
        category,
      });
      //热门 推荐 图文 上一页 下一页 count
      const data = await home.article({ id, cid });
      await res.render(`${template}/${view}`, {
        ...data,
        cate,
        article,
        position,
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  // 单页 ，分两种情况，一种单个单页，一个
  async page(req, res, next) {
    try {
      const { cate, id } = req.params;
      const { category, template } = req.app.locals;

      //非法访问
      if (!id && !cate) {
        return res.render(`${template}/404.html`);
      }
      const navSub = cate && getChildrenId(cate, category);
      const initialArticle = id && await common.article(id);
  
      //非法访问
      const cid = initialArticle?.cid || navSub?.cate?.id;
      if (!cid){
        return res.render(`${template}/404.html`);
      }

      const pageData = await home.page(cid);
      let list = pageData?.page?.list || [];

      //404
      if (list.length == 0) {
        return res.render(`${template}/404.html`);
      }
      const article = initialArticle || await common.article(list[0].id);
      if (!article) {
        return res.render(`${template}/404.html`);
      }
  
      // 获取非异步的position数据
      const position = treeById(article.cid, category);
     
      // 更新计数
      common.count({id:article.id});
      const viewTemplate = article.articleView || navSub?.cate?.articleView  || "page.html";

      console.log('article', {
        ...pageData,
        cate:navSub?.cate,
        position,
        article,
      })
  
      return res.render(`${template}/${viewTemplate}`, {
        ...pageData,
        cate:navSub?.cate,
        position,
        article,
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  // 搜索页
  async search(req, res, next) {
    try {
      const { template } = req.app.locals;
      const { keywords: originalKeywords, id } = req.params;

      // 当关键词过多时，截取前10个字符
      let keywords = originalKeywords.length > 50 ? originalKeywords.substring(0, 10) : originalKeywords;

      const page = id || 1;
      const pageSize = 10;
      // 文章列表
      const data = await ArticleService.search(keywords, page, pageSize);
      // 分页
      let { count } = data;
      let href = "/search/" + keywords;
      let pageHtml = pages(page, count, pageSize, href);

      data.list.forEach((ele) => {
          ele.titles = ele.title.replace(
              new RegExp(keywords, "gi"),
              `<span class='c-red'>${keywords}</span>`
          );
      });

      await res.render(`${template}/search.html`, {
          keywords,
          data,
          pageHtml,
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  // tag
  async tag(req, res, next) {
    try {
      const { template } = req.app.locals;
      const { path, current = 1 } = req.params;
      const { tag } = req.query;
      const page = current;
      const pageSize = 10;
      // 文章列表
      const data = await common.tags(path, page, pageSize);

      //分页
      let { count } = data;
      let href = `/tags/${path}/tag`;
      let query = `?tag=${tag}`;
      let pageHtml = pages(page, count, pageSize, href, query);

      await res.render(`${template}/tag.html`, { data, path, tag, pageHtml });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
}

module.exports = HomeController;
