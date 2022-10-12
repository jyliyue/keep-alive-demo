<script setup name="list-two">
// This starter template is using Vue 3 <script setup> SFCs

onMounted(() => {
    console.log('Mounted list two')
})

onActivated(() => {
    console.log('Activated list two')
})

onDeactivated(() => {
    console.log('DeActivited list two')
})

const onClickLeft = () => history.back()

const value = ref('list-two')
</script>

<template>
    <van-nav-bar title="列表1" left-arrow @click-left="onClickLeft" />
    <van-field v-model="value" label="文本" placeholder="请输入" />
</template>

<style lang="scss" scoped></style>
