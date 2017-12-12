<template lang="md">
# Suggestion 输入建议

用户在输入框中输入文字时，展示相关输入建议。


## 基本使用：使用文本数组的数据源

::: demo 基本用法，建议列表为文本格式。设置`v-model`和`suggestion`属性即可。可以通过键盘的`上下方向键`和`回车键`来控制选择。清除按钮默认展示，可通过`allow-clear`属性将其关闭。

```html

<tpl>
    <x-suggestion v-model="state1" placeholder="请输入星座" :suggestions="sug1"></x-suggestion>
    <p style="margin-top:15px;">选中的值：{{state1}}</p>
</tpl>

<script>
  export default {
      data() {
          return {
              state1: {},
              sug1: ['水瓶','双鱼','白羊','金牛','双子','巨蟹','狮子','处女','天秤','天蝎','射手','魔羯']
          }
      }
  }
</script>
```

:::

## 使用Object数组格式的数据源

::: demo 支持格式为`[{text:'text', value:'value'}, ...]` 的数据源。

```html

<tpl>
    <x-suggestion v-model="state2" placeholder="请输入城市" :suggestions="sug2"></x-suggestion>
    <p style="margin-top:15px;">选中的值：{{state2}}</p>
</tpl>

<script>
    export default {
        data() {
            return {
                state2: {},
                sug2: [
                    {text: '北京', value: '131'},
                    {text: '上海', value: '289'},
                    {text: '海口', value: '125'},
                    {text: '三亚', value: '121'},
                    {text: '杭州', value: '179'},
                    {text: '成都', value: '75'},
                    {text: '贵阳', value: '146'}
                ]
            }
        }
    }
</script>

```

:::

## 使用远程（请求）数据的数据源

::: demo 通过使用`input-callback`属性定义相关方法, 和`v-model` 绑定变量的`text`值，可以使用远程数据（例如，用`text`作为请求参数）。本例模拟远程数据。

```html

<tpl>
    <x-suggestion v-model="state3" placeholder="请随意输入" :suggestions="sug3" :input-callback="request" @change="handleChange"></x-suggestion>
    <p style="margin-top:15px;">选中的值：{{state3}}</p>
</tpl>

<script>
    export default {
        data() {
            return {
                state3: {},
                sug3: []
            }
        },
        methods: {
            request() {
                const v = this.state3.text;
                this.sug3 = !v ? [] : [
                    {text: v, value: 1},
                    {text: v + v, value: 2},
                    {text: v + v + v, value: 3},
                    {text: v + v + v + v, value: 4}
                ];
            },
            handleChange() {

            }
        }
    }
</script>

```

:::

## Props
| 名字 | 类型 | 默认 | 描述 | 是否必选 |可选值|
|-----|-----|-----|-----|-----|-----|-----|
|value|Object|无|和`v-model`的绑定值|必选||
|placeholder|String|无|原生属性，输入框默认文本，用于提示|可选||
|disabled|Boolean|false|是否禁用|可选||
|suggestions|Array|[]|输入建议的数据源|必选||
|inputCallback|Function|无|输入时的回调函数, 可用于触发远程请求|可选||
|wait|Number|500|触发远程请求时的防抖动延迟时间|可选||
|allowClear|Boolean|true|是否允许出现清除图标|可选|true, false|
|matchInput|Boolean|true|是否根据输入在客户端匹配建议列表|可选|true, false|
|matchCase|Boolean|false|是否严格匹配输入大小写，matchInput为true时有效|可选|true, false|

## Events

|事件名|说明|返回值|设置属性|
|---|---|---|---|
|change|选中值改变时触发|当前选中值|`@change`|

</template>

<script>
  import '#/suggestion.less';
  export default {
      data() {
          return {
              showHello: true,
              state1: {},
              sug1: [
                  '水瓶',
                  '双鱼',
                  '白羊',
                  '金牛',
                  '双子',
                  '巨蟹',
                  '狮子',
                  '处女',
                  '天秤',
                  '天蝎',
                  '射手',
                  '魔羯'
              ],
              state2: {},
              sug2: [
                  {
                      text: '北京',
                      value: '131'
                  },
                  {
                      text: '上海',
                      value: '289'
                  },
                  {
                      text: '海口',
                      value: '125'
                  },
                  {
                      text: '三亚',
                      value: '121'
                  },
                  {
                      text: '杭州',
                      value: '179'
                  },
                  {
                      text: '成都',
                      value: '75'
                  },
                  {
                      text: '贵阳',
                      value: '146'
                  }
              ],
              state3: {},
              sug3: [],
          };
      },
      watch: {
      },
      methods: {
          request() {
//              console.log('request');
              const v = this.state3.text;
              this.sug3 = !v ? [] : [
                  {text: v, value: 1},
                  {text: v + v, value: 2},
                  {text: v + v + v, value: 3},
                  {text: v + v + v + v, value: 4}
              ];
          },
          handleChange(val){
//              console.log('change',val)
          }
      },
      mounted() {
          let me = this;
          window.bdsug = {
              sug(res) {
                  me.setSug(res.s);
              },
              sug2(res) {
                  me.setSug2(res.s);
              }
          };
      }
  };
</script>

