'use strict';
const { success } = require("../../extend/api.js");
const Gtts = require('gtts');

class OpenController {
  //60秒读懂世界 
  static async news60s(req, res, next) {
    try {
      const url = `https://api.qqsuu.cn/api/dm-60s?type=json`;
      const result = await fetch(url);
      const { name, time, data } = await result.json();
      res.render(`web/open/60s.html`, { name, time, data });
    } catch (error) {
      next(error)
    }
  }

  //简报
  static async jianbao(req, res, next) {
    try {
      const url = `https://api.qqsuu.cn/api/dm-bulletin`;
      const result = await fetch(url);
      const { name, time, data } = await result.json();
      res.render(`web/open/jianbao.html`, { data });
    } catch (error) {
      next(error)
    }
  }

  /**
   * @param {req} req.query.text 传入文本
   * @param {req} req.query.lang  zh->中文 en->englist ja->Japanese
   */
  static async gtts(req, res, next) {
    try {
      const { text, lang = 'zh' } = req.query;
      const gtts = new Gtts(text, lang);
      gtts.stream().pipe(res);
    } catch (error) {
      next(error)
    }
  }

}

module.exports = OpenController;