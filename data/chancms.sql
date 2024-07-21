/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 50726 (5.7.26)
 Source Host           : localhost:3306
 Source Schema         : chancms

 Target Server Type    : MySQL
 Target Server Version : 50726 (5.7.26)
 File Encoding         : 65001

 Date: 31/05/2024 10:45:13
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cid` int(11) NULL DEFAULT NULL COMMENT '栏目id',
  `sub_cid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '其它栏目id',
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '标题',
  `short_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '短标题',
  `tag_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '标签id',
  `attr` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '1头条 2推荐 3轮播 4热门',
  `seo_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'seo标题',
  `seo_keywords` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '关键词',
  `seo_description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '描述',
  `source` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '来源',
  `author` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '作者',
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '文章简述',
  `img` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '缩略图',
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '文章内容',
  `status` tinyint(2) NULL DEFAULT 0 COMMENT '0 发布 1 不发布',
  `pv` int(10) NULL DEFAULT 0 COMMENT '浏览量',
  `link` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '外链',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 87 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '文章表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES (77, 1, '', '案例-香港日报网站', '', '', '', '', '', '', '', '', '《香港日报》创刊于2000年7月1日。是经香港特别行政区新闻局登记，经国家新闻出版署批准，特许在内地印刷出版和发行的中文报纸', '', '<p style=\"text-align: center;\"><strong>案例-香港日报网站</strong></p>\n<p>网站简介：《香港日报》创刊于2000年7月1日。是经香港特别行政区新闻局登记，经国家新闻出版署批准，特许在内地印刷出版和发行的中文报纸。《香港日报》是一份立足香港，背靠大陆的民族和民间报纸，既充分利用香港的自由环境以及信息环境，又充分利用大陆雄厚的政治、经济、文化、军事、科技、娱乐、生活等资源，以服务健康中国建设，服务民众健康养生为重点的综合性报纸。</p>\n<p>网站名称：<strong>香港日报官网</strong></p>\n<p>网址：<a href=\"http://www.hongkongdaily.net\" target=\"_blank\" rel=\"noopener\"><strong>www.hongkongdaily.net</strong></a></p>\n<p>类型：<strong>行业新闻</strong></p>\n<p>系统：<strong>chancms</strong></p>', 0, 510, '', '2023-12-17 20:20:10', '2024-05-28 14:28:14');
