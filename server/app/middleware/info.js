const Chan = require("chanjs");
const { config:{ appName, version } } = Chan;

//获取版本
module.exports = () => {
    return async (req, res, next) => {
        res.setHeader("X-Powered-By", appName);
        res.setHeader("ChanCMS", version);
        next();
    }
};
