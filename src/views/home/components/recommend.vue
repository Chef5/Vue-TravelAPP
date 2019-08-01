<template>
    <div>
        <div class="title">
            猜你喜欢
        </div>
        <ul>
            <li class="item border-bottom" v-for="item of reconmendList" :key="item.id">
                <img :src="item.imgUrl" alt="" class="item-img">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "homeRecommend",
        data () {
            return {
               reconmendList: [
                   {
                       id: '0001',
                       imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
                       title: '北京欢乐谷',
                       desc: '好玩好玩好玩好玩好玩好玩好玩好玩好玩玩好玩好玩好玩好玩好玩好玩'
                   },
                   {
                       id: '0002',
                       imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
                       title: '北京欢乐谷',
                       desc: '好玩好玩好玩好玩好玩好玩好玩好玩好玩玩好玩好玩好玩好玩好玩好玩'
                   }
               ]
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