INSERT INTO `article` VALUES (78, 8, '', '关于ChanCMS', '', '', '', '', '', '', '', '', 'ChanCMS是一款基于Express和MySQL研发的高质量实用型CMS管理系统。它具备多种类型网站开发，易扩展、基于模块化和插件化开发模式，适用于商用企业级程序开发。', '', '<h3><strong>系统介绍</strong></h3>\n<p>ChanCMS是一款基于Express和MySQL研发的高质量实用型CMS管理系统。它具备多种类型网站开发，如公司，企业，学校，政府，图片，下载，产品等各类型网站建设。易扩展、基于模块化和插件化开发模式，适用于商用企业级程序开发。</p>\n<h3><strong>系统特色</strong></h3>\n<p>轻量、灵活、稳定、高性能。</p>\n<p>SEO。专注于seo,伪静态html和拼音导航，灵活设置关键词和描述。</p>\n<p>安全。基于knex,高防sql注入，接口权限校验，为安全提供保障。</p>\n<p>灵活。碎片功能，支持零碎文案配置，方便各类灵活文案配置。</p>\n<p>高扩展。支持扩展模型，字段配置，可动态生成表，超强扩展。</p>\n<p>模块化。一切模块相互独立，互不干扰。</p>\n<p>插件化。灵活开发，支持完整功能模块。</p>\n<h3><strong>开发历史</strong></h3>\n<h4>​第一次构想 2015</h4>\n<p>基于express mongoDB尝试开发第一版cms</p>\n<h4>第二次重构 2018</h4>\n<p>基于koa2 mysql重构</p>\n<h4>第三次重构 2020</h4>\n<p>基于egg mysql Sequelize重构</p>\n<h4>第四次重构(ChanCMS) 2022</h4>\n<p>因eggjs不够稳定，故回归。基于express mysql knex开发第三版，经过多年开发和线上运营，回归最稳定的express。</p>\n<h3>核心功能</h3>\n<ul>\n<li>站点管理</li>\n<li>栏目管理</li>\n<li>文章模块</li>\n<li>文章模块</li>\n<li>标签管理</li>\n<li>碎片管理 (广告，碎片文案，公司地址、电话、名称，微信等万能模块)</li>\n<li>扩展模型</li>\n<li>文章采集</li>\n<li>在线留言</li>\n<li>菜单管理</li>\n<li>登录日志</li>\n<li>pdf预览（按需加载）</li>\n<li>本地上传&amp;七牛云上传</li>\n<li>日志功能</li>\n<li>中英切换</li>\n<li>语音播报</li>\n</ul>', 0, 1608, '', '2024-02-03 20:23:48', '2024-05-31 10:09:06');
INSERT INTO `article` VALUES (79, 5, NULL, '根据您的需求定制您的系统', '', '', '', '', '', '', '', '', 'chancms可根据您的需求进行定制开发。', '', '<p>chancms可根据您的需求进行定制开发。</p>\n<p><strong>后端</strong></p>\n<p>基于express开发，打造稳定、高效的系统后台。</p>\n<p><strong>前端</strong></p>\n<p>用户界面的流畅性和易用性，使得系统在用户交互中表现出色。</p>\n<p><strong>质量</strong></p>\n<p>高质量的系统开发</p>\n<p><strong>联系作者</strong></p>\n<p>如果您有任何疑问或需求，随时与作者联系。</p>\n<p>微信：<strong>yanyutao2014</strong></p>', 0, 245, '', '2024-02-03 22:07:09', '2024-05-23 11:44:13');
INSERT INTO `article` VALUES (80, 3, NULL, 'ChanCMS默认模板', '', '', '', '', '', '', '', '', 'ChanCMS默认模板default', '', '<p>ChanCMS提供默认模板支持。</p>\n<p><strong>模板路径</strong></p>\n<p>app/modules/home/view/default</p>\n<p><strong>模板文件</strong></p>\n<p>chancms常用模板用以下这些：</p>\n<p>index.html 首页模板</p>\n<p>list.html 列表页模板</p>\n<p>article.html文章模板</p>\n<p>page.html 单页页面</p>\n<p>message.html 留言模板</p>\n<p>search.html 搜索模板</p>\n<p>tag.html 标签列表模板</p>\n<p>404.html 404页面</p>\n<p>500.html 500错误页面</p>', 0, 436, '', '2024-02-03 22:16:01', '2024-05-23 17:13:35');
INSERT INTO `article` VALUES (81, 2, '', 'ChanCMS系列教程一：安装运行快速入门', '', '', '', '', '', '', '', '', '环境配置​前置条件：安装node.js mysql 和 mysql可视化工具。本地开发推荐用phpStudy。', '', '<p><strong>快速入门​</strong></p>\n<p>环境配置​前置条件：安装node.js mysql 和 mysql可视化工具。本地开发推荐用phpStudy。</p>\n<p><strong>注意：版本有要求</strong></p>\n<pre class=\"language-markup\"><code>nodejs v18.14.2+\nmysql v5.7.26(兼容v5.6)</code></pre>\n<p><strong>项目地址</strong></p>\n<pre class=\"language-markup\"><code>https://gitee.com/yanyutao0402/chanyue-cms</code></pre>\n<p>文件结构</p>\n<pre class=\"language-javascript\"><code>|- client\n     |- admin 后台管理(二次开发一般可忽略)\n|- data ->chanyue.sql 数据库文件\n|- server 源码(重点部署到服务器)\n    |- app\n        |- config 配置\n        |- extend 扩展功能\n        |- middleware 中间件\n        |- modules 模块\n            |-api api模块\n                 |-- controller\n                 |-- service\n                 |-- router.js\n            |-web web模块\n                 |-- controller\n                 |-- service\n                 |-- view\n                 |-- router.js\n            ***\n       |- plugin 插件\n       |- public 静态资源\n       |- utils 工具\n       |- router.js 总路由\n|-app.js 应用入口\n|-pm2.json pm2管理</code></pre>\n<p><strong>1.安装运行​ 导入数据库文件</strong></p>\n<pre class=\"language-markup\"><code>chanyue.sql(data文件夹里面)</code></pre>\n<p><strong>2 修改数据库配置文件</strong></p>\n<pre class=\"language-markup\"><code>server/config/config.dev.js //开发环境\nserver/config/config.prd.js //生产环境</code></pre>\n<p><strong>3 进入server 文件夹 设置npm源安装依赖</strong></p>\n<pre class=\"language-markup\"><code>npm config set registry https://registry.npmmirror.com //切换新镜像源</code></pre>\n<p>安装</p>\n<pre class=\"language-markup\"><code>npm i\nnpm run dev</code></pre>\n<p>后访问 http://localhost:81 ，完成网站启动。</p>\n<p><strong>后台管理​访问地址</strong></p>\n<pre class=\"language-markup\"><code>http://localhost:81/public/admin/index.html</code></pre>\n<p>默认账号密码：chancms 123456</p>', 0, 616, '', '2024-02-03 22:21:08', '2024-05-30 16:38:41');
INSERT INTO `article` VALUES (82, 2, '', 'ChanCMS系列教程二：模板开发', '', '', '', '', '', '', '', '', 'ChanCMS教程之模板开发,模板目录介绍、模板文件介绍、模板开发核心流程、自定义模板数据。', '', '<h3>模板目录</h3>\n<p>default默认模板路径</p>\n<pre class=\"language-markup\"><code>app/modules/web/view/default</code></pre>\n<h3>模板文件</h3>\n<p><strong>default默认模板核心模板文件</strong></p>\n<pre class=\"language-markup\"><code>common/head.html 头部\ncommon/footer.html 底部\ncommon/nav.html 导航\ncommon/search.html 搜索\ncommon/meta.html  meta\ncommon/lang.html 语言切换\nindex.html  首页\nlist.html 列表页\narticle.html 文章页\npage.html  单页\nsearch.html 搜索页\ntag.html tag 列表页面\nmessage.html  留言\n404.html 404页面\n500.html 500页面</code></pre>\n<p><strong>default默认模板静态资源</strong></p>\n<p>默认模板静态资源目录</p>\n<pre class=\"language-markup\"><code>app/public/template/default/</code></pre>\n<h3>模板开发核心流程(例：模板名称为chancms)</h3>\n<p>1. 创建模板目录</p>\n<p>在目录下创建模板目录</p>\n<pre class=\"language-markup\"><code>app/modules/web/view/</code></pre>\n<p>2. 创建模板文件</p>\n<p>在view目录下，创建chancms文件夹，把默认default模板中的文件复制过来，或者直接复制一份default文件夹并修改名称为chancms。</p>\n<p>3. 创建模板静态资源</p>\n<p>在`app/public/template/`目录下创建模板静态资源目录chancms，和模板目录名称保持一直。</p>\n<p>4.修改默认模板名称</p>\n<p>默认模板为default,当模板文件和静态资源都已经按照上面要求操作完成后，在后台管理系统->站点管理 ，默认default模板名称改成chancms。</p>\n<p>5.根据自己的需求写静态页面，然后调用标签实现模板皮肤的开发。</p>\n<h3>自定义模板数据</h3>\n<p>复制一份`app/modules/web/controller/home.js`文件,进行备份。默认home首页数据固定，如果自己需要功能，调用common.js文件里面的方法。</p>\n<p>在`app/modules/web/controller/home.js`中找到首页渲染的方法进行修改。</p>\n<pre class=\"language-markup\"><code>//首页展示特定栏目id为1，2，3的最新文章（头条和最新内容）\nlet article = await CommonService.getArticleListByCids([1,2,3,])\n//获取所有栏目的最新文章（头条和最新内容）\nlet article = await CommonService.getArticleListByCids();\n//指定栏目内容调用 cid->栏目id len->个数 attr->头条 2推荐 3轮播 4热门\nlet news = await CommonService.getArticleListByCid(cid, len = 5, attr = \"\")；\n\n</code></pre>\n<p>更多的通用方法可以查看`app/modules/home/service/common.js`,需要什么数据直接调用对应方法，基本常见的都已经封装。</p>', 0, 2, '', '2024-05-30 15:30:39', '2024-05-30 15:30:39');
INSERT INTO `article` VALUES (83, 2, NULL, 'ChanCMS系列教程三：常用模板标签', '', '', '', '', '', '', '', '', 'ChanCMS系列教程三：常用模板标签', '', '<h3>全局标签</h3>\n<p>站点名称</p>\n<pre class=\"language-markup\"><code>{{site.name}}</code></pre>\n<p>网站域名</p>\n<pre class=\"language-markup\"><code>{{site.domain}}</code></pre>\n<p>邮箱</p>\n<pre class=\"language-markup\"><code>{{site.email}}</code></pre>\n<p>微信</p>\n<pre class=\"language-markup\"><code>{{site.wx}}</code></pre>\n<p>icp备案号</p>\n<pre class=\"language-markup\"><code>{{site.icp}}</code></pre>\n<p>站点统计</p>\n<pre class=\"language-markup\"><code>{{site.code}}</code></pre>\n<p>静态资源目录</p>\n<pre class=\"language-markup\"><code>{{base_url}}</code></pre>\n<p>标签列表</p>\n<pre class=\"language-markup\"><code>{{each tag}}\n{{$value.name}}\n{{/each}}</code></pre>\n<p>引入模板</p>\n<pre class=\"language-markup\"><code>{{include \'./common/模板名称.html\'}}</code></pre>\n<p>常用模板</p>\n<pre class=\"language-markup\"><code>{{include \'./common/header.html\'}}</code></pre>\n<pre class=\"language-markup\"><code>{{include \'./common/footer.html\'}}</code></pre>\n<pre class=\"language-markup\"><code>{{include \'./common/nav.html\'}}</code></pre>\n<pre class=\"language-markup\"><code>{{include \'./common/meta.html\'}}</code></pre>\n<pre class=\"language-markup\"><code>{{include \'./common/css.html\'}}</code></pre>\n<pre class=\"language-markup\"><code>{{include \'./common/js.html\'}}</code></pre>\n<p>碎片</p>\n<pre class=\"language-markup\"><code>{{@ frag[\'名称\']}}</code></pre>', 0, 1, '', '2024-05-30 16:06:25', '2024-05-30 16:06:25');
INSERT INTO `article` VALUES (84, 2, '', 'ChanCMS系列教程四：后台基本操作（视频）', '', '', '', '', '', '', '', '', 'ChanCMS后台基本操作视频，主要讲解一下功能点，通过此视频可以大概了解ChanCMS基本功能。', '', '<p>ChanCMS后台基本操作视频，主要讲解一下功能点，通过此视频可以大概了解ChanCMS基本功能。</p>\n<p>1.设置网站名称，关键词，描述</p>\n<p>2.栏目的设置</p>\n<p>3.文章模块增删改查</p>\n<p>4.碎片模块的万能作用和使用</p>\n<p>5.多权限用户角色和菜单配置</p>\n<p>6.采集功能模块和自定义模块</p>\n<p><iframe src=\"//player.bilibili.com/player.html?isOutside=true&aid=877077167&bvid=BV17N4y1Y7WC&cid=1362009352&p=1\" height=\"520\" frameborder=\"no\" scrolling=\"no\" allowfullscreen=\"allowfullscreen\"></iframe></p>', 0, 2, '', '2024-05-30 16:13:11', '2024-05-30 16:13:11');
INSERT INTO `article` VALUES (85, 2, '', 'ChanCMS系列教程五：Linux服务器部署教程（视频）', '', '', '', '', '', '', '', '', 'ChanCMS系列教程五：Linux服务器部署教程(视频操作)，讲解nodejs环境部署，mysql安装，pm2运行，域名绑定，反向代理等操作。', '', '<p>B站原视频地址：</p>\n<p><iframe src=\"//player.bilibili.com/player.html?aid=791741005&bvid=BV1yC4y197K5&cid=1350940465&p=1\" width=\"100%\" height=\"520\" frameborder=\"no\" scrolling=\"no\" allowfullscreen=\"allowfullscreen\"> </iframe></p>\n<p>课程内容：</p>\n<p>1.安装宝塔可视化管理界面</p>\n<p>2.安装数据库，创建数据库，导入数据库</p>\n<p>3.安装`pm2` 选择`node`运行版本</p>\n<p>4.创建站点，绑定域名，选择静态服务，代理填写`localhost:81`</p>\n<p>5.修改配置文件config.prd.js</p>\n<p>6.执行命令，运行网站`npm i` ,`npm run prd`,然后执行`pm2 list` 查看运行状态</p>', 0, 2, '', '2024-05-30 16:18:02', '2024-05-30 16:33:18');
INSERT INTO `article` VALUES (86, 2, '', 'ChanCMS系列视频六：PM2定时清理logs日志（视频）', '', '', '', '', '', '', '', '', '日志可以方便我们查找问题，过多的日志会占用空间，降低服务器运行性能。定期清理日志是必不可少的一步。', '', '<p>日志可以方便我们查找问题，过多的日志会占用空间，降低服务器运行性能。定期清理日志是必不可少的一步。</p>\n<p><iframe src=\"//player.bilibili.com/player.html?aid=664239988&bvid=BV1Qa4y1o7XD&cid=1353263929&p=1\" width=\"100%\" height=\"520\" frameborder=\"no\" scrolling=\"no\" allowfullscreen=\"allowfullscreen\"> </iframe></p>\n<h2>安装pm2-logrotate</h2>\n<pre class=\"language-markup\"><code>pm2 install pm2-logrotate</code></pre>\n<h3>查看详细配置</h3>\n<pre class=\"language-markup\"><code>pm2 conf pm2-logrotate</code></pre>\n<h3>pm2-logrotate 配置</h3>\n<p>每个文件最大存储 注：10G 10M 10K</p>\n<pre class=\"language-markup\"><code>pm2 set pm2-logrotate:max_size 10M</code></pre>\n<p>retain：保留的日志文件个数，比如设置为30，那么在日志文件达到30个后就会将最早的日志文件删除</p>\n<pre class=\"language-markup\"><code>pm2 set pm2-logrotate:retain 30</code></pre>\n<p>* 是否通过gzip压缩日志</p>\n<pre class=\"language-markup\"><code>pm2 set pm2-logrotate:compress false</code></pre>\n<p>dateFormat 日志文件名的日期格式。如设置的日志名为out.log，就会生成out-YYYY-MM-DD_HH-mm-ss.log 的日志文件</p>\n<pre class=\"language-markup\"><code>pm2 set pm2-logrotate:dateFormat YYYY-MM-DD_HH-mm-ss</code></pre>\n<p>检查日志大小的时间间隔，最小为1</p>\n<pre class=\"language-markup\"><code>pm2 set pm2-logrotate:workerInterval 30</code></pre>\n<p>设置强制分割，默认值是0 0 ***，意思是每天晚上0点分割</p>\n<pre class=\"language-markup\"><code>pm2 set pm2-logrotate:rotateInterval 0 0***</code></pre>\n<p>rotateModule 是否把pm2本身的日志也进行分割</p>\n<pre class=\"language-markup\"><code>pm2 set pm2-logrotate:rotateModule true</code></pre>\n<p>使用pm2 list查看到pm2-logrotate 进程id为0 ，执行pm2 stop 0即可停止服务</p>', 0, 1, '', '2024-05-30 16:27:10', '2024-05-30 16:27:10');

