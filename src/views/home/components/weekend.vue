<template>
    <div>
        <div class="title">
            周末去哪
        </div>
        <ul>
            <router-link
                 tag="li"
                 class="item border-bottom"
                 v-for="item of weekendList"
                 :key="item.id"
                 :to="'/detail/' + item.id "
            >
                <div class="item-img-wrapper">
                    <img :src="item.imgUrl" alt="" class="item-img">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "homeWeekend",
        props: {
            weekendList: {
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
        line-height 40px
        background #eee
        text-indent 10px
    .item-img-wrapper
        overflow hidden
        height 0
        padding-bottom 37%
        .item-img
            width 100%
    .item-info
        padding 5px
        .item-title
            line-height 27px
            font-size 16px
            ellipse()
        .item-desc
            line-height 20px
            font-size 14px
            color #bbb
            ellipse()
</style>
