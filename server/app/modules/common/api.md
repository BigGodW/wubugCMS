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

## 6.获取文章(头条、推荐、轮播、热门)

作用：查询头条、推荐、轮播、热门文章

<http://localhost:81/api-chancms/v1/getArticleList?attr=&len=10&start=0>

入参：

- attr:  1头条 2推荐 3轮播 4热门 默认空
- len : 查询个数,默认5
- start: 开始 默认0
  
## 6.获取栏目文章(头条、推荐、轮播、热门)

作用：查询某个栏目头条、推荐、轮播、热门文章

<http://localhost:81/api-chancms/v1/getArticleList?attr=&len=10&cid=1>

入参：

- attr:  1头条 2推荐 3轮播 4热门 默认空
- len : 查询个数,默认5
- cid: 栏目id

## 7.文章tag标签

作用：获取文章对应的tag标签
<http://localhost:81/api-chancms/v1/getArticleTag?id=79>

入参：

- id: 文章id

## 7.文章栏目列表

作用：获取文章对应的tag标签
<http://localhost:81/api-chancms/v1/list?id=2&current=1&pageSize=10>

入参：

- id: 栏目id
- current: 当前页
- pageSize: 每页显示条数

## 8.文章详情

作用：获取文章详情
<http://localhost:81/api-chancms/v1/article?id=79>

入参：

- id: 文章id
