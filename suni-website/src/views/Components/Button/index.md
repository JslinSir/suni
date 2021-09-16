---
title: Button
---

# Button 按钮

常用的操作按钮

## Default

设置`type`属性来改变 Button 的颜色，`variant`属性来使用变体

`type`: primary | warning | success | danger | light | dark

`variant`: default | flat | border | relief | text | floating | shadow

```vue demo src="./default.vue"

```

## Color & Disabled

设置 `color` 属性自定义 Button 的颜色（覆盖`type`颜色）

`color`: hsl | rgb | hex

```vue demo src="./color.vue"

```

## Circle & Square & Icon & Block

添加 `circle` / `square` 属性来改变形状

添加 `icon` 、`block` 属性调整样式

```vue demo src="./circle.vue"

```

## Size

设置 `size` 属性来调整 Button 尺寸

`size`: mini | small | default | large | xlarge

```vue demo src="./size.vue"

```

## Loading & Upload

添加 `loading` / `upload` 属性来切换 Button 状态

```vue demo src="./loading.vue"

```

## Animate

添加 `#animate` 插槽开启动画，设置 `animation-type` 属性更换动画样式

`animation-type`: vertical | scale | rotate

```vue demo src="./animate.vue"

```

## Group

```vue demo src="./group.vue"

```
