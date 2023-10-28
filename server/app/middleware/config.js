const SysAppService = require('../modules/api/service/sysApp.js');
const config = require("../config/index.js");
const auth = require("./auth.js");
const helper = require("../extend/helper.js");


// 所有配置入口
module.exports = async function(app){
    let sysconfig = await SysAppService.find();
    app.locals.config =  {...config,...sysconfig};
    console.log('0001',app.locals.config);
    app.locals.auth = auth;
    app.locals.helper = helper;
}
