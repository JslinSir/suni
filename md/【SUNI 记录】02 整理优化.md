现在主要的任务是发布，看网上说是极简单的。

### 优化

因为是移植，有很多是自己改的，有很多 多余的，需要按照自己的思路优化。

**Suni.js 196.kb**

**优化原则**：

* 使用方式向element靠近
  * 组件取名
  * 使用方式

>  优化前先复习下*vue3*

**待完成**

* [ ] 规划z-index
* [x] 装饰website，补充组件各种情况
* [ ] 关于transition: all的性能
* [x] 关于通用功能的提取mixin？<u>限于vue volar语法提示</u>
* [ ] 根据element-plus拓展，后续寻找好看的ui拓展
* [x] 处理none 与 type 
* [ ] 统一尺寸? <u>待定</u>

**SiButton**

* 几乎每个组件都有一个style设置

  * *主题色* 通用为 *type*
  * rgb 改为 hsl
  * 变体设置 *variant*
  * volar 总是报style不能自定义
    * type提示来自于 *interface HTMLAttributes*
    * 又来自于 *type StyleValue*
    * 查询 typescript 重写
    * 试了几次，好像不会合并，但  *type StyleValue = string | CSSProperties | Array\<StyleValue>* 还是支持 *string* 那就写 *raw string* 吧 ✔
  
* 分割样式文件

* 设置状态 active disabled

