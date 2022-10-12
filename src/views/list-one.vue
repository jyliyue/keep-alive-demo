<script setup name="list-one">
// This starter template is using Vue 3 <script setup> SFCs

import { ref } from 'vue'

onMounted(() => {
    console.log('Mounted list one')
})

onActivated(() => {
    console.log('Activated list one')
})

onDeactivated(() => {
    console.log('DeActivited list one')
})

const onClickLeft = () => history.back()

const value = ref('list-one')
</script>

<template>
    <van-nav-bar title="列表1" left-arrow @click-left="onClickLeft" />
    <van-field v-model="value" label="文本" placeholder="请输入" />
</template>

<style lang="scss" scoped></style>
