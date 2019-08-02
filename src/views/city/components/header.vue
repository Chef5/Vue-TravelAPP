<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <div class="t-font header-back">&#xe624;</div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "cityHeader"
    }
</script>

<style lang="stylus" scoped>
    @import "~@/assets/styles/varibles.styl"
    .header
        position relative
        overflow hidden
        height 43px
        font-size 16px
        line-height 43px
        text-align center
        color #fff
        background $bgColor
        .header-back
            position absolute
            top 0
            left 0
            width 32px
            text-align center
            font-size 14 px
            color #fff
</style>