* 修复rapple
  * `npm install color` `npm install -D @types/color`
  * 引入color 的commonjs报错
  * 安装[rollup-plugin-commonjs](https://github.com/rollup/plugins/tree/master/packages/commonjs)

  * rapple 重构 *rapple => color* & *type*
  * rapple 与 active 状态 🚫
  * 校正其它

* 打包文件大小：**229kb**

  * 加入了一个 *color* 模块
  * 可以像其它模块一样，不打包模块文件？❔

**SiTooltip**

* color 修正
* vue transition 会修改元素 style，导致设置position不生效
  * 查看element-plus项目，style定位用的transform 💔没找到
  * 用数组绑定style属性，就不会被transition窜改了✔
    * data中申明positionStyle
    * 每次直接替换positionStyle
    * 修复bug
  * 滚动跟随特性
    * 看vuesax原项目，原项目没有scroll监听，有resize处理
    * 监听body scroll，再加一个 *scroll element* 选项
      * 获取scroll是个问题？用computed缓存
      * 优化一下，计算滚动是否停留在 *元素内* ❌
      * 监听鼠标wheel ❌
      * 优化自动绑定滚动元素 🕑

**SiLoading**

* 暂不使用
  * color
  * background
  * scale

**SiInput**

* si-input 需要大改，更符合element习惯，更简约
* input::before 无效
* ❕复合效果修复，同步优化website

**SiRadio**

* 试图用mixin，但是引入ComponentOptionsMixin type 并没有用，会volar报错
* input radio 不知道有没有focus状态
  * input radio 有focus状态，但是opacity为0，tab不好唤醒
  * 设置label tabindex，就会让input focus，但就多了一个
  * 所以设置label focus 关闭 input：tabindex = "-1"
  * 再监听keyup.enter
* prop.type只要有Boolean，就会自动转换为 true false
  * 参考element-plus，设置default为空字符

**SiCheckbox**

* prop.type Boolean 自动 false，也可以default: undefined
* checkbox 监听change input是一样的
* 先处理单独使用checkbox的情况
* label也有focus状态？
* input checkbox absolute 设置 4个0没用，还是需要设置width height 100%
* 是否需要重写一下checkbox icon?
* 清洗icon

**SiCheckboxGroup**

* 整理group 与 checkbox 之间的逻辑
* <u>vue3的devtool 需要禁用vue2的和react devtool</u>
* [网络字体加载慢chrome就会黄色警告](https://gotomorrow.dev/zh/css/font-display)
* 终于大概明白element-plus group 与 checkbox 之间的联系了
  * 代码大量涉及了el-form的联系建立
  * 排除开来看
    * group提供 computed({get,set})
      * set只有在不是数组的时候有用
    * array情况下直接push，跟我的想法是相通的。
      * push在响应性中是被监听的
  * element-plus考虑了很大特殊情况，我就简单点
* vue3 inject没有ts语法提示
* provide出的值是引用还好，如果是对象嵌套值，就无法响应，需要进一步深入了解响应性了。

**SiSelect**

* 清洗文件
* 与checkgroup之间的不同是，select 需要展示option中的label，就涉及到如何把option传回select
  * 一个办法是select提供一个数组，option在初始化时push
  * 先看看element—plus是如何做的
    * 看半天，没看出来
    * 视乎初始化已经被提取出一个模块了
  * focusin与click会同时触发，不能同时监听，怎么去抵消冲突呢？
    * focusin 先触发，然后监听mousedown，因为这个时候只剩下mouseup与click，避免马上触发
* 各组件样式
* 动态效果导致options定位错位
  * 将父级锁定，子级运动
* 会在点击options的时候触发select focusout ，造成总是失焦
  * options打开，监听body click
  * 不能监听click，监听后又会出现focuse后mouseup同时触发click
  * options监听mousedown，并拦截向后传，select也拦截向后传递mousedown
* 监听window.onResize
* 监听window.scroll
  * scroll事件不冒泡，但是有捕获阶段
* getPosition节流
  * 节流中函数不能获取this
  * 放到create初始化
  * 算了，去除滞后效果
* 初始时options在页面之外，会出现滑条
  * 删除测试，可能跟select没有关系
* 监听上下 *ArrowDown* *ArrowUp*，选择option
  * 组装数组，取名element-plus optionsArray字段
  * 暂时不考虑v-show 🕐
  * 父子级分工显示
  * 跳过disabled
  * 跳过v-show display === 'none'
* 监听enter

  * select函数
  * 加一个select event
  * 转义selectedValue
* bug: hover与transform的不断切换

  * options tansition transform
* 尝试滚动Scroll至选择的option

  * clientTop 无效，使用getBoundingClientRect
* 节流keydown
  * 节流后 e.preventDefault 也相应被节流
  * 需要植入节流
  * 专门created 上下按键，进行选择性节流
* loading & disabled
* state
* 自动朝上
  * position 在select与options上有标识 
  * class变换
* bug：mousedown需要动态监听&focus不断激活
  * 去除持续监听select mousedown
  * 去除焦点简单，更换为场景监听
* tab会激活多个active状态
  * 场景监听blur
* mousedown事件持续，导致不断开合
  * element事件后续传入body，而body正好接住
  * 还需理解vue的响应性
* 将mousedown换为click后，会发生冲突
  * click 与 focus 分离，不用label触发input
  * element-plus似乎根本不监听focus
* focus二次监听按键触发active
* **状态、listener的切换，导致method臃肿** 🕐
* filter
  * 解构会失去响应性
  * option 动态
  * 修复选择
    * 明白响应性
    * 重新provide 父级值
    * devtool并不准确
* multiple ❌
* group
  * 暂时不加（加了又会涉及filter相关）
* bug: active状态点击options会触发blur
  * 去除blur触发
  * 新bug 可以同时激活多个select
  * 暂不处理
* 考虑加一个远程 🕐

* **响应性**
  * $data是响应
    * 访问this时被this的handler转发到$data
  * computed是依赖响应
    * 对外target是一个普通值，不会被转发
    * 但是会被 *被动触发*
    * 返回的值是 *ref 对象*
    * computed 只在组件内有效
  * 单文件响应逻辑需要和渲染函数区分
    * 清楚渲染逻辑需要去理解setup 或者 渲染函数

**SiSwitch**

* 洗样式
* css特点，position初始可以被flex居中

**SiNotification**

* 先整理启动
  * 清洗样式
* 清洗icon
* bug：notification会被button里面内容覆盖
  * 设置z-index
* bug：设置absolute会出现溢出
  * 设置fixed

* bug：没有超过max-width的noti会被遮掩
  * 去除margin用parent padding
* 设置类型
  * 植入boxicon

**SiDialog**

* 清理template
* 清理样式文件
* 增加一个esc监听

**SiPagination**

* 移植的时候因为逻辑确实复杂，需要用渲染函数
  * element-plus 也用的渲染函数，当然配合了各个组件
* 如果可以，重塑为vue文件
  * 也是可以像 element-plus 多个组件，用渲染函数组装
  * 其实不用那么复杂
* 分析逻辑
  * 分页并不绑定某一个值
    * 可以被设置值
      * 设置值
        * total
      *  支持双向绑定
        * current
        * pageSize
      * pageSize 支持双向绑定
    * 分页需要事件触发
* 分页的状态变化逻辑
* vertical-align可以被flex重置
* 完善逻辑

**SiAvatar**

* 最后一个

**整理z-index**

**网站显示代码**

 * 找出了hightlight.js插件
    * 新的问题：code 字符串无法好好的植入进去
      	* 字符串的引号限制
      	* 是否实体替换？
    * 是否有vite的loader?
       * 找到了一个vite插件：[JasKang](https://github.com/JasKang)/**[vite-plugin-vuedoc](https://github.com/JasKang/vite-plugin-vuedoc)** ✔
         	* 这个插件好像是element-ui里面提取出来的一样
   * pre code 标签里面代码缩进太长了
    	* 设置css tab-size

* 完善一下网址
  * 既然代码参考已经解决了，那就完善一下、装饰一下
    * 代码显示动态
      * 设置height不会影响元素的scrollHeight
      * 利用这一点初始化height: 0，并获取scrollHeight动显
  * 调整下网址背景
    * h1的动态显示
  * 组件说明
  * 右侧目录
    * markdown-it插件应该有
    * 插件会引起vue编译报错
    * 通过router异步能获取到toc，如何动态变换toc呢？
    * 目录有了，但还差跟踪显示（算了）
    * 页面切换、动态变换
      * 响应性
      * reactive
  * v-deep 更改为 :deep()
  * 模块化 router 和 导航栏 ？
    * 突然报错 url of undefine
    * 重启就好了
  * 重新排下序，分下组
  * 全局变量设置、功能
  * 修复宽度bug
  * 文字描述统一
  * 首页
  
* bug：分页逻辑

    

