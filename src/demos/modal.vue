<template lang="md">
## Modal 模态窗口

### 使用场景
> 模拟浏览器的 **alert**、**confirm**和**prompt**

### Demo

<demo>
    <button class="btn btn-default" @click="openAlert">弹窗Alert</button>
</demo>

## Props
| 名字 | 类型 | 默认 | 描述 | 是否必选 |
|-----|-----|-----|-----|----|
|type|String|popover|提示类型|可选|
</template>
<script>
import { Modal } from '../components/index';
console.log('Modal', Modal);

let ModalDemo = {
    methods: {
        openAlert() {
            console.log('弹窗Alert ', Modal);
        }
    }
};

export default ModalDemo;
</script>
<style lang="less" scoped>

</style>
