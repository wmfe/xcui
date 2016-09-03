<template lang="md">
# Toaster

Toaster提供一种不打断用户操作的轻量级提示方式，顶部居中显示并自动消失。

#### 支持4种信息类型
1. info：普通信息提示
2. success：成功信息提示
3. error：错误信息提示
4. warning：警告信息提示

# DEMO

<demo>
    <example title="信息提示组件">
        <button class="btn btn-info" @click="options={type:'info',content:'this is a info message',duration:1000}">info</button>
        <button class="btn btn-success" @click="options={type:'success',content:'this is a success message',duration:2000}">success</button>
        <button class="btn btn-danger" @click="options={type:'error',content:'this is a error message',duration:3000}">error</button>
        <button class="btn btn-warning" @click="options={type:'warning',content:'this is a warning message',duration:1000}">warning</button>
        <Toaster :options="options"></Toaster>
    </example>
</demo>

## Props
| 名字 | 类型 | 默认 | 描述 |
|-----|-----|-----|-----|
| options | Object | 无 | type：指定提示信息的类型，默认为info类型；可自行配置，有四种选择info、success、error、warning<br>content：必选项，提示信息内容<br>duration：默认2秒自动关闭，可自行配置 |
</template>


<script>
import Toaster from '../components/toaster';
export default {
    components: {
        Toaster
    },
    data() {
        return {
            options: {}
        };
    }
};
</script>
