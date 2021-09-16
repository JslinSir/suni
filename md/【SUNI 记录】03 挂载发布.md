* 打包 **website** 项目挂载至 github / gitee
  * [x] 打包
    * 报错 *TypeError: Cannot read properties of null (reading 'isCE')*
    * 网上查不到解决办法
    * 使用打包后的 suni-ui打包，没问题了
  * [x] 查看gitee如何挂载
    * 搜索gitee pages
    * [帮助](https://gitee.com/help/articles/4136#article-header3)
    * 已提交申请
    * 申请成功
  * [x] gitee.io 访问报错
    *  *No 'Access-Control-Allow-Origin' header is present on the requested resource.*
    * 开启强制https，报错404
    * 配置Jekyll ❌
    * gitee pages 设置部署目录为空，额，更不对了 ❌
    * element-plus专门开了一个分支( gh-pages)放置网址 😂
    * 效仿 element-plus专门开分支 ❌
    * 问题在于，资源访问没有自动加前缀，而我的网址是有前置的
    * 算了 直接配置同名pages :ok:
    *  也推断出 Jekyll 配置文件没起作用，.spa是生效了
       * .spa得放到部署根目录
    * 配置了vite base
      * 资源加载没问题，但是没有运行了？
    * 继续查看vite官文，添加一个部署文件 deploy.sh ❌
    * 看到配置base后，history模式就会出问题
    * 所以配置createWebHistory('vue3-website')就 :ok: 了
    * npm run serve 也没有问题
  * [x] 挂载github pages
    * 上传代码成了难题
      * ssr 设置本地端口 7890，设置全局
      * shell 设置 all_proxy
      * 关掉ssr负载均衡
      * ok
    * github pages默认只支持/docs文件夹部署
      * 那就直接换输出目录
      * 又出现报错Error: Cannot find module 'debug'
        * 删除node_modules
        * 没用
        * 直接安装 npm install debug -D
        * ok
      * 支持单文件
        * 从404.html下手
        * 添加404.html重定向
        * 不行
        * 别人element-plus都用hash 我倔强什么，改了
        * ok
* 打包 **SUNI** 发布至 npm
  * [x] 打包是否分生产和开发模式（mini..），先不区分
  * [x] 理清发布情况
    * 如何发布 [Contributing packages to the registry](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
    * 去除了 normalize.css
  * [x] 配置发布参数
  * [x] 发布
  * [x] 安装、运行
    * 安装的 suni-ui 只包括 src 文件夹与 md 文件夹
    * 将dist文件夹换为lib，更新
  * [x] 更详细查看文档，配置隐藏私有文件
    * 添加files字段、.npmignore文件
* 修理bug
  * [x] 分页bug
  * [x] 布局样式
  * [x] 样式合并
    * roll 插件 postcss 配置
    * 设置 extract: true，单独打包出文件，需要自己手动引入
  * [x] 规划z-index
    * 先统一按命名存放在全局变量
  * [ ] 关于transition: all的性能
  * [ ] 统一尺寸? <u>待定</u>
  * [x] normalize.css 取出来就样式出问题了
* 组合发布
  * [x] 去除单独项目 commit prettier
    * 移除 prettier husky lint-staged 模块
    * 移除 .husky 文件夹
    * 移除 lint、prepare 命令
    * 移除 package.json lint-staged 配置
  * [ ] 去除git，放置一个文件夹，新生成git
    * 上传
    * 安装node_modules
    * website 打包 设置base
* 优化文档网页
  * [ ] 首页动态
    * [ ] 标题的提示偏移
    * [ ] 描述掀开效果
