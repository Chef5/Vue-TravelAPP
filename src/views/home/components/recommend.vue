<template>
    <div>
        <div class="title">
            <span class="t-font heart">&#xe757;</span> 猜你喜欢
        </div>
        <ul>
            <router-link
                    tag="li"
                    class="item border-bottom"
                    v-for="item of recommendList"
                    :key="item.id"
                    :to="'/detail/' + item.id "
            >
                <img :src="item.imgUrl" alt="" class="item-img">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "homeRecommend",
        props: {
            recommendList: {
                type: Array,
                default: []
            }
        },
        data () {
            return {

            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~@/assets/styles/mixins.styl"
    .title
        margin-top 10px
        line-height 40px
        background #eee
        text-indent 10px
        .heart
            color red
    .item
        overflow hidden
        display flex
        height 98px
        .item-img
            width 86px
            height 86px
            padding 6px
        .item-info
            flex 1
            padding 5px
            min-width 0
            .item-title
                line-height 27px
                font-size 16px
                ellipse()
            .item-desc
                line-height 20px
                font-size 14px
                color #bbb
                ellipse()
            .item-button
                border none
                line-height 18px
                background #ff9300
                padding 5px
                border-radius 4px
                color #fff
                margin-top 10px
</style>
