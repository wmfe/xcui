<template lang="md">
# Cascader 级联选择器

当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。

## 基本用法

::: demo 基本用法。支持格式为[{text:'text', value:'value', children:[...]}, ...] 的数据源。

```html

<tpl>
    <div style="width: 180px;">
        <x-cascader
          v-model="model1"
          placeholder="请选择"
          :initData="data1" 
        ></x-cascader>
    </div>
    <p style="margin-top: 15px;">选中的值：text: {{model1.text}}, value: {{model1.value}}</p>
</tpl>

<script>
  export default {
    data() {
      return {
        model1: {},
        data1: [{
          text: '北京',
          value: '1',
          children: [{
            text: '北京市',
            value: '11',
            children: [{ text: '朝阳区', value: '111' }, { text: '海淀区', value: '112' }],
          }],
        }, {
          text: '天津',
          value: '2',
          children: [{
            text: '天津市',
            value: '21',
            children: [{ text: '南开区', value: '211' }, { text: '西青区', value: '212' }],
          }],
        }, {
          text: '上海',
          value: '3',
          children: [{
            text: '上海市',
            value: '31',
          }],
        }],
      }
    }
  }
</script>
```
:::

## 禁用状态

::: demo 通过设置`disable`来实现禁用状态。

```html

<tpl>
    <div style="width: 180px;">
        <x-cascader
          v-model="model1"
          placeholder="请选择"
          :initData="data1" 
          :disabled="true"
        ></x-cascader>
    </div>
    <p style="margin-top: 15px;">选中的值：text: {{model1.text}}, value: {{model1.value}}</p>
</tpl>

<script>
  export default {
    data() {
      return {
        model1: {},
        data1: [{
          text: '北京',
          value: '1',
          children: [{
            text: '北京市',
            value: '11',
            children: [{ text: '朝阳区', value: '111' }, { text: '海淀区', value: '112' }],
          }],
        }, {
          text: '天津',
          value: '2',
          children: [{
            text: '天津市',
            value: '21',
            children: [{ text: '南开区', value: '211' }, { text: '西青区', value: '212' }],
          }],
        }, {
          text: '上海',
          value: '3',
          children: [{
            text: '上海市',
            value: '31',
          }],
        }],
      }
    }
  }
</script>
```

:::

## 自定义数据参数

::: demo 通过设置`keyArray`来实现自定义参数。

```html

<tpl>
    <div style="width: 180px;">
        <x-cascader
          v-model="model3"
          placeholder="请选择"
          :initData="data3"
          :keyArray="keyArray"
        ></x-cascader>
    </div>
    <p style="margin-top: 15px;">选中的值：text: {{model3.text}}, value: {{model3.value}}</p>
</tpl>

<script>
  export default {
    data() {
      return {
        model3: {},
        keyArray: [{
          text: 'province',
          value: 'province_id',
          children: 'city_list',
        }, {
          text: 'city',
          value: 'city_id',
          children: 'area_list',
        }, {
          text: 'area',
          value: 'area_id',
        }],
        data3: [{
          province: '北京',
          province_id: '1',
          city_list: [{
            city: '北京市',
            city_id: '11',
            area_list: [{
              area: '朝阳区',
              area_id: '111',
            }, {
              area: '海淀区',
              area_id: '112',
            }],
          }],
        }, {
          province: '天津',
          province_id: '2',
          city_list: [{
            city: '天津市',
            city_id: '21',
            area_list: [{
              area: '南开区',
              area_id: '211',
            }, {
              area: '西青区',
              area_id: '212',
            }],
          }],
        }, {
          province: '上海',
          province_id: '3',
          city_list: [{
            city: '上海市',
            city_id: '31',
          }],
        }],
      }
    }
  }
</script>
```

:::

## 点击任意层级

::: demo 通过设置`changeOnSelect`支持选择任意层级侧数据。

```html

<tpl>
    <div style="width: 180px;">
        <x-cascader
          v-model="model1" 
          placeholder="请选择" 
          :initData="data1" 
          :changeOnSelect="true"
        ></x-cascader>
    </div>
    <p style="margin-top: 15px;">选中的值：text: {{model1.text}}, value: {{model1.value}}</p>
</tpl>

<script>
  export default {
    data() {
      return {
        model1: {},
        data1: [{
          text: '北京',
          value: '1',
          children: [{
            text: '北京市',
            value: '11',
            children: [{ text: '朝阳区', value: '111' }, { text: '海淀区', value: '112' }],
          }],
        }, {
          text: '天津',
          value: '2',
          children: [{
            text: '天津市',
            value: '21',
            children: [{ text: '南开区', value: '211' }, { text: '西青区', value: '212' }],
          }],
        }, {
          text: '上海',
          value: '3',
          children: [{
            text: '上海市',
            value: '31',
          }],
        }],
      }
    }
  }
</script>
```

:::

## 支持搜索

::: demo 基本用法。通过设置`filterable`，可以快捷地搜索选项并选择。

```html

<tpl>
    <div style="width: 180px;">
        <x-cascader
          v-model="model1" 
          placeholder="请选择" 
          :initData="data1" 
          :filterable="true"
        ></x-cascader>
    </div>
    <p style="margin-top: 15px;">选中的值：text: {{model1.text}}, value: {{model1.value}}</p>
</tpl>

<script>
  export default {
    data() {
      return {
        model1: {},
        data1: [{
          text: '北京',
          value: '1',
          children: [{
            text: '北京市',
            value: '11',
            children: [{ text: '朝阳区', value: '111' }, { text: '海淀区', value: '112' }],
          }],
        }, {
          text: '天津',
          value: '2',
          children: [{
            text: '天津市',
            value: '21',
            children: [{ text: '南开区', value: '211' }, { text: '西青区', value: '212' }],
          }],
        }, {
          text: '上海',
          value: '3',
          children: [{
            text: '上海市',
            value: '31',
          }],
        }],
      }
    }
  }
</script>
```

