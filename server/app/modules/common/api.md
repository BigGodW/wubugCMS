# ChanCMS 接口文档

## 1.站点信息

<http://localhost:81/api-chancms/v1/site>

## 2.获取碎片

<http://localhost:81/api-chancms/v1/frag>

## 3.tag列表

<http://localhost:81/api-chancms/v1/tag>

## 4.友情链接

<http://localhost:81/api-chancms/v1/friendlink>

## 5.导航

<http://localhost:81/api-chancms/v1/category>

## 6.获取文章

作用：查询头条、推荐、轮播、热门文章

<http://localhost:81/api-chancms/v1/getArticleList?attr=1&len=10&start=0>

入参：

- attr:  1头条 2推荐 3轮播 4热门 默认空
- len : 查询个数,默认5
- start: 开始 默认0
