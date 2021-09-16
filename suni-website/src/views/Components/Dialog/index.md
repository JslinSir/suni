---
title: Dialog
---

# Dialog 对话框

在保留当前页面状态的情况下，告知用户并承载相关操作

## Default

绑定 v-model 到一个 Boolean 类型的变量

可以添加 `#default`、`#header`、`#footer` 三个插槽

```vue demo src="./default.vue"

```

## Not close

添加 `not-close` 属性隐藏关闭按钮

```vue demo src="./not-close.vue"

```

## Nested Dialog

Dialog 可以嵌套

```vue demo src="./nested-dialog.vue"

```

## Blur

添加 `blur` 属性来给 Dialog 遮罩设置模糊效果

```vue demo src="./blur.vue"

```

## Square

添加 `square` 属性来改变 Dialog 的形状

```vue demo src="./square.vue"

```

## Prevent Close

添加 `prevent-close` 属性来使 Dialog 不能除关闭按钮以外的其它地方关闭 Dialog

```vue demo src="./prevent-close.vue"

```

## Loading

添加 `loading` 属性来切换 Dialog 的状态

```vue demo src="./loading.vue"

```
