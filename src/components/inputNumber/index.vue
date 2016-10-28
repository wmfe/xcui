<template>
	<div v-el:outer class="outer" :class="size">
		<div class="up-down-wrap">
			<a href="" class="up-wrap glyphicon glyphicon-chevron-up" @mouse.down="preventDefault" @click="upValue">
				<!-- <span class="up"></span> -->
			</a>
			<a href="" class="down-wrap glyphicon glyphicon-chevron-down" @mouse.down="preventDefault" @click="downValue">
				<!-- <span class="down"></span> -->
			</a>
		</div>
		<div class="input-wrap">
			<input type='text' v-el='input' class="middle" v-model="inputValue" @keyup="changeValue($event)" :placeholder="textTips"
			:disabled ="isDisable" :class="className"/>
		</div>
	</div>
</template>
<script>
export default {
    name: 'xcui-inputnumber',
    props: {
        maxValue: {
            type: Number
        },
        minValue: {
            type: Number
        },
        step: {
            type: Number,
            default: 1
        },
        isDisable: {
            type: Boolean,
            default: false
        },
        className: {
            type: String,
            default: ''
        },
        textTips: {
            type: String,
            default: '请输入范围内整数'
        },
        size: {
            type: String,
            default: 'large'
        },
        inputValue: {
            type: Number
        }
    },
    data() {
        return {
            // inputValue: this.defaultValue
        };
    },
    methods: {
        changeValue(event) {
            if (this.isAvailbale(event.keyCode) && this.isNumber(this.inputValue + '')) {
                this.inputValue = this.limitValue(this.inputValue) + '';
            }
            else {
                this.inputValue = '';
            }
        },
        limitValue(currentNum) {
            let result = currentNum;
            if (currentNum !== '') {
                if (this.maxValue !== undefined && currentNum > this.maxValue) {
                    result = this.maxValue;
                }
                if (this.minValue !== undefined && currentNum < this.minValue) {
                    result = this.minValue;
                }
            }
            return result;
        },
        isAvailbale(keyCode) {
            // 数字
            if (keyCode >= 48 && keyCode <= 57) {
                return true;
            }
            // 小数字键盘
            if (keyCode >= 96 && keyCode <= 105) {
                return true;
            }
            // Backspace, del, 左右方向键,负号
            if (keyCode === 8 || keyCode === 46 || keyCode === 37 || keyCode === 39 || keyCode === 189) {
                return true;
            }
            return false;
        },
        isNumber(num) {
            let result = /^(-)?\d*$/.test(num);
            return result;
        },
        upValue(e) {
            if (this.isNumber(this.inputValue)) {
                let addValue = window.Number(this.inputValue) + this.step;
                addValue = this.limitValue(addValue);
                this.inputValue = addValue + '';
            }
            e.preventDefault();
        },
        downValue(e) {
            if (this.isNumber(this.inputValue)) {
                let deliValue = window.Number(this.inputValue) - this.step;
                deliValue = this.limitValue(deliValue);
                this.inputValue = deliValue + '';
            }
            e.preventDefault();
        },
        preventDefault(e) {
            e.preventDefault();
        }
    },
    ready() {
    }
};
</script>
<style lang="less">

.outer{
    overflow: hidden;
    display: inline-block;
    border: 1px solid #c1c1c1;
    border-radius: 5px;
    &:hover{
        border: 1px solid #2db7f5;
        .up-down-wrap{
            border-left: 1px solid #c1c1c1;
            .up-wrap{
                color: #c1c1c1;
                border-bottom: 1px solid #c1c1c1;
                border-radius: 1px;
            }
            .down-wrap{
                color: #c1c1c1;
            }
        }
    }
    .input-wrap{
        float: right;
        input{
            padding-left: 5px;
            float: right;
            background-color: #ffffff;
            border: none;
            padding-right: 20px;
            &:focus{
                outline: none !important;
            }
        }
    }
    .up-down-wrap{
        width: 20px;
        margin-left: -22px;
        border: none;
        text-align: center;
        float: right;
        position: relative;

        .up-wrap{
            border: none;
            display: block;
        }
        .down-wrap{
            border: none;
            display: block;
        }
        a:link,a:visited{
            color: transparent;
            text-decoration: none;
        }
        a:hover,a:active{
            color: #2db7f5 !important;
            text-decoration: none;
        }
    }
}
.large{
    height: 45px !important;

    .input-wrap{
        input{
            height: 40px !important;
        }
    }
    .up-down-wrap{
        height: 100% !important;
        .up-wrap{
            margin-top: 4px !important;
        }
        .down-wrap{
            margin-top: 4px !important;
        }
    }
}
.normal{
    height: 100% !important;
    vertical-align: middle;
    .input-wrap{
        input{
            height: 30px !important;

        }
    }
    .up-down-wrap{
        height: 30px !important;

        .up-wrap{
            font-size: 1px !important;
            margin: 0 !important;
        }
        .down-wrap{
            font-size: 1px !important;
            margin: 0 !important;
        }
    }
}

</style>
