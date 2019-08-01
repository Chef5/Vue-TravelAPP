<template>
    <div>
        <div class="title">
            周末去哪
        </div>
        <ul>
            <li class="item border-bottom" v-for="item of reconmendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img :src="item.imgUrl" alt="" class="item-img">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "homeWeekend",
        data () {
            return {
                reconmendList: [
                    {
                        id: '0001',
                        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/53/02091f1ee43d0a.jpg_r_640x214_2e3256b1.jpg',
                        title: '北京清凉避暑胜地',
                        desc: '到大自然中享受“天然空调”的清凉'
                    },
                    {
                        id: '0002',
                        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
                        title: '帝都必打卡',
                        desc: '来北京必去的景点非这些地方莫属'
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
