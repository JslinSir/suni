---
title: Avatar
---

# Avatar 头像

用图标、图片或者字符的形式展示用户或事物信息

## Default

添加 `src` / `#default`插槽 / `text` 来让 Avatar 展示内容

优先级为：`src` > `#default` > `text`

```vue demo src="./default.vue"

```

## Type & Color

设置 `type`、`color` 属性来改变 Avatar 的颜色（`color`属性覆盖`type`属性）

`type`: primary | warning | success | danger | dark | light

`color`: hsl | rgb | hex

```vue demo src="./type.vue"

```

## Badge

添加 `badge` 属性来给 Avatar 添加角标

设置 `badge-type` / `badge-color` 来设置角标颜色

设置 `badge-position` 属性来改变角标位置

`badge-type`: primary | warning | success | danger | light | dark

`badge-color`: hsl | rgb | hex

`badge-position`: top-right | top-left | bottom-right | bottom-left

```vue demo src="./badge.vue"

```

## Circle & Square

添加 `circle` / `square` 属性来改变 Avatar 的形状

```vue demo src="./circle.vue"

```

## Loading

添加 `loading` 属性来切换 Avatar 的 loading 状态

```vue demo src="./loading.vue"

```
