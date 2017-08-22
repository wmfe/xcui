<template>
    <label class="x-checkbox x-tree-select-checkbox">
        <span class="x-checkbox-item"
            :class="{
              'is-checked': val === 1,
              'is-indeterminate': val === 2,
            }">
            <span class="x-checkbox-background"></span>
            <span class="x-checkbox-cbx"></span>
        </span>
        <span class="x-checkbox-text">
            <slot></slot>
        </span>
    </label>
</template>

<script>
export default{
    props:{
        val: {
            type: Number,
            default: 0,
        }
    }
}
</script>
