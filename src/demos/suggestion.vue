<template lang="md">

  # Suggestion 自动完成/建议

  ## 使用场景
  用户输入相关词语时进行输入建议(suggestions), 自动完成

  # Demo

<demo>
<example title="string数组 sugs:">
  <table class="table" style="width:400px">
    <thead>
        <tr>
            <th>dataText</th>
            <th>dataValue</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>constellation : {{constellation}}</td>
            <td>constellationValue : {{constellationValue}}</td>
        </tr>
    </tbody>
  </table>
  <div style="width:200px">
      <xcui-suggestion
        id="constellation"
        name="constellation"
        placeholder="请输入星座"
        :data-text.sync="constellation"
        :data-value.sync="constellationValue"
        :suggestions="constellationSuggestions">
      </xcui-suggestion>
  </div>
</example>
    <example title="object数组 sugs:">
        <table class="table" style="width:400px">
              <thead>
                  <tr>
                      <th>dataText</th>
                      <th>dataValue</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>cityName : {{cityName}}</td>
                      <td>cityId : {{cityId}}</td>
                  </tr>
              </tbody>
          </table>
          <div style="width:200px">
              <xcui-suggestion id="city" name="city" placeholder="请输入城市" :data-text.sync="cityName" :data-value.sync="cityId" :suggestions="citySuggestions">
              </xcui-suggestion>
          </div>
    </example>
    <example title="远程sug，string数组 sugs:">
      <table class="table" style="width:400px">
          <thead>
              <tr>
                  <th>dataText</th>
                  <th>dataValue</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>requestWord : {{requestWord}}</td>
                  <td> </td>
              </tr>
          </tbody>
      </table>
      <div style="width:200px">
              <xcui-suggestion placeholder=""
                          :check=false
                          :data-text.sync="requestWord"
                          :suggestions="remoteSug"
                          :input-callback="request">>
              </xcui-suggestion>
      </div>
    </example>
    <example title="远程sug，object数组 sugs:">
        <div class="block-item">
          <table class="table table-striped table-bordered" style="width:400px">
              <thead>
                  <tr>
                      <th>dataText</th>
                      <th>dataValue</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>requestWord2 : {{requestWord2}}</td>
                      <td>requestValue2 : {{requestValue2}}</td>
                  </tr>
              </tbody>
          </table>
          <div style="width:200px">
                  <xcui-suggestion placeholder=""
                              :check=false
                              :data-text.sync="requestWord2"
                              :data-value.sync="requestValue2"
                              :suggestions="remoteSug2"
                              :input-callback="request2">
                  </xcui-suggestion>
          </div>
        </div>
    </example>
</demo>



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
|dataText|String|是 |sug文本,展示给用户的sug值|
|dataValue|String or Object|是 |所选sug项|
|suggestions|Array| |sug list|
|check|Boolean@default:false| |是否要做sug匹配，如果想用本组件实现远程sug，设为false|
|inputCallback|Function| |input事件回调，可以本时机触发远程sug异步请求|


</template>

<script>

  export default {
      data() {
          return {
              cityName: '',
              cityId: '',
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
              constellation: '',
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
              requestWord: '',
              remoteSug: [],
              remoteUrl: 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?cb=window.bdsug.sug&wd=',
              requestWord2: 'w',
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
              let url = this.remoteUrl + this.requestWord;
              let script = document.createElement('script');
              script.src = url;
              document.body.appendChild(script);
              script.onload = function (res) {
                  document.body.removeChild(script);
              };
          },
          request2() {
              let url = this.remoteUrl2 + this.requestWord2;
              let script = document.createElement('script');
              script.src = url;
              document.body.appendChild(script);
              script.onload = function (res) {
                  document.body.removeChild(script);
              };
          }
      },
      ready() {
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
