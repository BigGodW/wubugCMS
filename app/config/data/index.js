const home = require("./home.js");
const list = require("./list.js");
const article = require("./article.js");
const page = require("./page.js");
const config = {
  data: {
    ...home,
    ...list,
    ...article,
    ...page,
  },
};
module.exports = config;
