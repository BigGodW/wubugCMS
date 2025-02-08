const home = require("./home.js");
const list = require("./list.js");
const article = require("./article.js");
const page = require("./page.js");
const search = require("./search.js");
const tag = require("./tag.js");
const config = {
  data: {
    ...home,
    ...list,
    ...article,
    ...page,
    ...search,
    ...tag,
  },
};
module.exports = config;
