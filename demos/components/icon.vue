<template lang="md">
# Icon 图标
XCUI的图标使用开源图标库[ionicons](http://ionicons.com/)的子集, 包含了开发常用的图标200余个。

## 如何使用

使用`<x-icon></x-icon>`组件，指定图标名称`name`属性，示例代码：
```html
<x-icon name="cloud"></x-icon>
```
将会被渲染为：
```html
<i class="x-icon x-icon-cloud"></i>
```

## 图标大小和颜色

::: demo 通过设置`size`和`color`属性可以改变图标的大小和颜色。

```html
<tpl>
    <div class="icon-item">
        <x-icon name="camera" size="16"></x-icon>
        <p>16px大小</p>
    </div>
    <div class="icon-item">
        <x-icon name="camera" size="24"></x-icon>
        <p>24px大小</p>
    </div>
    <div class="icon-item">
        <x-icon name="camera" size="32" color="#46C3C1"></x-icon>
        <p>32px大小,薄荷绿</p>
    </div>
</tpl>
```

:::

## 图标旋转和翻转

::: demo 通过设置`rotate`属性可以对图标进行旋转，设置`flip`属性可以对图标进行翻转。

```html
<tpl>
    <div class="icon-item">
        <x-icon name="settings" size="32"></x-icon>
        <p>原始图标</p>
    </div>
    <div class="icon-item">
        <x-icon name="settings" size="32" rotate="90"></x-icon>
        <p>旋转90度</p>
    </div>
    <div class="icon-item">
        <x-icon name="settings" size="32" rotate="180"></x-icon>
        <p>旋转180度</p>
    </div>
    <div class="icon-item">
        <x-icon name="settings" size="32" rotate="270"></x-icon>
        <p>旋转270度</p>
    </div>
    <div class="icon-item">
        <x-icon name="settings" size="32" flip="horizontal"></x-icon>
        <p>水平翻转</p>
    </div>
    <div class="icon-item">
        <x-icon name="settings" size="32" flip="vertical"></x-icon>
        <p>垂直翻转</p>
    </div>
</tpl>
```

:::

## 图标旋转动画

::: demo 通过设置`animate`属性可以对图标设置旋转动画。可以用于页面加载效果。

```html
<tpl>
    <div class="icon-item"><x-icon name="loop" size="32" animate="spin"></x-icon></div>
    <div class="icon-item"><x-icon name="load-a" size="32" animate="pulse"></x-icon></div>
    <div class="icon-item"><x-icon name="load-b" size="32" animate="spin"></x-icon></div>
    <div class="icon-item"><x-icon name="load-c" size="32" animate="spin"></x-icon></div>
    <div class="icon-item"><x-icon name="load-d" size="32" animate="spin"></x-icon></div>
</tpl>
```

:::


## Props
| 名字 | 类型 | 默认 | 描述 | 是否必选 |可选值|
|-----|-----|-----|-----|----|----|----|
|name|String|无|图标名称|必选||
|size|Number|无|图标的大小，单位是px|可选||
|color|String, HEX, RGBA, HSLA|无|图标的颜色|可选||
|rotate|Number|无|旋转角度|可选||
|flip|String|无|翻转类型|可选|horizontal, vertical|

## 图标示例

<div class="demo-icon-list">
    <template v-for="name in list">
        <div class="icon-item">
            <x-icon :name="name" :size="size"></x-icon>
            <p>{{name}}</p>
        </div>
    </template>
</div>

</template>
<script>
    export default {
        data() {
            return {
                size: 32,
                list: [
                   'alert',
                   'alert-circled',
                   'android-add',
                   'android-alert',
                   'android-arrow-dropdown-circle',
                   'android-arrow-dropleft-circle',
                   'android-arrow-dropright-circle',
                   'android-arrow-dropup-circle',
                   'android-close',
                   'android-done',
                   'android-done-all',
                   'android-remove',
                   'aperture',
                   'archive',
                   'arrow-down-a',
                   'arrow-down-b',
                   'arrow-down-c',
                   'arrow-expand',
                   'arrow-graph-down-left',
                   'arrow-graph-down-right',
                   'arrow-graph-up-left',
                   'arrow-graph-up-right',
                   'arrow-left-a',
                   'arrow-left-b',
                   'arrow-left-c',
                   'arrow-move',
                   'arrow-resize',
                   'arrow-return-left',
                   'arrow-return-right',
                   'arrow-right-a',
                   'arrow-right-b',
                   'arrow-right-c',
                   'arrow-shrink',
                   'arrow-swap',
                   'arrow-up-a',
                   'arrow-up-b',
                   'arrow-up-c',
                   'asterisk',
                   'at',
                   'backspace',
                   'backspace-outline',
                   'bag',
                   'bluetooth',
                   'bonfire',
                   'bookmark',
                   'briefcase',
                   'bug',
                   'calculator',
                   'calendar',
                   'camera',
                   'card',
                   'cash',
                   'chatbox',
                   'chatbox-working',
                   'chatboxes',
                   'chatbubble',
                   'chatbubble-working',
                   'chatbubbles',
                   'checkmark',
                   'checkmark-circled',
                   'checkmark-round',
                   'chevron-down',
                   'chevron-left',
                   'chevron-right',
                   'chevron-up',
                   'clipboard',
                   'clock',
                   'close',
                   'close-circled',
                   'close-round',
                   'closed-captioning',
                   'cloud',
                   'code',
                   'code-download',
                   'code-working',
                   'coffee',
                   'compass',
                   'compose',
                   'connection-bars',
                   'contrast',
                   'crop',
                   'cube',
                   'disc',
                   'document',
                   'document-text',
                   'drag',
                   'earth',
                   'easel',
                   'edit',
                   'eject',
                   'email',
                   'email-unread',
                   'eye',
                   'eye-disabled',
                   'female',
                   'filing',
                   'film-marker',
                   'fireball',
                   'flag',
                   'flame',
                   'flash',
                   'flash-off',
                   'folder',
                   'fork',
                   'fork-repo',
                   'forward',
                   'funnel',
                   'gear-a',
                   'gear-b',
                   'grid',
                   'hammer',
                   'happy',
                   'happy-outline',
                   'headphone',
                   'heart',
                   'heart-broken',
                   'help',
                   'help-buoy',
                   'help-circled',
                   'home',
                   'icecream',
                   'image',
                   'images',
                   'information',
                   'information-circled',
                   'ionic',
                   'ipad',
                   'iphone',
                   'ipod',
                   'key',
                   'knife',
                   'laptop',
                   'leaf',
                   'levels',
                   'link',
                   'load-a',
                   'load-b',
                   'load-c',
                   'load-d',
                   'location',
                   'lock-combination',
                   'locked',
                   'log-in',
                   'log-out',
                   'loop',
                   'magnet',
                   'male',
                   'man',
                   'map',
                   'medkit',
                   'merge',
                   'mic-a',
                   'mic-b',
                   'mic-c',
                   'minus',
                   'minus-circled',
                   'minus-round',
                   'monitor',
                   'more',
                   'mouse',
                   'music-note',
                   'navicon',
                   'navicon-round',
                   'navigate',
                   'network',
                   'nuclear',
                   'outlet',
                   'paintbrush',
                   'paintbucket',
                   'paper-airplane',
                   'paperclip',
                   'pause',
                   'person',
                   'person-add',
                   'person-stalker',
                   'pie-graph',
                   'pin',
                   'pinpoint',
                   'pizza',
                   'play',
                   'plus',
                   'plus-circled',
                   'plus-round',
                   'podium',
                   'pound',
                   'power',
                   'pricetag',
                   'pricetags',
                   'printer',
                   'pull-request',
                   'qr-scanner',
                   'quote',
                   'radio-waves',
                   'record',
                   'refresh',
                   'reply',
                   'reply-all',
                   'ribbon-a',
                   'ribbon-b',
                   'sad',
                   'sad-outline',
                   'scissors',
                   'search',
                   'settings',
                   'share',
                   'shuffle',
                   'skip-backward',
                   'skip-forward',
                   'social-apple',
                   'social-apple-outline',
                   'social-buffer',
                   'social-buffer-outline',
                   'social-chrome',
                   'social-chrome-outline',
                   'social-codepen',
                   'social-codepen-outline',
                   'social-css3',
                   'social-css3-outline',
                   'social-facebook',
                   'social-facebook-outline',
                   'social-github',
                   'social-github-outline',
                   'social-google',
                   'social-google-outline',
                   'social-googleplus',
                   'social-googleplus-outline',
                   'social-html5',
                   'social-html5-outline',
                   'social-javascript',
                   'social-javascript-outline',
                   'social-markdown',
                   'social-nodejs',
                   'social-octocat',
                   'social-rss',
                   'social-rss-outline',
                   'social-twitter',
                   'social-twitter-outline',
                   'social-usd',
                   'social-usd-outline',
                   'social-yen',
                   'social-yen-outline',
                   'speakerphone',
                   'speedometer',
                   'spoon',
                   'star',
                   'stats-bars',
                   'stop',
                   'thumbsdown',
                   'thumbsup',
                   'toggle',
                   'toggle-filled',
                   'transgender',
                   'trash-a',
                   'trash-b',
                   'umbrella',
                   'unlocked',
                   'upload',
                   'usb',
                   'videocamera',
                   'volume-high',
                   'volume-low',
                   'volume-medium',
                   'volume-mute',
                   'wand',
                   'waterdrop',
                   'wifi',
                   'wineglass',
                   'woman',
                   'wrench'
                ]
            };
        }
    };
</script>
<style lang="less">
    .demo-icon {
        color: rgba(0, 0, 0, 0.65);
        .icon-item {
            display: inline-block;
            text-align: center;
            margin: 0 0 20px 20px;
            p {
                font-size: 12px;
            }
            i {
                margin: 20px;
            }
        }
    }
    .demo-icon-list {
        color: rgba(0, 0, 0, 0.65);
        .icon-item {
            display: inline-block;
            width: 16.66666%;
            text-align: center;
            margin-bottom: 20px;
        }
        p {
            margin-top: 15px;
        }
    }
</style>
