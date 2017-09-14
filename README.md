# vue-webpack

webpack多页面脚手架.

### 使用说明

src/apps下面每一个模块会打包为一个单独的页面，如detail模块会打包成detail.html、detail.css和detail.js. 模块下面index.js和index.html这两个文件不能改变（改变需要改webpack.config.js）,其它的名称和路径自定义

### 安装包

``` bash
$ npm install
```
或
``` bash
$ yarn install
```

### 开发:

``` bash
$ npm run dev
```

### 打包:

``` bash
$ npm run build
```
