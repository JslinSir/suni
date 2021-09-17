    	没办法，我不得不开始打包自己的项目，才能更好地进行下一步。

    	可是，我心里有的没底，我一次都没打过包，就算我之前有看过、改过、理解过，但开始下手时，我显得手足无措。没有一次真正的构建经验，让我脑子一下子空空的，所以需要这篇随笔记录给我理一下我的思路。

    	既然脑袋空空，那就重新开始，跟着官方最新文档的指引。

### 开始

#### 1. [官方文档 \* 起步](https://webpack.docschina.org/guides/getting-started/)

- `package.json`中，添加`private`并移除`main`字段防止意外发布你的代码，[更多 npm package](https://docs.npmjs.com/cli/v7/configuring-npm/package-json)

#### 2. [官方文档 \* 管理资源](https://webpack.docschina.org/guides/asset-management/)

### 动手

1. `npm install webpack webpack-cli`

2. 观察了*vuesax-next*与*element-plus*

   - vuesax-next 分别打包的`/build/webpack.components.js`与`/build/styles/webpack.styles.js`

   - element-plus 采用了`rollup`打包工具：`"build:components": "rollup --config ./build/rollup.config.js"`，以及一系列打包工具

3. package.json => script : `"build": "webpack"`，加一个`webpack.config.js`，直接先试一下。

```js
// webpack.config.js
const path = require('path')

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'suni.js',
		path: path.resolve(__dirname, 'dist')
	}
}
```

(1) 警告：`The 'mode' option has not been set`

- 设置 mode: "production"，ok
- 加 [css loader](https://webpack.docschina.org/loaders/css-loader/)
- 加 [scss loader](https://webpack.docschina.org/loaders/sass-loader/)
- 加 [ts loader](https://github.com/TypeStrong/ts-loader)
- 加 [vue loader](https://vue-loader.vuejs.org/zh/guide/#%E6%89%8B%E5%8A%A8%E8%AE%BE%E7%BD%AE)

(2) 报错：`Cannot read Property ‘parseComponent’ of undefined`

- 手动给`vue-loader`添加版本号到`^16.4.1`

(3) 报错` annot find module './index.vue' or its corresponding type declarations.`

- 安装 tsc 测试一下：`"tsc": "vue-tsc --noEmit "`，没问题
- 将`shim-vue.d.ts`移至*src*文件夹，就不会包 ts 的文件错误；在`tsconfig.json`中的`include`加入`shim-vue.d.ts`也不会报错了

(4) 报错：`export 'setColor' (imported as 'setColor') was not found in '../index'`

- 倒腾了很久，猜测是 _tsconfig.json - module_ 配置
- 配置了`@/`然后去报错点改相对路径为@路径，就不报错了。
- 相同文件，引入相对路径的`./style.scss`出现类似报错，找不到，并且指向的错误点在其它文件，用@路径又可以了。但总觉得不妥。

(5) 报错：`The requested module ... does not provide an export named 'default'`

- 打包成一堆太乱了，我都不知道打包了什么，更别说发现出什么问题了，还是得分开。
- 先分离 css，[mini-css-extract-plugin](https://webpack.docschina.org/plugins/mini-css-extract-plugin/)

(5.1) 报错：`ERROR in Invalid value used in weak set`

- 搜不到问题

### 突然想到，我用 webpack 干嘛？

    	webpack用来打包、植入css，可是作为*组件UI*，打包用自己的vite项目打包就好，压缩也是，这也是在开发中一直在用的。

    	所以只用TS项目，我其实是不需要去打包的，直接引入就好。

#### 适配 js 项目

就需要 ts 解释

#### 适配 html 引入使用

就需要 css 植入打包，然后压缩

### 何不直接发布？

    	发布的话，至少要适配一下js项目，打包到`dist`，然后手写`types`，就像vue2时各个项目一样。（虽然它们现在都是rollup打包的）

    	并且还有区分开发环境和生产环境

#### 生产 js 文件，并保持目录结构

- 先用 tsc，配置`tsconfig.json`
- 错误：vue 文件无法解析，style 文件也没有加载
- 用 webpack
  - 先排除 vue，`externals.vue: 'commonjs vue'`：1.35M => 927M
- 研究`child_process模块`，了解`chalk包`

#### 突然明白

    	*element*与*vuesax*项目`build`文件夹有几个打包脚本，并不是<u>分割打包</u>而是**各自独立打包**。（之前一直纳闷，是那个webpack原理可以阻断`import`）

    	所以，还是要按照*vuesax*的方式进行打包，这也算是尊重原作者吧。

    	**打包组件没问题，但是打包全部就出问题了**

```bash
Error: Command failed: npx webpack --config build/lib/webpack.umd.js
```

    	直接执行`npx webpack --config build/lib/webpack.umd.js`却没问题。

    	加上`stdio: 'inherit'`就可以看到报错是webpack报的。

```bash
ERROR in ./node_modules/normalize.css/normalize.css 11:5
Module parse failed: Unexpected token (11:5)
```

    	发现是因为设置了` exclude: /node_modules/`，去除就可以了，但这坑定是有问题的。

    	下一步，样式文件分离出来。

#### 样式分离

    	按照文档，简单使用，就打包到了*dist文件夹*里了，但是应该组件样式在组件目录里。

    	为什么打包出来dist和组件里都有样式呢？

- 删除 dist 文件夹 ❌
- 删除公共配置的*minicss 插件* ✔

#### 文件压缩

    	**UglifyJsPlugin压缩JS插件**已经没有了，在[webpack v3 迁移 v4](https://webpack.docschina.org/migrate/4/)中提到，生产已经默认集成了。

    	加上`css-minimizer-webpack-plugin`插件，再把模式改成`production`

    	文件大小确实显著减小。

#### 引入试用

    	配置package.main，编辑器报错`has no default export`，浏览器也显示`does not provide an export named 'default'`

- 没有 types？设置 tsconfig`declaration: true`,没用 ❌
- 应该是`webpack.config.js`中的`output`的`library`属性问题

  - [webpack·指南 - 创建 library](https://webpack.docschina.org/guides/author-libraries/)找到相关内容
  - 应当像看 vue 文档一样研究 webpack
  - 配置了 library.name、type、export ❌

- 更像是 vite serve 导入 module 问题 ❌
- 直接`build`，又报了其它错 ❌l
  - 报错 ts 验证，关掉验证直接 build
  - 报错`Error: 'default' is not exported by ..\vue3-suni\dist\suni.js, imported by src\main.ts`
- 先验证 ts 错吧
  - ts `Dynamic imports are only supported when the '--module' flag is set to 'es2020',...`，设 tsconfig`module`为`es2020` ✔
  - 怎么突然引入 src 也出问题了？
- 似乎找到一份官方解答 [vitejs/vite - pull request](https://github.com/vitejs/vite/pull/825)

  - amd 有问题？那我不用 umd 试试
    - `type: 'umd2' `❌
    - `type: 'amd'` ❌
  - 或许明白 element-plus 不用 webpack 打包原因了

    这怕是要用 rollup 打包哦

- 将`import Suni from 'suni-ui'`直接改为`import * as Suni from 'suni-ui'`，直接打包就没报错了，但是**http-server**运行起来报错`Uncaught TypeError: Cannot read property 'defineComponent' of undefined`

#### 开发模式

可能还是 webpack 打包的问题，所以还是用开发模式尝试

- [webpack 开发环境](https://webpack.docschina.org/guides/development/)
- 开启了 webpack watch 模式
- 引入换为了`const Suni = import('suni-ui')`或者`import * as Suni from 'suni-ui'`
- 开始有进展了
- 又卡了直接**src**，引入相对路径没问题，换成打包又要加**@别名**才不会出问题，但又卡` 'createElementVNode' of undefined`

## 透！直接换 rollup 了

#### 删除 webpack 文件

- _build 文件夹_
- \*_dist 文件夹_
- 删除 package webpack 相关包
- 删除 package-lock 文件
- 修正 tsconfig

#### 安装 rollup

- `npm install -D rollup`
- *rollup.config.js*配置文件
- run 报错 _[!] Error: Unexpected token_，安装 scss 插件[rollup-plugin-scss](https://github.com/thgh/rollup-plugin-scss)
- run 依旧一样的错，应该是 ts 文件本身，安装 ts 插件[@rollup/plugin-typescript](https://github.com/rollup/plugins/tree/master/packages/typescript)
- run 警告 ❕*Unresolved dependencies*，报错 vue 文件

  - [@rollup/plugin-node-resolve](https://github.com/rollup/plugins/tree/master/packages/node-resolve)
  - [rollup-plugin-vue@next](https://github.com/vuejs/rollup-plugin-vue)

- 报错 _[!] (plugin vue) TypeError: Cannot read property 'refSugar' of undefined_

  - 重新安装包
  - _[!] Error: Unexpected token_ 指向 vue 文件的 style？
  - 将 vuePlugin()放在最前面
  - _[!] Error: Unexpected token_ 又指向另外一个 vue 文件，标识到 ts 的类型
  - 再试一次，同一个位置
  - 指哪改那，还是没用
  - 多次打包，随机指向不同的 vue 文件

- 克隆 element-plus 查看
  - `git clone --depth=1 https://github.com/element-plus/element-plus.git`
  - 下载一半就卡，直接看 github
  - 更改 rollup-plugin-vue 版本，删除 node_modules，安装
  - 还是随机报 vue 文件错

嘛的，居然把过时的本地，粘贴到网上了，还不能退回，我透！下次直接放文件里了。

书接上回

- **连续注释**保存 vue 文件，直到报了新错*Error: 'createElementBlock' is not exported*

- 是不是引入 vue 的问题，**先 external**

- 窝头？就这样打包好了，虽然还有些黄色警告，**再取消注释**看看

- oho！报错，总觉得是 ts 的问题，我换成 element-plus 的**esbuild**试试，并且 vite 也是用的这个

- esbuild 报出一个 _Unhandled 'error' event_

  - `node ./node_modules/esbuild/install.js` ✔

- 终于好了

- 引用试下

- **does not provide an export named 'default'**又来，可能真是我代码问题

  - 通过看黄色警告和 element-plus，可以得出一个是导出**es 模块**，一个是 cjs 要**export name**
    - es 模块 ✔ 打包无警告了

- vite 又出现 _does not provide an export named 'createElementBlock'_，似乎是之前 ts 插件会报的错

  - 网上报出似乎是 vue 的问题，我觉得也可能是打包器的问题

  - 但是先升级 vue 到 v3.2 以上，看下 lock 里面版本是不是 v3.2 上

    - 居然存在淘宝没有的库，设置源
    - 好了

  - 但是样式没有过来，要单独引用 ✔

    - 大部分样式都有问题

- 研究*rollup-plugin-scss*插件
  - 可能是*rollup-plugin-vue*插件的配置问题
- 最直接就是把样式移出 vue，但是根据*rollup-plugin-vue*插件 readme 发现它更青睐**[ rollup-plugin-postcss](https://github.com/egoist/rollup-plugin-postcss)**
  - 换了 scss 插件，vue 文件开始报错
- 常识移出样式，移出了确实不会报错，但是想 icon 这样的文件我不方便移出
  - _rollup-plugin-vue_ => _@vue/compiler-sfc_ 结果好像没写啥，我怀疑作者希望我们去看源代码
- 在 webpack 中是 vue 把文件抛出给 rules 中的 scss 去接，而 rollup 没有明确声明 scss 由谁来接？
  - 结果将*postcss()*放在 *vuePlugin()*后面就 ok 了 ✔
  - 没有 css 文件生成因为 postcss 自动插入头部
    - 在 Suni.js 中找到插入 css 文件了，因为一行真是无限长，所以不容易辨识。
  - rollup 插件是从右到左开始识别的？

#### 修复 bug

input 和 select 组件有问题了

- 开启 rollup 的 watch 模式
- 修复一个 _app.config.unwrapInjectedRef = true_
  - 不知道作为框架这样直接设置会不会有影响

#### 打包好了

终于打包好成为了直接开发的样子
