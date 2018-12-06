<template>
    <div class="x-suggestion" v-clickoutside="handleClose">
        <x-input
            ref="xInput"
            :disabled="disabled"
            :placeholder="placeholder"
		        :icon="icon"
            :icon-click="iconClick"
            v-model="inputText"
            @focus="handleFocus"
			      @blur="handleBlur"
            @keydown.up.native.prevent="changeCurrent(-1)"
            @keydown.down.native.prevent="changeCurrent(1)"
            @keyup.enter.stop.native="handleEnter()"
				></x-input>
        <x-suggestion-dropdown
					ref="popper"
					:suggestions="list"
				></x-suggestion-dropdown>
    </div>
</template>

<script>
import xInput from "../../input";
import xSuggestionDropdown from "./suggestion-dropdown.vue";
import Clickoutside from "xcui/src/utils/clickoutside";
import Emitter from "xcui/src/utils/mixins/emitter";

export default {
  name: "xSuggestion",
  componentName: "xSuggestion",
  mixins: [Emitter],
  directives: {
    Clickoutside
  },
  components: {
    xInput,
    xSuggestionDropdown
  },
  props: {
    id: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ""
    },
    // 初始化sug数组
    suggestions: {
      type: Array,
      default() {
        return [];
      }
    },
    // sug回掉
    inputCallback: {
      type: Function
    },
    // 和v-model绑定的值
    value: {
      type: Object,
      default() {
        return {
          text: "",
          value: ""
        };
      }
    },
    // 允许展示清除btn
    allowClear: {
      type: Boolean,
      default: true
    },
    // 允许自动匹配
    matchInput: {
      type: Boolean,
      default: true
    },
    matchInputTime: {
      type: Number,
      default: 500,
    },
    // 延迟请求等待时间
    wait: {
      type: Number,
      default: 500
    },
    matchCase: {
      type: Boolean,
      default: true
    },
    localCache: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      list: [],
      localList: [],
      currentIndex: -1,
      inputText: "",
      inputValue: "",
      icon: "",
      isFocus: false,
      setItemFlag: false,
      valueMap: {},
      iconClick() {}
    };
  },
  created() {
    this.inputText = this.value.text || "";
    this.inputValue = this.value.value || "";
    this.handleClearBtn();
  },
  mounted() {
    this.$on("item-click", item => {
      this.setItem(item);
    });
  },
  methods: {
    handleClearBtn() {
      if (this.allowClear) {
        this.icon = "android-close";
        this.iconClick = this.clearText;
      }
    },
    handleFocus() {
      this.arrangeLocalList();
      if (this.suggestions.length > 0 && !this.inputCallback) {
        this.handleShowMenu(true);
      }
      this.isFocus = true;

      if (this.inputCallback) {
        if (this.localCache && this.valueMap[this.inputText] && this.inputText !== '') {
          this.localList = this.valueMap[this.inputText];
        } else if (!this.setItemFlag) {
          this.inputCallback()
        }
      }

      this.handleLocalSug();
    },
    handleBlur() {
      this.isFocus = false;

      this.handleInLocalSug();
      this.handleEmit();
    },
    clearText() {
      this.inputText = "";
      this.inputValue = "";
      this.localList = [];
      this.list = [];
    },
    clearList() {
      this.currentIndex = -1;
      if (this.inputCallback) {
        this.list = [];
        this.handleShowMenu(false);
      }
    },
    changeCurrent(offset) {
      let moveIndex = this.currentIndex + offset;
      if (offset > 0 && moveIndex >= this.list.length) {
        moveIndex = 0;
      } else if (offset < 0 && moveIndex < 0) {
        moveIndex = this.list.length - 1;
      }

      this.currentIndex = moveIndex;

      this.$nextTick(() => {
        const popper = this.$refs.popper.$el;
        let popperHeight = popper.clientHeight;
        let activeItem = popper.querySelector(".active");
        let item = popper.querySelector("li");
        if (!activeItem || !item) {
          return;
        }
        let itemHeight = item.clientHeight;
        if (this.currentIndex === 0) {
          popper.scrollTop = 0;
          return;
        }
        if (this.currentIndex === this.list.length - 1) {
          popper.scrollTop = popperHeight;
          return;
        }
        if (activeItem && activeItem.offsetTop > popperHeight - itemHeight) {
          popper.scrollTop += itemHeight;
        }
        if (activeItem && activeItem.offsetTop < popper.scrollTop) {
          popper.scrollTop -= itemHeight;
        }
      });
    },
    handleEnter() {
      if (this.currentIndex === -1) {
        return;
      }
      let currentItem = this.list[this.currentIndex];
      this.setItem(currentItem);
    },
    convert2standard(data) {
      let res = [];
      res = data.map((item, index) => {
        return {
          text: item,
          value: item
        };
      });
      return res;
    },
    arrangeLocalList() {
      let sugs = this.suggestions;
      if (
        Array.isArray(sugs) &&
        sugs.length > 0 &&
        typeof sugs[0] === "string"
      ) {
        this.localList = this.convert2standard(sugs);
      } else if (this.inputCallback && this.inputText === "" && !sugs.length) {
        this.localList = [];
      } else {
        this.localList = sugs;
      }
    },
    handleLocalSug() {
      let word = this.inputText;
      let tmpList = this.localList.filter(item => {
        let cw = !this.matchCase ? word.toLowerCase() : word;
        let ct = !this.matchCase ? item.text.toLowerCase() : item.text;
        return cw ? ct.indexOf(cw) > -1 : true;
      });
      this.handleInLocalSug();
      if (tmpList.length > 0) {
        this.list = tmpList;
      }
      else if (!tmpList.length && !word) {
        this.list = this.localList;
      }
      else {
        this.list = this.inputText ? [{
          text: word,
          value: '',
          nomatch: true
        }] : [];
        this.inputValue = '';
      }

      if (this.list.length > 0 && this.isFocus) {
        this.handleShowMenu(true);
      }

      this.handleAutoMatch();
    },
    handleInLocalSug() {
      let word = this.inputText;
      let tmpList = this.localList.filter(item => {
        let cw = !this.matchCase ? word.toLowerCase() : word;
        let ct = !this.matchCase ? item.text.toLowerCase() : item.text;
        return cw === ct;
      });
      this.inputValue = tmpList.length > 0 ? tmpList[0].value : "";
    },
    setItem(item) {
      this.setItemFlag = true;
      this.inputValue = item.value;
      this.inputText = item.text;
      this.$nextTick(() => {
        this.handleShowMenu(false);
        this.clearList();
      });
    },
    handleEmit() {
      if (this.inputText === "" && this.inputValue !== "") {
        this.inputValue = "";
      }
      this.setItemFlag = false;
      this.$emit("input", {
        text: this.inputText,
        value: this.inputValue
      });
      this.$emit("change", {
        text: this.inputText,
        value: this.inputValue
      });
    },
    handleClose() {
      this.handleShowMenu(false);
    },
    handleAutoMatch() {
      clearInterval(this.autoTimer);
      if (this.list.length === 1 && !this.list[0].nomatch && this.inputText !== '' && this.matchInput) {
        this.autoTimer = setTimeout(() => {
          if (!this.list.length) {
            return;
          }
          this.inputText = this.list[0].text;
          this.inputValue = this.list[0].value;
          this.handleEmit();
        }, this.matchInputTime);
      }
    },
    handleShowMenu(flag) {
      this.$refs.popper.handleShow(
        flag,
        this.$refs.xInput.$refs.input.offsetWidth
      );
    },
    logError(msg) {
      throw new Error("[xcui] - " + msg);
    }
  },
  watch: {
    suggestions(val) {
      this.arrangeLocalList();
      if (this.localCache) {
        this.valueMap[this.inputText] = this.localList;
      }
      this.handleLocalSug();
    },
    allowClear(val) {
      if (val) {
        this.handleClearBtn();
      } else {
        this.icon = "";
        this.iconClick = () => {};
      }
    },
    inputText(val) {
      if (!this.inputCallback) {
        this.handleEmit();
        this.handleLocalSug();
      } else {
        clearTimeout(this.timer);
        if (this.localCache && this.valueMap[val] && val !== "") {
          this.localList = this.valueMap[val];
          this.handleLocalSug();
        } else if (!this.setItemFlag) {
          this.timer = setTimeout(() => {
            this.inputCallback();
          }, this.wait);
        }
        this.handleEmit();
      }
      if (val === "") {
        this.clearList();
      }
    },
    inputValue(val) {
      if (val === "" && this.inputText !== "") {
        this.handleEmit();
      }
    },
    value(val) {
      if (!val) {
        this.inputText = "";
        this.inputValue = "";
        return;
      }
      this.inputText = val.text ? val.text.trim() : "";
      this.inputValue = val.value || "";
    }
  }
};
</script>
