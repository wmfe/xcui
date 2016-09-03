<template>
	<div class="xcui-tag {{disabled?'xcui-disabled':''}}" @click="onClick" v-if="showTag" >
        <div class="{{classname!='' ? classname : ''}}" >
		<span class="xcui-tag-text"><slot></slot>{{text}}<span>
        <i class="xcui-cross" v-if="closeable" @click.stop="onCloseClick"></i>
        </div>
	</div>
</template>

<script>
export default {
    name: 'xcui-tag',
    props: {
        text: {
            type: String,
            default: ''
        },
        closeable: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        showTag: {
            type: Boolean,
            default: true
        },
        classname: {
            type: String,
            default: ''
        },
        key: {
            type: String,
            default: ''
        },
        aftercloseisshow: {
            type: Boolean,
            default: false,
            twoway: true
        }
    },
    methods: {
        onCloseClick() {
            this.$emit('close');
            if (this.aftercloseisshow === false) {
                this.showTag = false;
            };
        },
        onClick() {
            this.$emit('click');
        }
    }
};
</script>

<style lang="less" scoped>
	.xcui-tag{
	    display: inline-block;
	    line-height: 25px;
	    height: 27px;
	    border-radius: 6px;
	    border: 1px solid #e9e9e9;
	    background: #fff;
	    font-size: 12px;
	    vertical-align: middle;
	    opacity: 1;
	    overflow: hidden;
	    margin: 2px 4px 2px 0;
	    cursor: pointer;

        .xcui-tag-text{
            padding:0 8px;
        }
	}

    .xcui-disabled{
        background:#f5f5f5;
        cursor: default;
        opacity: .85;
    }


	.xcui-tag:hover{
		opacity: .85
	}
    .xcui-cross{
        display: inline-block;
        font-style: normal;
        font-size: 17px;
        zoom:1;
        cursor: pointer;
        font-weight: 700;
        margin-left: 3px;
        color: #666;
        opacity: .66
    }

    .xcui-cross:before{
        content: "×";
    }
</style>