# <center>![禅悦内容管理系统](https://gitee.com/yanyutao0402/chanyue-cms/raw/master/client/admin/public/admin/img/logo.png)禅悦内容管理系统（`chanyue-cms`）</center>

 禅悦内容管理系统，基于`nodejs` `express` `mysql` `knex` `jwt` `vue3` 进行开发的一套实用轻量cms系统。它具备广泛应用的企业网站、图片网站、新闻资讯、软件下载网站、博客、文章等多种类型网站开发功能，灵活方便前端开发者进行二次开发。

## 🌈系统特色

* 轻量、灵活、稳定、高性能
* 专注于`seo`,伪静态`html`和拼音导航，灵活设置关键词和描述
* 基于`knex`,高防`sql`注入，接口权限校验，为安全提供保障。
* 碎片功能，支持零碎文案配置，方便各类灵活文案配置。
* 支持扩展模型，字段配置，可动态生成表，超强扩展，可进行多领域网站开发，博客，新闻，资讯，下载，视频，图片，书籍等网站开发。
* 长期维护更新

## ⛱️软件架构

**client技术栈**

后台管理界面admin

* vue3
* vue-router
* pina
* element-plus
* vite4
* tinymce
  
**服务端技术栈**

* nodejs v18.14.2+
* express 4.18+
* mysql v5.7.26
* art-tempate v4.13.2+
* pm2   v5.2.2
* jwt
* pm2 (prd)
* nodemon (dev)
  
## 技术选型说明
  
* **问：很多同学问为啥选择`express`而不是`nest`或`Midway`？**
* 答：`express`全球下载量第一，功能超级稳定，相关依赖包众多（所以不选`koa2`,洋葱皮模型）,依赖包大部分基于`JavaScript`写的，相对于`nest`,`express`更加灵活，轻量。至于为啥不选择`eggjs`/`Midway`，怕了，你懂得。
* **问：为啥不选择`Sequelize`、`typeorm`或者`prisma`作为`orm`框架？**
* 答：`knex`易用，友好，强大，`objection.js`都是基于`knex`开发的。
  
## 🍒 chanyue-cms历史

* **第一次构想** 2015/6/2 基于`express` `mongoDB`开发第一版cms
* **第二次重构（`koacms`）** 2018/4/2 基于`koa2` `mysql`重构
* **第三次重构（`eggcms`）** 2020/10/1基于`egg` `mysql` `Sequelize`重构
* **第四次重构（`chanyue-cms`）** 2022/6/12基于`express` `mysql` `knex`开发第三版，经过多年开发和线上运营，回归最稳定的`express`。

## 🚧功能介绍

* 站点信息
* 管理员登模块
* 无限极栏目分类
* 文章模块
* 扩展模型
* 标签管理
* 碎片管理 (广告，碎片文案，公司地址、电话、名称，微信等万能模块)
* 友情链接
* 在线留言

### 🍅️案例

* 案例一 [世界气功网](http://www.shijieqigong.com/) `http://www.shijieqigong.com/`
* 案例二 [世界大健康运动联盟](http://www.worldhealthgames.com/) `http://www.worldhealthgames.com/`
* 案例三 [北京辉达环保科技有限公司](http://www.huidaep.com/) `http://www.huidaep.com/`

## ⚡ 本地开发运行

* 1 导入数据库文件

    ```JavaScript
    chanyue.sql(data文件夹里面)
    ```

* 2 修改数据库配置文件

    ```JavaScript
    server/config/config.default.js //开发环境
    server/config/config.prd.js //生产环境
    ```

* 3 进入server 文件夹
    设置npm源安装依赖

    ```JavaScript
    npm config set registry https://registry.npmmirror.com
    npm i 
    npm run dev 
    ```

    后访问 <http://localhost:81> ，完成网站启动。

* 4.后台管理界面  

   ```html
    http://localhost:81/public/admin/index.html 
    ```

   默认账号密码：**chanyue**  **123456**

* 5.后端管理界面开发指南（不开发忽略这一步）

    进入client文件夹

    ```javascript
    执行npm i,npm run dev  
    ```

    后访问 <http://localhost:3000> 后台管理界面开发，
    功能开发完成后执行npm run build即可。

## 🕊 linux服务器部署

* 1 安装`BT`运维管理工具
* 2 安装 `nginx` `mysql5.6`(5.7也可以，但是比较消耗服务器资源)  `pm2`管理器
* 3 创建`mysql`，导入本地数据库，修改数据库配置文件
* 4 创建网站,绑定域名和设置反向代理,上传代码,

    ```javascript
    npm i ,npm run start启动即可。
    ```

* 5 配置`https`

## ❤️项目关注

* 码云：   <https://gitee.com/yanyutao0402/chanyue-cms>

 **走过路过的老铁,帮忙点个小 ⭐⭐⭐⭐⭐,🤝🤝🤝🤝🤝,🙏🙏🙏🙏🙏**

## 👈待开发功能表

 **第一阶段 基本功能开发 2023年☕**

* pdf等大文件在线浏览<基于流文件读写实时传输> over
* 直播流视频播放
* 静态上传——oss第三方上传 七牛云 腾讯云
* 定时任务 采集
* 操作日志管理——异常登录推送邮件
* 安全测试——参数校验、 `crsf` 、`xss`、 `sql`注入等常规测试
* 代码优化—— 缩略图，上传裁剪图片和默认缩略图，无用代码删除 完成30%
* 优化数据库 业务逻辑优化 10%
  
 **未来 2024年🍵**

* 个人中心
* 开发标签生成工具
* 美化后台界面
* 制作多模板
* 推送：可实现即时聊天功能
* 会员模块—— 邮箱注册 支持登录 文章评论 点赞 收藏（？可能不做）
* 文章付费—— `super`会员 `vip`会员 注册会员（？可能不做）
* 支付模块——微信支付 支付宝支付（？可能不做）

## 加入团队

 欢迎💝
 大佬加入开源团队，🧒 👧 👱  🧔 👴 👵
 联系微信: `yanyutao2014` 🍇 🍋 🍌

## 🍒更新日志 2023-08-11

* 支持pdf在线预览，按需加载，支持pc/wap

## 🍒更新日志 2023-08-10

* 完成所有功能开发。

## 🍒更新日志 2023-08-08

* 经过两周的奋斗，终于完成了大升级，大改造。可以下载用一用了

## 🍒更新日志 2023-08-05

* 完成默认模板开发，适配pc、wap。删除广告管理模块，用碎片模块替代。

## 🍒更新日志 2023-07-24

* 模板引擎ejs替换成高性能模板引擎art-Template

## 🍒更新日志 2023-07-09

* 后台管理界面重构升级，支持动态配置路由

## 🍒更新日志 2023-04-01

* 修复knex重构导致不显示分页问题

## 🍑更新日志 2023-03-20

* 动态后台菜单接口开发完成

## 🍑更新日志 2023-03-17

* 优化 订单表 会员表
* 新增 商品表

## 🍒更新日志 2023-03-16

* 新增 系统配置表、 公告通知表
* 新增 菜单表、 角色表、  角色-菜单表、 用户表 、用户-角色表

## 🍓更新日志 2023-03-15

* 新增API 每日简报

## 🥝更新日志 2023-03-09

* 优化微信小程序登录
* 新增API 60秒读懂世界

## 🍈更新日志 2023-03-05

* 更新node版本为v18.14.2
* 更新mysql2为v3.2.0
* 优化微信小程序登录功能使用原生fetch语法，删掉axios依赖