:::

## 异步数据

::: demo 通过定义`keyAttr`来声明每一级关键字的索引。声明`handler`对象来确定每一级请求的方式，其中对象的键为请求参数的key，`callback`为一个返回`Promise`对象的回调函数，`handler`为处理回调函数的控制函数 。默认开启异步缓存。

```html

<tpl>
    <div style="width: 180px;">
        <x-cascader
          v-model="model2" 
          placeholder="请选择"
          :initData="data2" 
          :loadData="loadData"
        ></x-cascader>
    </div>
    <p style="margin-top: 15px;">选中的值：text: {{model2.text}}, value: {{model2.value}}</p>
</tpl>

<script>
  export default {
    data() {
      return {
        model2: {},
        data2: [],
      },
    },
    mounted() {
      this.initPosition();
    },
    methods: {
      position(params) {
        const type = params.index;

        const mock = {
          default: [{
            text: '北京',
            value: '1',
          }],
          province: [{
            text: '北京市',
            value: '2',
          }],
          city: [{
            text: '朝阳区',
            value: '111',
          }, {
            text: '海淀区',
            value: '112',
          }],
        }

        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(mock[type]);
          }, 500);
        })
      },
      initPosition() {
        this.position({
          default: '1',
        }).then((data) => {
          this.data2 = data.map(item => ({
            text: item.text,
            value: item.value,
            children: [],
          }));
        });
      },
      loadData(item, callback) {
        this.position({
          index: item.index,
        }).then((data) => {
          callback(data);
        });
      },
    },
  }
</script>
```

:::

## Props

| 名字 | 类型 | 默认 | 描述 | 是否必选 |可选值|
|-----|-----|-----|-----|----|----|----|
|disabled|Boolean|false|是否禁用|否|true, false|
|placeholder|String|无|文本框提示|否|任意字符串|
|changeOnSelect|Boolean|false|是否支持点击任意层级|否|true, false|
|separator|String|/|数据展示的分隔符|否|任意字符串|
|keyArray|Array|`[{text: 'text', value: 'value', children: 'children'}]`|每一层数据的参数名称，需配置每一层级的参数，如果全部层级的参数相同则只配置第一层即可|否|详情见示例|
|filterable|Boolean|false|是否支持筛选|否|true, false|
|loadData|Function|无|异步请求的处理函数。其中包含两个参数，第一个参数为包含当前选中值的和一个当前层级索引的对象；第二个参数为一个回调函数，用于数据获取后的处理|否|详情见示例|
|localCache|Boolean|true|配合异步请求，是否支持数据缓存|否|true, false|

## Events

| 事件名 | 说明	 | 返回值	 | 设置属性 |
|-----|-----|-----|-----|
|change|选中值改变时触发|当前选中值|`@change`|

</template>

<script>
    import '#/cascader.less';
import { setTimeout } from 'timers';
    export default{
        data() {
            return {
              model1: {},
              data1: [{
                text: '北京',
                value: '1',
                children: [{
                  text: '北京市',
                  value: '11',
                  children: [{
                    text: '朝阳区',
                    value: '111',
                  }, {
                    text: '海淀区',
                    value: '112',
                  }],
                }],
              }, {
                text: '天津',
                value: '2',
                children: [{
                  text: '天津市',
                  value: '21',
                  children: [{
                    text: '南开区',
                    value: '211',
                  }, {
                    text: '西青区',
                    value: '212',
                  }],
                }],
              }, {
                text: '上海',
                value: '3',
                children: [{
                  text: '上海市',
                  value: '31',
                }],
              }],
              model3: {},
              keyArray: [{
                text: 'province',
                value: 'province_id',
                children: 'city_list',
              }, {
                text: 'city',
                value: 'city_id',
                children: 'area_list',
              }, {
                text: 'area',
                value: 'area_id',
              }],
              data3: [{
                province: '北京',
                province_id: '1',
                city_list: [{
                  city: '北京市',
                  city_id: '11',
                  area_list: [{
                    area: '朝阳区',
                    area_id: '111',
                  }, {
                    area: '海淀区',
                    area_id: '112',
                  }],
                }],
              }, {
                province: '天津',
                province_id: '2',
                city_list: [{
                  city: '天津市',
                  city_id: '21',
                  area_list: [{
                    area: '南开区',
                    area_id: '211',
                  }, {
                    area: '西青区',
                    area_id: '212',
                  }],
                }],
              }, {
                province: '上海',
                province_id: '3',
                city_list: [{
                  city: '上海市',
                  city_id: '31',
                }],
              }],
              model2: {},
              data2: [],
            };
        },
        mounted() {
          this.initPosition();
        },
        methods: {
          position(params) {
            const type = params.index;

            const mock = {
              default: [{
                text: '北京',
                value: '1',
              }],
              0: [{
                text: '北京市',
                value: '11',
                children: [],
              }],
              1: [{
                text: '朝阳区',
                value: '111',
              }, {
                text: '海淀区',
                value: '112',
              }],
            }

            return new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve(mock[type]);
            }, 500);
            })
          },
          initPosition() {
            this.position({
              index: 'default',
            }).then((data) => {
              this.data2 = data.map(item => ({
                text: item.text,
                value: item.value,
                children: [],
              }));
            });
          },
          loadData(item, callback) {
            this.position({
              index: item.index,
            }).then((data) => {
              callback(data);
            });
          },
        },
    };
</script>