-- ----------------------------
-- Table structure for article_map_tag
-- ----------------------------
DROP TABLE IF EXISTS `article_map_tag`;
CREATE TABLE `article_map_tag`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `aid` int(11) NULL DEFAULT NULL COMMENT '文章id',
  `tid` int(11) NULL DEFAULT NULL COMMENT '标签id',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `id`(`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 158 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '文章-标签表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of article_map_tag
-- ----------------------------
INSERT INTO `article_map_tag` VALUES (139, 77, 0);
INSERT INTO `article_map_tag` VALUES (146, 79, 0);
INSERT INTO `article_map_tag` VALUES (148, 80, 0);
INSERT INTO `article_map_tag` VALUES (155, 81, 0);
INSERT INTO `article_map_tag` VALUES (157, 78, 0);

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category`  (
  `id` tinyint(2) NOT NULL AUTO_INCREMENT COMMENT '栏目id',
  `pid` tinyint(2) NOT NULL DEFAULT 0 COMMENT '父级栏目',
  `seo_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT 'seo标题',
  `seo_keywords` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT 'seo关键字',
  `seo_description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT 'seo描述',
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '栏目名称',
  `pinyin` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '栏目标识',
  `path` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '栏目路径',
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '栏目描述',
  `type` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '0' COMMENT '0 栏目 1 页面',
  `url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '网址',
  `sort` tinyint(2) NULL DEFAULT 0 COMMENT '排序',
  `target` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '0' COMMENT '打开方式 0 当前页面打开 1 新页面打开',
  `status` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '0' COMMENT '0 显示 1隐藏',
  `mid` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '0' COMMENT '模型id',
  `list_view` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT 'list.html' COMMENT '列表页模板',
  `article_view` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT 'article.html' COMMENT '详情页模板',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT = '网站栏目' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES (1, 0, '禅cms案例', '禅cms,ChanCMS', '禅cms网站案例', '案例', 'case', '/case', '', '0', '', 2, '0', '0', '0', 'list.html', 'article.html', '2023-11-25 12:52:03', '2024-05-23 22:40:52');
INSERT INTO `category` VALUES (2, 0, 'ChanCMS文档', 'ChanCMS,禅cms,cms,express,nodejs', 'ChanCMS使用文档', '文档', 'docs', '/docs', '', '0', '', 3, '0', '0', '0', 'list.html', 'article.html', '2023-11-25 12:52:03', '2024-05-23 22:41:00');
INSERT INTO `category` VALUES (3, 0, 'ChanCMS模板', '禅cms,ChanCMS', 'ChanCMS模板市场', '模板', 'muban', '/muban', '', '0', '', 4, '0', '0', '0', 'list.html', 'article.html', '2023-11-25 12:52:03', '2024-05-23 22:41:11');
INSERT INTO `category` VALUES (5, 0, 'ChanCMS定制', 'ChanCMS,禅cms,cms,nodecms,express', 'ChanCMS基于express进行可定制开发需求', '定制', 'custom', '/custom', '', '0', '', 5, '0', '0', '0', 'list.html', 'article.html', '2023-11-25 12:52:03', '2024-05-23 22:41:20');
INSERT INTO `category` VALUES (8, 0, 'ChanCMS', 'ChanCMS', 'ChanCMS', '关于', 'about', '/about', '', '1', '', 6, '0', '0', '0', 'list.html', 'page.html', '2023-11-25 12:52:03', '2024-05-23 22:41:25');
INSERT INTO `category` VALUES (9, 0, '', '', '', '首页', 'home', '/home', '', '1', '', 1, '0', '0', '0', 'chanyue.html', 'chanyue.html', '2024-05-23 22:38:21', '2024-05-23 22:56:07');

-- ----------------------------
-- Table structure for collect
-- ----------------------------
DROP TABLE IF EXISTS `collect`;
CREATE TABLE `collect`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `taskName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '任务名称',
  `targetUrl` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '采集地址',
  `listTag` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '列表tag标签',
  `startNum` int(11) NULL DEFAULT 1 COMMENT '开始页面',
  `endNum` int(11) NULL DEFAULT NULL COMMENT '结束页面',
  `increment` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '1' COMMENT '递增数量默认1',
  `titleTag` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '标题',
  `articleTag` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '文章内容',
  `charset` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '编码 1-> utf-8  2-> gb2312',
  `pages` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL COMMENT '采集地址集合',
  `clearRegCode` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL COMMENT '清理文章多余标签正则',
  `removeCode` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL COMMENT '清理代码',
  `cid` int(11) NULL DEFAULT NULL COMMENT '存储到栏目',
  `status` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '1' COMMENT '发布状态 1 草稿 2 发布',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT = '采集' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of collect
-- ----------------------------
INSERT INTO `collect` VALUES (1, '草堂札记', 'http://www.tangnet.cn/lists/31.html?page=${page}', '.news-list h5 a', 1, 1, '1', '.title h1', '.content', '1', 'http://www.tangnet.cn/news/46.html,http://www.tangnet.cn/news/44.html,http://www.tangnet.cn/news/43.html,http://www.tangnet.cn/news/42.html,http://www.tangnet.cn/news/37.html,http://www.tangnet.cn/news/27.html,http://www.tangnet.cn/news/28.html,http://www.tangnet.cn/news/31.html,http://www.tangnet.cn/news/26.html,http://www.tangnet.cn/news/24.html', '', NULL, 15, '2', '2023-09-29 19:33:57', '2023-12-10 19:34:42');

-- ----------------------------
-- Table structure for down
-- ----------------------------
DROP TABLE IF EXISTS `down`;
CREATE TABLE `down`  (
  `aid` int(11) NOT NULL,
  `downName` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `downLink` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT ''
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of down
-- ----------------------------

-- ----------------------------
-- Table structure for field
-- ----------------------------
DROP TABLE IF EXISTS `field`;
CREATE TABLE `field`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `model_id` int(11) NULL DEFAULT NULL COMMENT '模型id',
  `field_cname` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '模型字段中文名称',
  `field_ename` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '模型字段英文名称',
  `field_type` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '表单类型\r\n1单行文本	\r\n2.多行文本 \r\n3.下拉菜单 \r\n4.单选 \r\n5.多选 \r\n6.时间和日期 7.数字',
  `field_values` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '字段配置 下拉菜单多选等选项配置',
  `field_default` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '默认值',
  `field_sort` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '0' COMMENT '字段顺序',
  `field_length` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '字段长度',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `model_id`(`model_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '字段字典' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of field
-- ----------------------------
INSERT INTO `field` VALUES (1, 1, '下载名称', 'downName', '1', '', '', '0', NULL);
INSERT INTO `field` VALUES (2, 1, '下载链接', 'downLink', '1', '', '', '0', NULL);

-- ----------------------------
-- Table structure for frag
-- ----------------------------
DROP TABLE IF EXISTS `frag`;
CREATE TABLE `frag`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '名称',
  `mark` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '标识',
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '内容',
  `type` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '类型 1 富文本 2 文本框',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '碎片' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of frag
-- ----------------------------
INSERT INTO `frag` VALUES (2, '版权', 'copyright', '<p class=\"f-13 text-c c-bfbfbf\">自豪的采用 chancms</p>', '1', '2023-08-05 17:34:49', '2024-02-03 20:47:55');

-- ----------------------------
-- Table structure for friendlink
-- ----------------------------
DROP TABLE IF EXISTS `friendlink`;
CREATE TABLE `friendlink`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '链接名称',
  `link` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '链接地址',
  `sort` tinyint(255) NULL DEFAULT 0 COMMENT '排序',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '友情链接' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of friendlink
-- ----------------------------
INSERT INTO `friendlink` VALUES (1, '香港日报', 'http://www.hongkongdaily.net', 0, '2023-07-22 22:59:55', '2023-11-25 12:44:34');

-- ----------------------------
-- Table structure for gather
-- ----------------------------
DROP TABLE IF EXISTS `gather`;
CREATE TABLE `gather`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `taskName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '任务名称',
  `targetUrl` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '采集地址',
  `parseData` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL COMMENT '格式化数据函数',
  `cid` int(11) NULL DEFAULT NULL COMMENT '存储到栏目',
  `status` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '1' COMMENT '发布状态 1 草稿 2 发布',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT = '开源接口采集' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of gather
-- ----------------------------
INSERT INTO `gather` VALUES (3, '60s1', 'https://api.qqsuu.cn/api/dm-60s?type=json', 'let obj = {\n	title:\'\',\n	content:\'\'\n}\nif(data.success){\n	obj.title = data.name;\n	let p = \'\';\n	data.data.forEach((item)=>{\n	  p += \'<p>\'+item +\'</p>\'\n	});\n	obj.content = p;\n}\nreturn obj;', 1, '2', '2023-11-29 19:10:45', '2023-12-01 00:07:22');
INSERT INTO `gather` VALUES (4, '60s稳定版本', 'https://api.j4u.ink/v1/store/other/proxy/remote/news/60.json', 'let obj = {\n	title:\'\',\n	content:\'\'\n}\nif(data.code == 200){\n	obj.title = \"香港日报新闻60秒\"+ data.data.date_info.date;\n	let p = \'\';\n	data.data.news.forEach((item)=>{\n	  p += \'<p>\'+item +\'</p>\'\n	});\n       p+=\'<p>[香港日报微语]：\'+data.data.weiyu+\'</p>\'\n      obj.content = p;\n}\nreturn obj;', 15, '1', '2023-12-01 00:03:35', '2023-12-10 19:36:36');

-- ----------------------------
-- Table structure for login_log
-- ----------------------------
DROP TABLE IF EXISTS `login_log`;
CREATE TABLE `login_log`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL COMMENT '用户id',
  `ip` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'ip',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '登录时间',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `uid`(`uid`, `createdAt`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 52 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of login_log
-- ----------------------------
INSERT INTO `login_log` VALUES (1, 1, '127.0.0.1', '2023-11-01 17:01:53');
INSERT INTO `login_log` VALUES (2, 3, '127.0.0.1', '2023-11-01 17:38:53');
INSERT INTO `login_log` VALUES (3, 1, '127.0.0.1', '2023-11-01 17:39:49');
INSERT INTO `login_log` VALUES (4, 3, '127.0.0.1', '2023-11-01 17:51:16');
INSERT INTO `login_log` VALUES (5, 2, '127.0.0.1', '2023-11-01 17:51:57');
INSERT INTO `login_log` VALUES (6, 1, '127.0.0.1', '2023-11-01 21:55:40');
INSERT INTO `login_log` VALUES (7, 3, '127.0.0.1', '2023-11-01 22:11:35');
INSERT INTO `login_log` VALUES (8, 1, '127.0.0.1', '2023-11-01 22:11:51');
INSERT INTO `login_log` VALUES (9, 2, '127.0.0.1', '2023-11-01 22:13:49');
INSERT INTO `login_log` VALUES (10, 3, '127.0.0.1', '2023-11-01 22:14:09');
INSERT INTO `login_log` VALUES (11, 2, '127.0.0.1', '2023-11-05 21:39:45');
INSERT INTO `login_log` VALUES (12, 2, '127.0.0.1', '2023-11-05 23:18:19');
INSERT INTO `login_log` VALUES (13, 1, '127.0.0.1', '2023-11-05 23:19:20');
INSERT INTO `login_log` VALUES (14, 2, '127.0.0.1', '2023-11-05 23:41:48');
INSERT INTO `login_log` VALUES (15, 1, '127.0.0.1', '2023-11-05 23:58:42');
INSERT INTO `login_log` VALUES (16, 2, '127.0.0.1', '2023-11-05 23:59:06');
INSERT INTO `login_log` VALUES (17, 1, '127.0.0.1', '2023-11-07 09:35:47');
INSERT INTO `login_log` VALUES (18, 1, '127.0.0.1', '2023-11-08 11:22:11');
INSERT INTO `login_log` VALUES (19, 1, '127.0.0.1', '2023-11-25 12:59:36');
INSERT INTO `login_log` VALUES (20, 2, '127.0.0.1', '2023-11-25 13:00:00');
INSERT INTO `login_log` VALUES (21, 1, '127.0.0.1', '2023-11-25 13:05:01');
INSERT INTO `login_log` VALUES (22, 1, '127.0.0.1', '2023-11-25 18:04:58');
INSERT INTO `login_log` VALUES (23, 1, '127.0.0.1', '2023-11-26 11:56:25');
INSERT INTO `login_log` VALUES (24, 1, '127.0.0.1', '2023-12-05 22:20:58');
INSERT INTO `login_log` VALUES (25, 1, '127.0.0.1', '2023-12-07 20:57:59');
INSERT INTO `login_log` VALUES (26, 1, '127.0.0.1', '2023-12-08 21:29:29');
INSERT INTO `login_log` VALUES (27, 2, '127.0.0.1', '2023-12-08 21:33:06');
INSERT INTO `login_log` VALUES (28, 2, '127.0.0.1', '2023-12-09 09:49:01');
INSERT INTO `login_log` VALUES (29, 2, '127.0.0.1', '2023-12-10 13:10:37');
INSERT INTO `login_log` VALUES (30, 1, '127.0.0.1', '2023-12-10 19:18:41');
INSERT INTO `login_log` VALUES (31, 2, '127.0.0.1', '2023-12-10 19:30:35');
INSERT INTO `login_log` VALUES (32, 2, '127.0.0.1', '2023-12-17 18:48:38');
INSERT INTO `login_log` VALUES (33, 1, '127.0.0.1', '2023-12-17 19:50:41');
INSERT INTO `login_log` VALUES (34, 2, '127.0.0.1', '2023-12-17 20:12:33');
INSERT INTO `login_log` VALUES (35, 2, '127.0.0.1', '2023-12-17 20:15:34');
INSERT INTO `login_log` VALUES (36, 1, '127.0.0.1', '2023-12-17 20:15:49');
INSERT INTO `login_log` VALUES (37, 2, '127.0.0.1', '2023-12-17 20:18:15');
INSERT INTO `login_log` VALUES (38, 2, '127.0.0.1', '2023-12-23 20:20:16');
INSERT INTO `login_log` VALUES (39, 1, '127.0.0.1', '2023-12-31 20:23:16');
INSERT INTO `login_log` VALUES (40, 2, '127.0.0.1', '2023-12-31 20:41:37');
INSERT INTO `login_log` VALUES (41, 1, '127.0.0.1', '2024-01-01 18:07:43');
INSERT INTO `login_log` VALUES (42, 1, '127.0.0.1', '2024-01-19 20:04:56');
INSERT INTO `login_log` VALUES (43, 1, '127.0.0.1', '2024-02-01 23:19:03');
INSERT INTO `login_log` VALUES (44, 1, '127.0.0.1', '2024-02-01 23:28:59');
INSERT INTO `login_log` VALUES (45, 1, '127.0.0.1', '2024-02-01 23:37:21');
INSERT INTO `login_log` VALUES (46, 1, '127.0.0.1', '2024-02-03 19:37:05');
INSERT INTO `login_log` VALUES (47, 2, '127.0.0.1', '2024-02-03 20:47:16');
INSERT INTO `login_log` VALUES (48, 2, '122.96.121.255', '2024-02-03 21:57:53');
INSERT INTO `login_log` VALUES (49, 2, '221.226.158.155', '2024-02-04 11:13:29');
INSERT INTO `login_log` VALUES (50, 2, '122.96.121.255', '2024-02-17 21:50:01');
INSERT INTO `login_log` VALUES (51, 2, '127.0.0.1', '2024-05-23 22:30:14');

-- ----------------------------
-- Table structure for message
-- ----------------------------
DROP TABLE IF EXISTS `message`;
CREATE TABLE `message`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '姓名',
  `tel` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '电话',
  `company` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '公司名称',
  `content` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '留言内容',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '留言' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of message
-- ----------------------------
INSERT INTO `message` VALUES (1, '闫宇韬', '13366826071', '天山派', '仰天大笑出门去，我辈岂是蓬蒿人！', '2023-11-25 12:42:23', '2023-11-25 12:42:23');

-- ----------------------------
-- Table structure for model
-- ----------------------------
DROP TABLE IF EXISTS `model`;
CREATE TABLE `model`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `model_name` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '模型名称',
  `table_name` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '模型对应的表名',
  `status` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '1' COMMENT '1->开启 0->关闭',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '模型字典' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of model
-- ----------------------------
INSERT INTO `model` VALUES (1, 'down', 'down', '1');

-- ----------------------------
-- Table structure for site
-- ----------------------------
DROP TABLE IF EXISTS `site`;
CREATE TABLE `site`  (
  `id` int(2) NOT NULL AUTO_INCREMENT COMMENT '站点id',
  `name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '网站名称',
  `domain` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '网站域名',
  `email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '邮箱',
  `wx` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '微信',
  `icp` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'ICP备案号',
  `code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '站点统计代码',
  `json` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '万能配置',
  `title` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '页面标题',
  `keywords` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '页面关键词',
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '页面描述',
  `template` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'view模板',
  `appid` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '微信小程序appid',
  `secret` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '微信小程序secret',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '网站信息' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of site
-- ----------------------------
INSERT INTO `site` VALUES (1, 'ChanCMS', 'www.chancms.top', '867528315@qq.com', NULL, '皖ICP备2024033678号-1', '', '', '禅cms内容管理系统', 'chancms_ChanCms_禅cms_网站建设_网站制作_企业建站', 'chancms是一款基于Express和MySQL研发的高质量实用型CMS管理系统。它具备多种类型网站开发，公司，企业，学校，政府，图片，下载，产品等各类型网站建设。易扩展、基于模块化和插件化开发模式，适用于商用企业级程序开发。', NULL, NULL, NULL, NULL, '2024-02-04 11:17:22');

-- ----------------------------
-- Table structure for slide
-- ----------------------------
DROP TABLE IF EXISTS `slide`;
CREATE TABLE `slide`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '标题',
  `img_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '轮播图',
  `link_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '轮播链接',
  `mark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '备注',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of slide
-- ----------------------------
INSERT INTO `slide` VALUES (1, '首页', '/public/cover/05.jpg', '', NULL, '2023-11-05 23:29:14', '2023-12-08 21:32:31');

-- ----------------------------
-- Table structure for sys_app
-- ----------------------------
DROP TABLE IF EXISTS `sys_app`;
CREATE TABLE `sys_app`  (
  `id` int(2) NOT NULL AUTO_INCREMENT,
  `template` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT 'default' COMMENT 'view模板名称',
  `appid` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '微信小程序appid',
  `secret` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '微信小程序秘钥',
  `accessKey` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '七牛云ak',
  `secretKey` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '七牛云sk',
  `domain` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '七牛云域名',
  `bucket` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '七牛云bucket',
  `uploadWay` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT '1' COMMENT '上传方式 1->普通 2->七牛云',
  `maxAge` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL COMMENT '静态资源缓存 1开启 2关闭',
  `dataCache` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL COMMENT '全局模板数据缓存 1开启 2关闭',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT = '应用配置' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_app
-- ----------------------------
INSERT INTO `sys_app` VALUES (1, 'chancms', 's', 'x', 'x', 'x', 'x', 'x', '1', '2', '2', '2023-10-07 21:52:21', '2024-02-03 19:37:19');

-- ----------------------------
-- Table structure for sys_config
-- ----------------------------
DROP TABLE IF EXISTS `sys_config`;
CREATE TABLE `sys_config`  (
  `config_id` int(5) NOT NULL COMMENT '参数主键',
  `config_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '参数名称',
  `config_key` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '参数键名',
  `config_value` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '参数键值',
  `config_type` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '系统内置（Y是 N否）',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '备注',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`config_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '系统配置表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_config
-- ----------------------------

-- ----------------------------
-- Table structure for sys_menu
-- ----------------------------
DROP TABLE IF EXISTS `sys_menu`;
CREATE TABLE `sys_menu`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '菜单ID',
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '菜单配置',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '菜单表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_menu
-- ----------------------------
INSERT INTO `sys_menu` VALUES (2, '{\"route\":[{\"path\":\"/home\",\"name\":\"home-info\",\"component\":\"@/views/home/info.vue\",\"meta\":{\"title\":\"网站信息\",\"icon\":\"DataLine\",\"isShow\":true,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/site\",\"name\":\"site\",\"meta\":{\"title\":\"站点管理\",\"icon\":\"Monitor\",\"isShow\":true,\"role\":[\"admin\",\"super\",\"editor\"]},\"redirect\":\"/site\",\"children\":[{\"path\":\"/site\",\"name\":\"site-index\",\"component\":\"@/views/home/site.vue\",\"meta\":{\"title\":\"站点设置\",\"isShow\":true,\"role\":[\"admin\",\"super\",\"editor\"]}}]},{\"path\":\"/content\",\"name\":\"content\",\"meta\":{\"title\":\"内容管理\",\"isShow\":true,\"icon\":\"Grid\",\"role\":[\"admin\",\"super\",\"editor\"]},\"redirect\":\"/category\",\"children\":[{\"path\":\"/category\",\"name\":\"category-index\",\"component\":\"@/views/category/index.vue\",\"meta\":{\"title\":\"栏目管理\",\"isShow\":true,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/category/add\",\"name\":\"category-add\",\"component\":\"@/views/category/add.vue\",\"meta\":{\"title\":\"栏目管理-新增\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/category/edit/:id\",\"name\":\"category-edit\",\"component\":\"@/views/category/edit.vue\",\"meta\":{\"title\":\"页面管理-更新\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/article\",\"name\":\"article-index\",\"component\":\"@/views/article/index.vue\",\"meta\":{\"title\":\"文章管理\",\"isShow\":true,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/article/add\",\"name\":\"article-add\",\"component\":\"@/views/article/add.vue\",\"meta\":{\"title\":\"文章管理-新增\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/article/edit/:id\",\"name\":\"article-edit\",\"component\":\"@/views/article/edit.vue\",\"meta\":{\"title\":\"文章管理-更新\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/slide\",\"name\":\"slide-index\",\"component\":\"@/views/slide/index.vue\",\"meta\":{\"title\":\"轮播管理\",\"isShow\":true,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/slide/add\",\"name\":\"slide-add\",\"component\":\"@/views/slide/add.vue\",\"meta\":{\"title\":\"轮播管理-新增\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/slide/edit/:id\",\"name\":\"slide-edit\",\"component\":\"@/views/slide/edit.vue\",\"meta\":{\"title\":\"轮播管理-更新\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/tag\",\"name\":\"tag-index\",\"component\":\"@/views/tag/index.vue\",\"meta\":{\"title\":\"标签管理\",\"isShow\":true,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/tag/add\",\"name\":\"tag-add\",\"component\":\"@/views/tag/add.vue\",\"meta\":{\"title\":\"标签管理-新增\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/tag/edit/:id\",\"name\":\"tag-edit\",\"component\":\"@/views/tag/edit.vue\",\"meta\":{\"title\":\"标签管理-更新\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/frag\",\"name\":\"frag-index\",\"component\":\"@/views/frag/index.vue\",\"meta\":{\"title\":\"碎片管理\",\"isShow\":true,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/frag/add\",\"name\":\"frag-add\",\"component\":\"@/views/frag/add.vue\",\"meta\":{\"title\":\"碎片管理-新增\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/frag/edit/:id\",\"name\":\"frag-edit\",\"component\":\"@/views/frag/edit.vue\",\"meta\":{\"title\":\"碎片管理-更新\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}}]},{\"path\":\"/gather\",\"name\":\"gather\",\"meta\":{\"title\":\"采集功能\",\"icon\":\"MagicStick\",\"isShow\":true,\"role\":[\"super\"]},\"redirect\":\"/collect\",\"children\":[{\"path\":\"/collect\",\"name\":\"collect-index\",\"component\":\"@/views/collect/index.vue\",\"meta\":{\"title\":\"页面采集\",\"isShow\":true,\"role\":[\"super\"]}},{\"path\":\"/collect/add\",\"name\":\"collect-add\",\"component\":\"@/views/collect/add.vue\",\"meta\":{\"title\":\"页面采集-新增\",\"isShow\":false,\"role\":[\"super\"]}},{\"path\":\"/collect/:id\",\"name\":\"collect-edit\",\"component\":\"@/views/collect/edit.vue\",\"meta\":{\"title\":\"页面采集-更新\",\"isShow\":false,\"role\":[\"super\"]}},{\"path\":\"/gather\",\"name\":\"gather-index\",\"component\":\"@/views/gather/index.vue\",\"meta\":{\"title\":\"接口采集\",\"isShow\":true,\"role\":[\"super\"]}},{\"path\":\"/gather/add\",\"name\":\"gather-add\",\"component\":\"@/views/gather/add.vue\",\"meta\":{\"title\":\"接口采集-新增\",\"isShow\":false,\"role\":[\"super\"]}},{\"path\":\"/gather/edit/:id\",\"name\":\"gather-edit\",\"component\":\"@/views/gather/edit.vue\",\"meta\":{\"title\":\"接口采集-更新\",\"isShow\":false,\"role\":[\"super\"]}}]},{\"path\":\"/extend\",\"name\":\"extend\",\"meta\":{\"title\":\"功能管理\",\"icon\":\"Operation\",\"isShow\":true,\"role\":[\"super\",\"admin\",\"editor\"]},\"children\":[{\"path\":\"/model\",\"name\":\"model-index\",\"component\":\"@/views/model/index.vue\",\"meta\":{\"title\":\"模型管理\",\"isShow\":true,\"role\":[\"super\"]}},{\"path\":\"/model/add\",\"name\":\"model-add\",\"component\":\"@/views/model/add.vue\",\"meta\":{\"title\":\"模型管理-新增\",\"isShow\":false,\"role\":[\"super\"]}},{\"path\":\"/model/edit/:id\",\"name\":\"model-edit\",\"component\":\"@/views/model/edit.vue\",\"meta\":{\"title\":\"模型管理-更新\",\"isShow\":false,\"role\":[\"super\"]}},{\"path\":\"/model/field\",\"name\":\"field-index\",\"component\":\"@/views/field/index.vue\",\"meta\":{\"title\":\"字段管理\",\"isShow\":false,\"role\":[\"super\"]}},{\"path\":\"/model/field/add\",\"name\":\"field-add\",\"component\":\"@/views/field/add.vue\",\"meta\":{\"title\":\"字段管理-新增\",\"isShow\":false,\"role\":[\"super\"]}},{\"path\":\"/model/field/edit\",\"name\":\"field-edit\",\"component\":\"@/views/field/edit.vue\",\"meta\":{\"title\":\"字段管理-更新\",\"isShow\":false,\"role\":[\"super\"]}},{\"path\":\"/friendlink\",\"name\":\"friendlink-index\",\"component\":\"@/views/friendlink/index.vue\",\"meta\":{\"title\":\"友情链接\",\"isShow\":true,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/friendlink/add\",\"name\":\"friendlink-add\",\"component\":\"@/views/friendlink/add.vue\",\"meta\":{\"title\":\"友情链接-新增\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/friendlink/edit/:id\",\"name\":\"friendlink-edit\",\"component\":\"@/views/friendlink/edit.vue\",\"meta\":{\"title\":\"友情链接-更新\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/message\",\"name\":\"message-index\",\"component\":\"@/views/message/index.vue\",\"meta\":{\"title\":\"消息管理\",\"isShow\":true,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/message/add\",\"name\":\"message-add\",\"component\":\"@/views/message/add.vue\",\"meta\":{\"title\":\"消息管理-新增\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}},{\"path\":\"/message/edit/:id\",\"name\":\"message-edit\",\"component\":\"@/views/message/edit.vue\",\"meta\":{\"title\":\"消息管理-更新\",\"isShow\":false,\"role\":[\"admin\",\"super\",\"editor\"]}}]},{\"path\":\"/sys\",\"name\":\"sys\",\"meta\":{\"title\":\"系统管理\",\"isShow\":true,\"icon\":\"Setting\",\"role\":[\"admin\",\"super\"]},\"redirect\":\"/user\",\"children\":[{\"path\":\"/user\",\"name\":\"user-index\",\"component\":\"@/views/user/index.vue\",\"meta\":{\"title\":\"用户管理\",\"isShow\":true,\"role\":[\"admin\",\"super\"]}},{\"path\":\"/user/add\",\"name\":\"user-add\",\"component\":\"@/views/user/add.vue\",\"meta\":{\"title\":\"用户列表-新增\",\"isShow\":false,\"role\":[\"admin\",\"super\"]}},{\"path\":\"/user/edit/:id\",\"name\":\"user-edit\",\"component\":\"@/views/user/edit.vue\",\"meta\":{\"title\":\"用户列表-更新\",\"isShow\":false,\"role\":[\"admin\",\"super\"]}},{\"path\":\"/role\",\"name\":\"role-index\",\"component\":\"@/views/role/index.vue\",\"meta\":{\"title\":\"角色管理\",\"isShow\":true,\"role\":[\"admin\",\"super\"]}},{\"path\":\"/role/add\",\"name\":\"role-add\",\"component\":\"@/views/role/add.vue\",\"meta\":{\"title\":\"角色列表-新增\",\"isShow\":false,\"role\":[\"admin\",\"super\"]}},{\"path\":\"/role/edit/:id\",\"name\":\"role-edit\",\"component\":\"@/views/role/edit.vue\",\"meta\":{\"title\":\"角色列表-更新\",\"isShow\":false,\"role\":[\"admin\",\"super\"]}},{\"path\":\"/menu\",\"name\":\"menu-index\",\"component\":\"@/views/menu/index.vue\",\"meta\":{\"title\":\"菜单管理\",\"isShow\":true,\"role\":[\"super\"]}},{\"path\":\"/loginlog\",\"name\":\"loginLog-index\",\"component\":\"@/views/loginlog/index.vue\",\"meta\":{\"title\":\"登录日志\",\"isShow\":true,\"role\":[\"admin\",\"super\"]}}]}]}', NULL);

-- ----------------------------
-- Table structure for sys_notice
-- ----------------------------
DROP TABLE IF EXISTS `sys_notice`;
CREATE TABLE `sys_notice`  (
  `id` int(4) NOT NULL AUTO_INCREMENT COMMENT '公告ID',
  `title` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '公告标题',
  `type` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '公告类型（1通知 2公告）',
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '公告内容',
  `status` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '公告状态（0关闭  1正常）',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '备注',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '通知公告表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_notice
-- ----------------------------

-- ----------------------------
-- Table structure for sys_role
-- ----------------------------
DROP TABLE IF EXISTS `sys_role`;
CREATE TABLE `sys_role`  (
  `id` int(20) NOT NULL AUTO_INCREMENT COMMENT '角色ID',
  `name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '角色名称',
  `value` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '角色值',
  `sort` int(4) NOT NULL DEFAULT 0 COMMENT '显示顺序',
  `status` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '1' COMMENT '角色状态（1正常 0停用）',
  `remark` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '备注',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '角色信息表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_role
-- ----------------------------
INSERT INTO `sys_role` VALUES (1, '超级管理员', 'super', 0, '1', NULL, '2023-10-30 21:57:52', '2023-10-30 22:00:50');
INSERT INTO `sys_role` VALUES (2, '普通管理员', 'admin', 0, '1', NULL, '2023-10-30 22:01:04', '2023-10-30 22:01:04');
INSERT INTO `sys_role` VALUES (3, '编辑管理', 'editor', 0, '1', NULL, '2023-10-30 22:01:11', '2023-10-30 22:02:14');

-- ----------------------------
-- Table structure for sys_user
-- ----------------------------
DROP TABLE IF EXISTS `sys_user`;
CREATE TABLE `sys_user`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `role_id` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '角色id',
  `username` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户账号',
  `password` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '密码',
  `status` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '1' COMMENT '帐号状态（1正常 0停用）',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '备注',
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '用户表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sys_user
-- ----------------------------
INSERT INTO `sys_user` VALUES (2, '1', 'yanyutao', '1d73632ebe6497078f6744bf79bd2861', '1', NULL, '2023-10-30 22:42:18', '2024-05-23 22:29:59');

-- ----------------------------
-- Table structure for tag
-- ----------------------------
DROP TABLE IF EXISTS `tag`;
CREATE TABLE `tag`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '标签名称',
  `path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '标识',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '标签' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of tag
-- ----------------------------
INSERT INTO `tag` VALUES (1, 'cms', 'cms');
INSERT INTO `tag` VALUES (3, '案例', 'case');
INSERT INTO `tag` VALUES (4, '文档', 'docs');
INSERT INTO `tag` VALUES (5, '模板', 'muban');

SET FOREIGN_KEY_CHECKS = 1;
