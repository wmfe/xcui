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
        <div class="btnGroup">
            <label>show：{{show}}</label>
            <button v-on:click="toggleShow" class="btn btn-primary" type="button">{{showBtn}}</button>
        </div>
        <div class="btnGroup">
            <label>type：{{type}}</label>
            <button v-on:click="type='load1'" class="btn btn-primary" type="button">load1</button>
            <button v-on:click="type='load2'" class="btn btn-primary" type="button">load2</button>
            <button v-on:click="type='load3'" class="btn btn-primary" type="button">load3</button>
        </div>
        <div class="btnGroup">
            <label>size：{{size}}</label>
            <button v-on:click="size='sm'" class="btn btn-primary" type="button">sm</button>
            <button v-on:click="size='md'" class="btn btn-primary" type="button">md</button>
            <button v-on:click="size='lg'" class="btn btn-primary" type="button">lg</button>
        </div>
        <div class="btnGroup">
            <label>color：</label>
            <input type="text" v-model="color" placeholder="支持css颜色格式">
        </div>
    </example>
</demo>


## Props
| 名字 | 类型 | 默认 | 描述 | 可选范围 | 是否必选 |
|-----|-----|-----|-----|----|----|
| show | Boolean | false | 控制显示隐藏 | true/false | 必选 |
| type | String | load1 | 控制样式选择 | load1-load4 | 可选 |
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
            type: 'load1',
            showBtn: 'hide',
            typeBtn: 'load1',
            classname: 'myclass', // 自定义类名
            color: '',
            size: ''
        };
    },
    methods: {
        toggleShow() {
            this.show = !this.show;
            this.showBtn = (this.showBtn === 'hide' ? 'show' : 'hide');
        }
    }
};
</script>

<style lang="less" scoped>
	.loadWrap
		{
            padding: 30px;
			position: relative;
		}

    .demo{
        text-align: center;
    }

    button,.btn-primary:link,.btn-primary:visited,.btn-primary:focus,.btn-primary:active{
        background: #46C3C1;
        border: 0;
        box-shadow: none;
        outline: none;
        margin-right: 30px;
    }

    .btn-primary:hover{
        background-color: #2b9d9b;
        border: 0;
    }

    p{
        text-align: left;
        text-indent: 2em;
    }

    .btnGroup{
        margin-top: 15px;
        label{
            width: 20%;
        }
    }

</style>
