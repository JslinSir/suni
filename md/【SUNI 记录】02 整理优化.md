现在主要的任务是发布，看网上说是极简单的。

### 优化

因为是移植，有很多是自己改的，有很多 多余的，需要按照自己的思路优化。

**Suni.js 196.kb**

**优化原则**：

- 使用方式向 element 靠近
  - 组件取名
  - 使用方式

> 优化前先复习下*vue3*

**待完成**

- [ ] 规划 z-index
- [x] 装饰 website，补充组件各种情况
- [ ] 关于 transition: all 的性能
- [x] 关于通用功能的提取 mixin？<u>限于 vue volar 语法提示</u>
- [ ] 根据 element-plus 拓展，后续寻找好看的 ui 拓展
- [x] 处理 none 与 type
- [ ] 统一尺寸? <u>待定</u>

**SiButton**

- 几乎每个组件都有一个 style 设置

  - _主题色_ 通用为 _type_
  - rgb 改为 hsl
  - 变体设置 _variant_
  - volar 总是报 style 不能自定义
    - type 提示来自于 _interface HTMLAttributes_
    - 又来自于 _type StyleValue_
    - 查询 typescript 重写
    - 试了几次，好像不会合并，但 _type StyleValue = string | CSSProperties | Array\<StyleValue>_ 还是支持 _string_ 那就写 _raw string_ 吧 ✔

- 分割样式文件

- 设置状态 active disabled

