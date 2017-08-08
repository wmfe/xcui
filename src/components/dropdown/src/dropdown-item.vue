<template>
  <li class="x-dropdown-item"
    :class="{
        'is-disabled': disabled,
        'is-divided': divided
        }"
    @click="handleClick">
    <slot></slot>
  </li>
</template>

<script>
import Emitter from 'xcui/src/utils/mixins/emitter'
export default {
    name: 'x-dropdown-item',
    componentName: 'x-dropdown-item',
    mixins: [Emitter],
    props: {
        disabled: Boolean,
        divided: Boolean,
        itemKey: String
    },
    methods: {
        handleClick() {
            this.dispatch('x-dropdown', 'x-dropdown-item-click', this.itemKey);
        }
    }
}
</script>

