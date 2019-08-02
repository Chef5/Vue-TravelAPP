<template>
    <ul class="list">
        <li class="item" v-for="(item,key) of cities" :key="key">{{key}}</li>
    </ul>
</template>

<script>
    export default {
        name: "cityAlphabet",
        props: {
            cities: {
                type: Object,
                default: {}
            }
        }
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
