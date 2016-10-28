<template lang="md">
  ## Loading 加载组件

    1.提供3种css加载样式。
    2.loading需要放在一个拥有定位属性的容器，组件蒙层大小为父元素大小。
    3.css动画颜色可定制。
    4.提供三种可选尺寸。
    5.可通过自定义类名增加特殊定制。

<demo>
    <example title="加载组件">
      <div class="loadWrap">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <Loading :show="show"
                   :type="type"
                   :color="color"
                   :size="size"
                   :classname="classname"></Loading>
      </div>
        <div class="btnGroup clearfix">
            <label class="control-label col-md-4">show：</label>
            <div class="col-md-6">
                <button class="btn btn-primary" @click="toogleShow">{{showBtn}}</button>
            </div>
        </div>
        <div class="btnGroup clearfix">
            <label  class="control-label col-md-4">type：</label>
            <div class="col-md-6">
                <select class="form-control" v-model="type">
                    <option>load1</option>
                    <option>load2</option>
                    <option>load3</option>
                </select>
            </div>
        </div>
        <div class="btnGroup clearfix">
            <label  class="control-label col-md-4">size：</label>
            <div class="col-md-6">
                <select class="form-control" v-model="size">
                    <option>sm</option>
                    <option>md</option>
                    <option>lg</option>
                </select>
            </div>
        </div>
        <div class="btnGroup clearfix">
            <label class="control-label col-md-4">color：</label>
            <div class="col-md-6">
                <input class="form-control" type="text" v-model="color" placeholder="支持css颜色格式">
            </div>
        </div>
    </example>
</demo>


## Props
| 名字 | 类型 | 默认 | 描述 | 可选范围 | 是否必选 |
|-----|-----|-----|-----|----|----|
| show | Boolean | false | 控制显示隐藏 | true/false | 必选 |
| type | String | load2 | 控制样式选择 | load1-load3 | 可选 |
| size | String | md | 控制大小 | sm/md/lg | 可选 |
| color | String | 无 | 控制颜色 | css色值 | 可选 |
| classname | String | 无 | 自定义类名 |  | 可选 |


</template>

<script>
import Loading from '../components/loading';
export default {
    components: {
        Loading
    },
    data() {
        return {
            show: true,
            type: 'load2',
            showBtn: 'hide',
            classname: 'myclass', // 自定义类名
            color: '',
            size: 'md'
        };
    },
    methods: {
        toogleShow() {
            this.show = !this.show;
            this.showBtn = this.show ? 'hide' : 'show';
        }
    }
};
</script>

<style lang="less">
	.loadWrap
		{
            padding: 30px;
			position: relative;
		}

    p{
        text-align: left;
        text-indent: 2em;
    }

    .btnGroup{
        margin-top: 15px;
        label{
            width: 10%;
            position: relative;
            top: 5px;
            text-align: right;
        }
    }

    select,option,button{
        outline: none;
    }

</style>
