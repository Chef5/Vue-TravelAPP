<template>
    <ul class="list">
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
    </ul>
</template>

<script>
    export default {
        name: "cityAlphabet"
    }
</script>

<style lang="stylus" scoped>
    @import "~@/assets/styles/varibles.styl"
    .list
        display flex
        flex-direction column
        justify-content center
        position absolute
        top 88px
        right 0
        bottom 0
        width 20px
        .item
            line-height 20px
            text-align center
            color $bgColor
</style>
