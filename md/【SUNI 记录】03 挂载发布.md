打包 **website** 项目挂载至 github / gitee

- [x] 打包
  - 报错 _TypeError: Cannot read properties of null (reading 'isCE')_
  - 网上查不到解决办法
  - 使用打包后的 suni-ui 打包，没问题了
- [x] 查看 gitee 如何挂载
  - 搜索 gitee pages
  - [帮助](https://gitee.com/help/articles/4136#article-header3)
  - 已提交申请
  - 申请成功
- [x] gitee.io 访问报错
  - _No 'Access-Control-Allow-Origin' header is present on the requested resource._
  - 开启强制 https，报错 404
  - 配置 Jekyll ❌
  - gitee pages 设置部署目录为空，额，更不对了 ❌
  - element-plus 专门开了一个分支( gh-pages)放置网址 😂
  - 效仿 element-plus 专门开分支 ❌
  - 问题在于，资源访问没有自动加前缀，而我的网址是有前置的
  - 算了 直接配置同名 pages :ok:
  - 也推断出 Jekyll 配置文件没起作用，.spa 是生效了
    - .spa 得放到部署根目录
  - 配置了 vite base
    - 资源加载没问题，但是没有运行了？
  - 继续查看 vite 官文，添加一个部署文件 deploy.sh ❌
  - 看到配置 base 后，history 模式就会出问题
  - 所以配置 createWebHistory('vue3-website')就 :ok: 了
  - npm run serve 也没有问题
- [x] 挂载 github pages

  - 上传代码成了难题
    - ssr 设置本地端口 7890，设置全局
    - shell 设置 all_proxy
    - 关掉 ssr 负载均衡
    - ok
  - github pages 默认只支持/docs 文件夹部署
    - 那就直接换输出目录
    - 又出现报错 Error: Cannot find module 'debug'
      - 删除 node_modules
      - 没用
      - 直接安装 npm install debug -D
      - ok
    - 支持单文件
      - 从 404.html 下手
      - 添加 404.html 重定向
      - 不行
      - 别人 element-plus 都用 hash 我倔强什么，改了
      - ok

- 打包 **SUNI** 发布至 npm
  - [x] 打包是否分生产和开发模式（mini..），先不区分
  - [x] 理清发布情况
    - 如何发布 [Contributing packages to the registry](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
    - 去除了 normalize.css
  - [x] 配置发布参数
  - [x] 发布
  - [x] 安装、运行
    - 安装的 suni-ui 只包括 src 文件夹与 md 文件夹
    - 将 dist 文件夹换为 lib，更新
  - [x] 更详细查看文档，配置隐藏私有文件
    - 添加 files 字段、.npmignore 文件
- 修理 bug
  - [x] 分页 bug
  - [x] 布局样式
  - [x] 样式合并
    - roll 插件 postcss 配置
    - 设置 extract: true，单独打包出文件，需要自己手动引入
  - [x] 规划 z-index
    - 先统一按命名存放在全局变量
  - [ ] 关于 transition: all 的性能
  - [ ] 统一尺寸? <u>待定</u>
  - [x] normalize.css 取出来就样式出问题了
- 组合发布
  - [x] 去除单独项目 commit prettier
    - 移除 prettier husky lint-staged 模块
    - 移除 .husky 文件夹
    - 移除 lint、prepare 命令
    - 移除 package.json lint-staged 配置
  - [x] 去除 git，放置一个文件夹，新生成 git
    - 上传
    - 安装 node_modules
    - website 打包 设置 base
  - [x] 开发模式
    - suni-ui watch
    - suni-website 引入本地
      - vite 配置环境
      - 函数配置`defineConfig(fn({mode}))`
      - ok
  - [x] 打包部署
    - suni-ui 更版本成功
    - gitee pages 部署成功
    - github page 部署成功
      - 分支切换至 main
  - [x] 开发打包自动化命令
    - 开发自动化
      - 自动 suni-ui watch 模式
      - 自动 suni-website dev 模式
      - 可是异步命令无法显示
      - 输出继承
        - 异步视乎无法打印
        - 那把 vite 同步
        - 都有反应
        - ok
    - 打包自动化
      - 同步打包
      - 文字提示
      - 文字颜色 _npm i chalk -D_
    - 安装自动化
      - 安装 suni `npm i`的时候自动触发了 `npm run install`package-lock.json 多了一个*hasInstallScript*
      - 报错*vscode-languageserver-protocol*，我什么时候安装的这个？
      - 删了
      - 又报其它*vscode*错误，直接删除 node_modules
    - 更改 bin 文件夹名为 scripts
  - 更新 readme
  - 添加 MIT
  - 删除 master 分支
- 优化文档网页

  - 首页动态

  - [x] 标题的提示偏移

  - [ ] 描述掀开效果

  - [x] 编辑器报错：
        Cannot find type definition file for 'node'.
        The file is in the program because:
        Entry point of type library 'node' specified in compilerOptions
    - npm install @types/node --save-dev
    - reload window
    - 仔细一看，是因为我写了 types node，而我没有安装
      - 我确实在 vite.config.ts 中使用了 path 模块

**对外发布**

- 掘金



**日常bug**

* [x] 引入没有type
  * 查看type resolve规则

  * 设置tscofig
   ```json
    	"declaration": true,
    	"declarationDir": "./types",
    	"emitDeclarationOnly": true,
   ```

  * tsc输出type
    * 报错：无法解析vue
    * 换成vue-tsc
    * 报错：'emit mode is not yet support'
      * 就是不能输出
    * 那不用vue-tsc，不编译vue
    * 设置 tsc --project ./tsconfig.ts
    * ok
  * 输出跟想的不一样
    * 查看element-plus
    * 找不到
  * 自己写
    * 简单写了
  * 待细写全局方法

* [x] readme在suni-ui文件夹也需要一份

* website整理

  * 移除依赖markdown-it-anchor
  * 将依赖vite-plugin-vuedoc 移至开发依赖
  * 安装highlight.js，引入scss
  * 配置 vite.config emptyOutDir: false
    * 不清空目录，因为没有运行权限？

* suni-ui 似乎就不应该存在 依赖，只应该有开发依赖？
  * color移至开发依赖
  
* 紧急bug，目录导航用了 `#`定位，与 router 的hash模式冲突

  * [x] 暂时解决 gitee pages
    * 因为能够支持history 模式
  * 404重定向
  * 慢慢修复目录导航，换回hash
