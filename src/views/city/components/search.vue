<template>
    <div class="search">
        <input type="text" class="search-input" placeholder="请输入城市名或拼音">
    </div>
</template>

<script>
    export default {
        name: "citySearch"
    }
</script>

<style lang="stylus" scoped>
    @import "~@/assets/styles/varibles.styl"
    .search
        height 36px
        background $bgColor
        padding 5px
        .search-input
            box-sizing border-box
            width 100%
            padding 0 5px
            text-align center
            height 32px
            line-height 32px
            border-radius 3px
            color #666
</style>
