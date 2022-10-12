<script setup>
// This starter template is using Vue 3 <script setup> SFCs
import { useKeepAliverStore } from '@/store/modules/keepAliver'
const { remove } = useKeepAliverStore()

onMounted(() => {
    console.log('Mounted index')
})

onActivated(() => {
    console.log('Activated index')
})

onDeactivated(() => {
    console.log('DeActivited index')
})
</script>

<template>
    <van-cell title="列表 1" is-link to="list-one" />
    <van-cell title="列表 2" is-link to="list-two" />
    <br />
    <van-space direction="vertical" fill>
        <van-button type="primary" block @click="remove('list-one')"
            >清除 one 页面缓存</van-button
        >
        <van-button type="primary" block @click="remove('list-two')"
            >清除 two 页面缓存</van-button
        >
    </van-space>
</template>

<style lang="scss" scoped></style>
