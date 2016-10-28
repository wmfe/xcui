<template>
    <div class="toaster"
    :class="{
        'text-info': options.type === 'info' || options.type == undefined,
        'text-success': options.type === 'success',
        'text-danger': options.type === 'error',
        'text-warning': options.type === 'warning'
    }" v-show="show">
        <span class="toaster-icon glyphicon"
        :class="{
            'glyphicon-info-sign': options.type === 'info' || options.type == undefined,
            'glyphicon-ok': options.type === 'success',
            'glyphicon-remove': options.type === 'error',
            'glyphicon-warning-sign': options.type === 'warning'
        }"></span>
        <p class="toaster-desc">
            {{options.content}}
        </p>
    </div>
</template>

<script>
export default {
    name: 'xcui-toaster',
    props: {
        options: {
            type: Object,
            default: function () {
                return {
                };
            }
        }
    },
    data() {
        return {
            timers: [],
            show: false
        };
    },
    methods: {
        close: function () {
            const t = setTimeout(() => {
                this.show = false;
                this.options = {};
            }, this.options.duration || 2000);
            this.timers.push(t);
        }
    },
    watch: {
        options: function () {
            if (this.options.content) {
                this.show = true;
                this.timers.forEach((timer) => {
                    window.clearTimeout(timer);
                });
                this.timers = [];
                this.close();
            }
            else {
                this.show = false;
            }
        }
    }
};
</script>

<style lang="less">
  .toaster{
    width:300px;
    border-radius:5px;
    text-align:center;
    box-shadow: 0 1px 8px hsla(0,0%,39%,.2);
    padding:5px 10px;
    //color:#000;
    font-size:16px;
    z-index:1000;
    position:fixed;
    top: 150px;
    left:~"calc(50% - 150px)";
      background: #fff;
    .toaster-icon{
        vertical-align: middle;
    }
    .toaster-desc{
       display: inline-block;
       margin-left:10px;
       margin-bottom:0px;
       vertical-align: middle;
    }
  }
</style>
