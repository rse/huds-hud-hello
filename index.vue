
<template>
    <hello
        v-bind:background="config.hello.background"
        v-bind:foreground="config.hello.foreground"
        v-bind:text="config.hello.text"
    ></hello>
</template>

<style lang="less" scoped>
</style>

<script>
module.exports = {
    name: "index",
    data: () => ({
        config: huds.config()
    }),
    components: {
        "hello": Vue.loadComponent("hello.vue")
    }
}
</script>

