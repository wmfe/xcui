<template>
  <li 
    class="x-cascader-menu-item"
    :class="active ? 'x-cascader-menu-item-active' : ''"
    @click="handleClick"
    @mouseenter="handleMouseEnter"
  >
    <span class="x-cascader-menu-item-text">{{initItem[getDefaultKey.text]}}</span>
    <x-icon name="checkmark" class="x-cascader-menu-item-check" v-if="active"></x-icon>
    <x-icon name="arrow-right-b" v-if="initItem[getDefaultKey.children]"></x-icon>
  </li>
</template>
<script>
export default {
  name: 'x-cascader-menu-item',
  props: {
    initItem: Object,
    multiple: Boolean,
    pointer: Number,
    keyArray: Array,
  },
  data() {
    return {
      itemData: {},
      active: false,
    };
  },
  computed: {
    getDefaultKey() {
      const pointer = this.keyArray.length === 1 ? 0 : this.pointer;
      return this.keyArray[pointer];
    },
  },
  methods: {
    changeActive(flag) {
      this.active = flag;
    },
    handleClick() {
      this.active = true;
      this.$emit('click', this.initItem);
    },
    handleMouseEnter() {
      if (this.multiple) {
        return;
      }
      this.active = true;
      this.$emit('mouseenter', this.initItem, false);
    },
  },
};
</script>
