### 快速使用

下载好项目以后，首先安装依赖：

```bash
npm install
```

需要修改config文件：

```bash
# 修改baseUrl为你的服务器地址
vim admin/src/main.js

# 修改baseUrl为你的服务器地址
vim client/src/main.js

# 修改数据库配置db为你的数据库配置
vim server/config/index.js
```

### Client 端

使用命令：

```bash
# 以开发模式运行Client 端
npm run dev-client

# 打包Client端
npm run build-client
```

Client端展示博客，目前有：文章列表、文章详情、日期归档、标签归档、阅读列表和个人介绍。

使用marked实现Markdown解析。

使用highlight.js实现代码高亮。

使用moment对显示日期进行格式化。

### Admin 端

使用命令：

```bash
# 以开发模式运行Admin 端
npm run dev-admin

# 打包Admin端
npm run build-admin
```

Admin端管理博客，目前支持：Markdown编写博客、快捷按键及Tool bars、自动保存博客、批量标签管理、阅读列表管理、撰写个人介绍。

`初始账号：admin`

`初始密码：1qaz@wsx`

使用Simplemde实现Markdown编写，支持快捷键和自动保存，具体快捷键请查看相关文档：[simple-markdown-editor](https://github.com/sparksuite/simplemde-markdown-editor)

利用函数去抖及axios实现文章的自动保存。

### Server 端

使用命令：

```bash
# 以开发模式运行Server 端
npm run dev-server

# 部署服务（请先全局安装pm2）
npm start
```

Server端作为RESTful API服务器，负责与Client/Admin端进行数据通信。

利用JWT实现鉴权系统。

利用Koa2及一些中间件和工具函数实现REST。


