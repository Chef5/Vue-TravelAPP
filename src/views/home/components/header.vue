<template>
    <div class="header">
        <div class="header-left">
            <div class="t-font back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="t-font">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <div class="header-right">
            {{city}}
            <span class="t-font arrow-icon">&#xe64a;</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "homeHeader",
        props: {
            city: String
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~@/assets/styles/varibles.styl"
    .header
        display flex
        line-height 43px
        background $bgColor
        color #fff
        .header-left
            width 32px
            float left
            .back-icon
                text-align center
                font-size 14px
        .header-input
            flex 1
            height 32px
            line-height 32px
            color #ccc
            margin 6px 10px
            padding-left 10px
            background #fff
            border-radius 5px
        .header-right
            width 62px
            float right
            text-align center
            .arrow-icon
                font-size 12px


</style>