- 修复 rapple

  - `npm install color` `npm install -D @types/color`
  - 引入 color 的 commonjs 报错
  - 安装[rollup-plugin-commonjs](https://github.com/rollup/plugins/tree/master/packages/commonjs)

  - rapple 重构 _rapple => color_ & _type_
  - rapple 与 active 状态 🚫
  - 校正其它

- 打包文件大小：**229kb**

  - 加入了一个 _color_ 模块
  - 可以像其它模块一样，不打包模块文件？❔

**SiTooltip**

- color 修正
- vue transition 会修改元素 style，导致设置 position 不生效
  - 查看 element-plus 项目，style 定位用的 transform 💔 没找到
  - 用数组绑定 style 属性，就不会被 transition 窜改了 ✔
    - data 中申明 positionStyle
    - 每次直接替换 positionStyle
    - 修复 bug
  - 滚动跟随特性
    - 看 vuesax 原项目，原项目没有 scroll 监听，有 resize 处理
    - 监听 body scroll，再加一个 _scroll element_ 选项
      - 获取 scroll 是个问题？用 computed 缓存
      - 优化一下，计算滚动是否停留在 _元素内_ ❌
      - 监听鼠标 wheel ❌
      - 优化自动绑定滚动元素 🕑

**SiLoading**

- 暂不使用
  - color
  - background
  - scale

**SiInput**

- si-input 需要大改，更符合 element 习惯，更简约
- input::before 无效
- ❕ 复合效果修复，同步优化 website

**SiRadio**

- 试图用 mixin，但是引入 ComponentOptionsMixin type 并没有用，会 volar 报错
- input radio 不知道有没有 focus 状态
  - input radio 有 focus 状态，但是 opacity 为 0，tab 不好唤醒
  - 设置 label tabindex，就会让 input focus，但就多了一个
  - 所以设置 label focus 关闭 input：tabindex = "-1"
  - 再监听 keyup.enter
- prop.type 只要有 Boolean，就会自动转换为 true false
  - 参考 element-plus，设置 default 为空字符

**SiCheckbox**

- prop.type Boolean 自动 false，也可以 default: undefined
- checkbox 监听 change input 是一样的
- 先处理单独使用 checkbox 的情况
- label 也有 focus 状态？
- input checkbox absolute 设置 4 个 0 没用，还是需要设置 width height 100%
- 是否需要重写一下 checkbox icon?
- 清洗 icon

**SiCheckboxGroup**

- 整理 group 与 checkbox 之间的逻辑
- <u>vue3 的 devtool 需要禁用 vue2 的和 react devtool</u>
- [网络字体加载慢 chrome 就会黄色警告](https://gotomorrow.dev/zh/css/font-display)
- 终于大概明白 element-plus group 与 checkbox 之间的联系了
  - 代码大量涉及了 el-form 的联系建立
  - 排除开来看
    - group 提供 computed({get,set})
      - set 只有在不是数组的时候有用
    - array 情况下直接 push，跟我的想法是相通的。
      - push 在响应性中是被监听的
  - element-plus 考虑了很大特殊情况，我就简单点
- vue3 inject 没有 ts 语法提示
- provide 出的值是引用还好，如果是对象嵌套值，就无法响应，需要进一步深入了解响应性了。

**SiSelect**

- 清洗文件
- 与 checkgroup 之间的不同是，select 需要展示 option 中的 label，就涉及到如何把 option 传回 select
  - 一个办法是 select 提供一个数组，option 在初始化时 push
  - 先看看 element—plus 是如何做的
    - 看半天，没看出来
    - 视乎初始化已经被提取出一个模块了
  - focusin 与 click 会同时触发，不能同时监听，怎么去抵消冲突呢？
    - focusin 先触发，然后监听 mousedown，因为这个时候只剩下 mouseup 与 click，避免马上触发
- 各组件样式
- 动态效果导致 options 定位错位
  - 将父级锁定，子级运动
- 会在点击 options 的时候触发 select focusout ，造成总是失焦
  - options 打开，监听 body click
  - 不能监听 click，监听后又会出现 focuse 后 mouseup 同时触发 click
  - options 监听 mousedown，并拦截向后传，select 也拦截向后传递 mousedown
- 监听 window.onResize
- 监听 window.scroll
  - scroll 事件不冒泡，但是有捕获阶段
- getPosition 节流
  - 节流中函数不能获取 this
  - 放到 create 初始化
  - 算了，去除滞后效果
- 初始时 options 在页面之外，会出现滑条
  - 删除测试，可能跟 select 没有关系
- 监听上下 _ArrowDown_ _ArrowUp_，选择 option
  - 组装数组，取名 element-plus optionsArray 字段
  - 暂时不考虑 v-show 🕐
  - 父子级分工显示
  - 跳过 disabled
  - 跳过 v-show display === 'none'
- 监听 enter

  - select 函数
  - 加一个 select event
  - 转义 selectedValue

- bug: hover 与 transform 的不断切换

  - options tansition transform

- 尝试滚动 Scroll 至选择的 option

  - clientTop 无效，使用 getBoundingClientRect

- 节流 keydown
  - 节流后 e.preventDefault 也相应被节流
  - 需要植入节流
  - 专门 created 上下按键，进行选择性节流
- loading & disabled
- state
- 自动朝上
  - position 在 select 与 options 上有标识
  - class 变换
- bug：mousedown 需要动态监听&focus 不断激活
  - 去除持续监听 select mousedown
  - 去除焦点简单，更换为场景监听
- tab 会激活多个 active 状态
  - 场景监听 blur
- mousedown 事件持续，导致不断开合
  - element 事件后续传入 body，而 body 正好接住
  - 还需理解 vue 的响应性
- 将 mousedown 换为 click 后，会发生冲突
  - click 与 focus 分离，不用 label 触发 input
  - element-plus 似乎根本不监听 focus
- focus 二次监听按键触发 active
- **状态、listener 的切换，导致 method 臃肿** 🕐
- filter
  - 解构会失去响应性
  - option 动态
  - 修复选择
    - 明白响应性
    - 重新 provide 父级值
    - devtool 并不准确
- multiple ❌
- group
  - 暂时不加（加了又会涉及 filter 相关）
- bug: active 状态点击 options 会触发 blur
  - 去除 blur 触发
  - 新 bug 可以同时激活多个 select
  - 暂不处理
- 考虑加一个远程 🕐

- **响应性**
  - $data 是响应
    - 访问 this 时被 this 的 handler 转发到$data
  - computed 是依赖响应
    - 对外 target 是一个普通值，不会被转发
    - 但是会被 _被动触发_
    - 返回的值是 _ref 对象_
    - computed 只在组件内有效
  - 单文件响应逻辑需要和渲染函数区分
    - 清楚渲染逻辑需要去理解 setup 或者 渲染函数

**SiSwitch**

- 洗样式
- css 特点，position 初始可以被 flex 居中

**SiNotification**

- 先整理启动
  - 清洗样式
- 清洗 icon
- bug：notification 会被 button 里面内容覆盖
  - 设置 z-index
- bug：设置 absolute 会出现溢出

  - 设置 fixed

- bug：没有超过 max-width 的 noti 会被遮掩
  - 去除 margin 用 parent padding
- 设置类型
  - 植入 boxicon

**SiDialog**

- 清理 template
- 清理样式文件
- 增加一个 esc 监听

**SiPagination**

- 移植的时候因为逻辑确实复杂，需要用渲染函数
  - element-plus 也用的渲染函数，当然配合了各个组件
- 如果可以，重塑为 vue 文件
  - 也是可以像 element-plus 多个组件，用渲染函数组装
  - 其实不用那么复杂
- 分析逻辑
  - 分页并不绑定某一个值
    - 可以被设置值
      - 设置值
        - total
      - 支持双向绑定
      - current
      - pageSize
      - pageSize 支持双向绑定
    - 分页需要事件触发
- 分页的状态变化逻辑
- vertical-align 可以被 flex 重置
- 完善逻辑

**SiAvatar**

- 最后一个

**整理 z-index**

**网站显示代码**

- 找出了 hightlight.js 插件

  - 新的问题：code 字符串无法好好的植入进去
    _ 字符串的引号限制
    _ 是否实体替换？
  - 是否有 vite 的 loader?
    - 找到了一个 vite 插件：[JasKang](https://github.com/JasKang)/**[vite-plugin-vuedoc](https://github.com/JasKang/vite-plugin-vuedoc)** ✔ \* 这个插件好像是 element-ui 里面提取出来的一样
  - pre code 标签里面代码缩进太长了
    - 设置 css tab-size

- 完善一下网址
  - 既然代码参考已经解决了，那就完善一下、装饰一下
    - 代码显示动态
      - 设置 height 不会影响元素的 scrollHeight
      - 利用这一点初始化 height: 0，并获取 scrollHeight 动显
  - 调整下网址背景
    - h1 的动态显示
  - 组件说明
  - 右侧目录
    - markdown-it 插件应该有
    - 插件会引起 vue 编译报错
    - 通过 router 异步能获取到 toc，如何动态变换 toc 呢？
    - 目录有了，但还差跟踪显示（算了）
    - 页面切换、动态变换
      - 响应性
      - reactive
  - v-deep 更改为 :deep()
  - 模块化 router 和 导航栏 ？
    - 突然报错 url of undefine
    - 重启就好了
  - 重新排下序，分下组
  - 全局变量设置、功能
  - 修复宽度 bug
  - 文字描述统一
  - 首页
- bug：分页逻辑
