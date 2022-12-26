'use strict';
const fs = require('fs');
const path = require('path');

const config = {};
config.version = 'v0.1';
config.appName = 'chanyue-cms';

// cookie sign key
config.keys = 'chanyue-cms_1539507495248_1368';

// add mysql config
config.mysql = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'eggcms'
};

config.token = {
    KEY: 'mingkong', // JSON WEB TOKEN KEY
    TIME: '1d', // 失效时间 10
};

config.md5 = {
    key: 'eggcms', // md5 加盐
};

// 关闭csrf
config.security = {
    csrf: {
        enable: false,
    },
};

// 配置上传
config.multipart = {
    fileSize: '50mb',
    mode: 'stream',
    whitelist: [
        '.jpg',
        '.jpeg',
        '.png',
        '.gif',
        '.zip',
        '.gz',
        '.tgz',
        '.gzip',
        '.mp3',
        '.mp4',
        '.avi',
    ],
    fileExtensions: ['.pdf', '.txt'], // 扩展几种上传的文件格式
};


// 模板配置
config.view = {
    defaultViewEngine: 'ejs',
    mapping: {
        '.html': 'ejs', // 左边写成.html后缀，会自动渲染.html文件
    },
};

config.static = {
    prefix: '/public/',
    dynamic: true, // 如果当前访问的静态资源没有缓存，则缓存静态文件，和`preload`配合使用；
    dir: ['app/public'],
    maxAge: 0, // in prod env, 0 in other envs
    buffer: false, // in prod env, false in other envs
    preload: false,
};


// 日志
config.logger = {
    level: 'INFO',
};

// add your user config here
config.template = 'qigong';
config.apiService = 'api';

module.exports = config;