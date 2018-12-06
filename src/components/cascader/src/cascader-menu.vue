<template>
  <div class="x-cascader-menu">
    <x-input
      v-if="filterable"
      v-model="inputText" 
      icon="android-close"
      @click="handleClear"
    ></x-input>
    <div class="x-cascader-loading" v-if="showLoading">
      <x-icon
        class="x-cascader-loading-icon"
        name="load-c" 
        size="24" 
        animate="spin"
      ></x-icon>
    </div>
    <div 
      class="x-cascader-empty-list"
      v-if="localList.length==0"
    >
      无匹配数据
    </div>
    <ul class="x-cascader-menu-list" ref="selectMenu">
      <cascader-menu-item
        v-for="(item, idx) in localList"
        :key="idx"
        :initItem="item"
        :ref="'item' + idx"
        :pointer="pointer"
        :keyArray="keyArray"
        @click="handleClick"
        @mouseenter="handleMouseEnter"
      ></cascader-menu-item>
    </ul>
    <x-cascader-menu
      v-if="show"
      :initData="childData" 
      :parentData="selectData"
      :pointer="getPointer"
      :keyArray="keyArray"
      :handler="handler"
      :changeOnSelect="changeOnSelect"
      :cacheMap="cacheMap"
      :localCache="localCache"
      :currentVal="currentVal"
      :filterable="filterable"
      :focus="curFocus"
      :loadData="loadData"
      @getValue="getValue"
      @saveCache="saveCache"
      @showMenu="handleShowMenu"
    ></x-cascader-menu>
  </div>
</template>
<script>
import xInput from "../../input";
import CascaderMenuItem from './cascader-menu-item.vue';

