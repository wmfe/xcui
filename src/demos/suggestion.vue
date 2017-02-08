<template lang="md">

  # Suggestion 自动完成/建议

  ## 使用场景
  用户输入相关词语时进行输入建议(suggestions), 自动完成

  # Demo

<!-- <demo>
<example title="string数组 sugs:">
  <div>constellation : {{constellation}}</div>
  <div style="width:200px">
    <xcui-suggestion
      v-model="constellation"
      id="constellation"
      name="constellation"
      placeholder="请输入星座"
      :suggestions="constellationSuggestions">
    </xcui-suggestion>
  </div>
</example>
<example title="object数组 sugs:">
    <div>city: {{city}}</div>
    <div style="width:200px">
        <xcui-suggestion v-model="city" id="city" name="city" placeholder="请输入城市" :suggestions="citySuggestions">
        </xcui-suggestion>
    </div>
</example>
<example title="远程sug，string数组 sugs:">
  <div>requestWord: {{requestWord}}</div>
  <div style="width:200px">
      <xcui-suggestion placeholder=""
                  :check=false
                  v-model="requestWord"
                  :suggestions="remoteSug"
                  :input-callback="request">>
      </xcui-suggestion>
  </div>
</example>
<example title="远程sug，object数组 sugs:">
    <div>requestWord2: {{requestWord2}}</div>
    <div style="width:200px">
            <xcui-suggestion placeholder=""
                :check=false
                v-model="requestWord2"
                :suggestions="remoteSug2"
                :input-callback="request2">
            </xcui-suggestion>
    </div>
</example>
</demo> -->

## 数据格式支持

组件支持两种`数据格式`：
- Object:

```
[{
    text:"北京",
    value:"103"
},{
    text:"上海",
    value:"131"
},
    ……
]
```
- Array:

```
["北京","上海",……]
```

## 参数说明
|参数|类型|双向|说明|
| ------------- | ------------- | ----- | ----- |
|id|String|   |input的id|
|name|String|   |input的name属性|
|className|String| |类名|
|disabled|Boolean| |input的disabled属性|
|placeholder|String| |input提示|
|v-model|Object|是 | 双向绑定，输出如下格式：{text:[String], value:[String]}|
|suggestions|Array| |sug list|
|check|Boolean@default:false| |是否要做sug匹配，如果想用本组件实现远程sug，设为false|
|inputCallback|Function| |input事件回调，可以本时机触发远程sug异步请求|

</template>

<script>
  export default {
      data() {
          return {
              city: {},
              citySuggestions: [
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
              constellation: {},
              constellationValue: '',
              constellationSuggestions: [
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
              requestWord: {},
              remoteSug: [],
              remoteUrl: 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?cb=window.bdsug.sug&wd=',
              requestWord2: {},
              requestValue2: '',
              remoteSug2: [],
              remoteUrl2: 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?cb=window.bdsug.sug2&wd='
          };
      },
      watch: {
      },
      methods: {
          setSug(s) {
              this.remoteSug = s;
          },
          setSug2(s) {
              this.remoteSug2 = s.map((item, index) => {
                  return {
                      text: item,
                      value: index
                  };
              });
          },
          request() {
              let url = this.remoteUrl + this.requestWord.text;
              let script = document.createElement('script');
              script.src = url;
              document.body.appendChild(script);
              script.onload = function (res) {
                  document.body.removeChild(script);
              };
          },
          request2() {
              let url = this.remoteUrl2 + this.requestWord2.text;
              let script = document.createElement('script');
              script.src = url;
              document.body.appendChild(script);
              script.onload = function (res) {
                  document.body.removeChild(script);
              };
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

<style lang="less" scoped>
    .block-item {
        margin:0 30px 50px;
        float:left;
    }
</style>
