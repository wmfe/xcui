<template  lang="md">
# TreeSelect 树形单选选择器

## 基础单选

::: demo 基本使用。。

```html

<tpl>
    <div style="width: 180px;">
        <x-single-tree-select></x-single-tree-select>
    </div>
</tpl>

<script>
    export default {
    }
</script>
```

:::

</template>
<script>
    export default {
        data() {
            return {
                num1: 1123123123,
            };
        },
        methods: {
            handleChange(val, oldVal) {
                console.log(`val: ${val}`);
                console.log(`oldVal: ${oldVal}`);
            }
        }
    };
</script>
<style>
</style>