export default {
  name: 'x-cascader-menu',
  components: {
    xInput,
    CascaderMenuItem,
  },
  props: {
    initData: Array,
    parentData: Array,    // 递归组件的上一级的数据
    pointer: Number,      // 索引指针
    handler: Object,      // 异步回掉函数
    changeOnSelect: Boolean, // 是否可以点击非最后子集
    cacheMap: Object,     // 数据缓存池
    localCache: Boolean,  // 是否支持本地缓存
    currentVal: Object,   // v-model的初始值
    focus: Boolean,       // 是否聚焦触发
    filterable: Boolean,  // 是否支持filter
    keyArray: Array,      // 获取key value的key
    loadData: Function,
  },
  data() {
    return {
      show: false,
      childData: [],   // 递归的下一级的数据
      selectData: [],  // 当前已选择的全部数据
      currentData: [], // 当前已选择的当前级的数据
      showLoading: false,
      currentPointer: this.pointer,
      inputText: '',
      localList: [],
      selectList: [],  // 当前多选已经选择的数据
      curFocus: false,
    };
  },
  computed: {
    getPointer() {
      return ++this.currentPointer;
    },
  },
  created() {
    if (!this.initData.length && this.loadData) {
      this.showLoading = true;
      const p = this.pointer;
      const defaultKey = this.getDefaultKey(p - 1);
      const currentVal = this.parentData[this.parentData.length - 1][defaultKey.value];
      const item = Object.assign({}, this.parentData[this.parentData.length - 1], {
        index: p - 1,
      });
      // 如果有数据缓存
      if (this.cacheMap[p] && this.cacheMap[p][currentVal] && this.localCache) {
        const cacheData = this.cacheMap[p][currentVal];
        this.currentData = cacheData;
        this.localList = cacheData;
        this.showLoading = false;
        // 初始化选中状态
        this.initSelectData();
        return;
      }
      this.loadData(item, (res) => {
        this.showLoading = false;
        this.currentData = res;
        this.localList = this.currentData;
        // 数据缓存
        if (this.localCache) {
          this.$emit('saveCache', {
            // 缓存的key-value对象
            cacheObj: {
              [currentVal]: this.currentData,
            },
            // 缓存的层级key, 加一层这个是因为北京-北京省市的Id是相同的需要区分层级不然handler处理会出错
            key: p,
          });
        }
        // 初始化选中状态
        this.initSelectData();
      });
    }
    else {
      this.currentData = this.initData;
      this.localList = this.currentData;
      // 初始化选中状态
      this.initSelectData();
    }
  },
  methods: {
    getValue(val, index) {
      this.$emit('getValue', val, index);
    },
    saveCache(val) {
      this.$emit('saveCache', val);
    },
    handleShowMenu(val) {
      this.$emit('showMenu', val);
    },
    handleLocalSug(val) {
      if (!val) {
        this.localList = this.currentData;
        return;
      }
      const defaultKey = this.getDefaultKey();
      this.localList = this.currentData.filter(item => val ? item[defaultKey.text].indexOf(val) > -1 : true);
    },
    handleClick(data) {
      const defaultKey = this.getDefaultKey();
      if (!this.changeOnSelect) {
        if (!data[defaultKey.children]) {
          this.$emit('getValue', this.selectData, this.pointer);
        }
      }
      else {
        this.$emit('getValue', this.selectData, this.pointer);
      }
    },
    handleSelect(data) {
      if (this.findItem(data, this.selectList)) {
        this.selectList.splice(this.findItemIndex(data, this.selectList), 1);
      }
      else {
        this.selectList.push(data);
      }
      // 当点击切换的时候需要清除上一次的选中状态和数据
      const defaultKey = this.getDefaultKey();
      this.selectData = [];
      if (this.parentData) {
        this.selectData = [...this.parentData];
      }
      this.selectData.push(this.selectList);
      this.show = false;
      this.$nextTick(() => {
        this.toggleItemActiveByArr(this.selectList);
        if (!data[defaultKey.children] || !this.selectList.length) {
          this.show = false;
          return;
        }
        this.childData = data[defaultKey.children];
        this.show = true;
      });
    },
    initSelectData() {
      const valueMap = this.currentVal.valueMap;
      if (!valueMap) {
        return;
      }
      const currentData = valueMap[this.pointer];
      this.handleMouseEnter(currentData);
    },
    // 获取当前级的key value children
    getDefaultKey(index) {
      if (!index) {
        const pointer = this.keyArray.length === 1 ? 0 : this.pointer;
        return this.keyArray[pointer];
      } else {
        const pointer = this.keyArray.length === 1 ? 0 : index;
        return this.keyArray[pointer];
      }
    },
    handleMouseEnter(data, focus = true) {
      // 如果不是默认选种值是鼠标移入则取消默认展示的行为；
      const defaultFocusAction = !this.focus && this.focus !== focus;
      if (defaultFocusAction || !data) {
        return;
      }
      const defaultKey = this.getDefaultKey();
      // 当点击切换的时候需要清除上一次的选中状态和数据
      this.selectData = [];
      this.show = false;
      if (this.parentData) {
        this.selectData = [...this.parentData];
      }
      this.selectData.push(data);
      this.$nextTick(() => {
        this.toggleItemActive(data[defaultKey.value]);
        if (!data[defaultKey.children]) {
          this.show = false;
          return;
        }
        this.$emit('showMenu', this.pointer);
        this.show = true;
        this.curFocus = focus;
        this.childData = data[defaultKey.children];
      });
    },
    handleResetData() {
      this.show = false;
    },
    toggleItemActive(value) {
      const defaultKey = this.getDefaultKey();
      for (let i = 0; i < this.localList.length; i++) {
        const item = this.localList[i];
        const active = item[defaultKey.value] === value;
        this.$refs[`item${i}`][0].changeActive(active);
      }
    },
    toggleItemActiveByArr(arr) {
      for (let i = 0; i < this.localList.length; i++) {
        const item = this.localList[i];
        const active = this.findItem(item, arr);
        this.$refs[`item${i}`][0].changeActive(active);
      }
    },
    handleClear(e) {
      // this.currentVal = {};
      this.inputText = '';
    },
    findItemIndex(item, arr) {
      const defaultKey = this.getDefaultKey();
      return arr.findIndex(cur => item[defaultKey.value] === cur[defaultKey.value]);
    },
    findItem(item, arr) {
      const defaultKey = this.getDefaultKey();
      return arr.find(cur => item[defaultKey.value] === cur[defaultKey.value]);
    },
  },
  watch: {
    inputText(val) {
      this.handleLocalSug(val);
      this.show = false;
    },
  },
};
</script>