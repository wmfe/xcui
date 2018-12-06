<template>
  <div
    class="x-cascader"
    v-clickoutside="close"
    :value="value"
  >
    <x-input
      v-model="inputText" 
      icon="android-close"
      :disabled="disabled" 
      :placeholder="placeholder"
      :readonly="true"
      @click="handleClear"
      @focus="handleFocus"
    ></x-input>
    <transition name="x-slide-up">
      <div class="x-cascader-menu-wrapper" v-if="show">
        <cascader-menu
          v-if="localList.length > 0"
          :currentVal="currentVal"
          :keyArray="keyArray"
          :initData="localList"
          :pointer="pointer"
          :handler="handler"
          :changeOnSelect="changeOnSelect"
          :cacheMap="cacheMap"
          :localCache="localCache"
          :filterable="filterable"
          :focus="focus"
          :loadData="loadData"
          @getValue="getValue"
          @saveCache="saveCache"
        ></cascader-menu>
        <div
          class="x-cascader-empty" 
          v-if="localList.length == 0"
        >无匹配数据</div>
      </div>
    </transition>
</div>
</template>
<script>
import xInput from "../../input";
import CascaderMenu from './cascader-menu.vue';
import Clickoutside from "xcui/src/utils/clickoutside";

export default {
  name: 'xCascader',
  components: {
    CascaderMenu,
    xInput,
  },
  directives: {
    Clickoutside,
  },
  props: {
    initData: Array,
    value: Object,
    disabled: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '',
    },
    // 获取key value的参数key
    keyArray: {
      type: Array,
      default() {
        return [{
          value: 'value',
          text: 'text',
          children: 'children',
        }];
      },
    },
    // 异步获取数据的回调函数
    handler: {
      type: Object,
      default() {
        return {};
      },
    },
    // 是否允许点击每一级
    changeOnSelect: {
      type: Boolean,
      default: false,
    },
    // 是否支持本地缓存
    localCache: {
      type: Boolean,
      default: true,
    },
    // 分隔符
    separator: {
      type: String,
      default: '/',
    },
    // 是否支持filter
    filterable: {
      type: Boolean,
      default: false,
    },
    loadData: Function,
  },
  data() {
    return {
      currentVal: this.value,
      localList: [],
      show: false,
      inputText: '',
      pointer: 0,
      cacheMap: {},
      focus: false,
    };
  },
  mounted() {
    this.localList = this.initData;
  },
  methods: {
    saveCache(cacheData) {
      if (!this.cacheMap[cacheData.key]) {
        this.cacheMap[cacheData.key] = {};
      }
      this.cacheMap[cacheData.key] = Object.assign({},
        this.cacheMap[cacheData.key],
        cacheData.cacheObj,
      );
    },
    getValue(value, index) {
      const defaultKey = this.getDefaultKey(index);
      this.show = false;
      this.currentVal = {
        text: this.handleSelectData(value, defaultKey),
        value: value[value.length - 1][defaultKey.value],
        valueMap: value,
      };
      this.inputText = this.currentVal.text;
      this.$emit('change', this.currentVal);
    },
    // 获取当前级的key value children
    getDefaultKey(index) {
      const pointer = this.keyArray.length === 1 ? 0 : index;
      return this.keyArray[pointer];
    },
    showMenu() {
      this.show = !this.show;
    },
    close() {
      this.show = false;
    },
    handleSelectData(data) {
      const tmpData = data.slice(0);
      const newData = tmpData.map((item, idx) => {
        const currentKey = this.keyArray.length === 1 ? this.keyArray[0] : this.keyArray[idx];
        return item[currentKey.text];
      });
      return newData.join(this.separator);
    },
    handleFocus() {
      this.focus = true;
      this.showMenu();
    },
    handleClear() {
      this.currentVal = {};
      this.inputText = '';
      this.show = false;
    },
  },
  watch: {
    initData(val) {
      this.localList = val;
    },
    value(val) {
      this.currentVal = val;
      this.inputText = val.text;
    },
    currentVal(val) {
      this.$emit('input', val);
    },
  },
};
</script>