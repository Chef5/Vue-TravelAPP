<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon"
                     v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" alt="">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: "homeIcons",
        data () {
            return {
                iconList: [
                    {
                        id: '0001',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                        desc: '景点门票'
                    },
                    {
                        id: '0002',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
                        desc: '大连圣亚'
                    },
                    {
                        id: '0003',
                        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/67370daeaa1a8ac24a6c7930f74fee0c.png',
                        desc: '发现王国'
                    },
                    {
                        id: '0004',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
                        desc: '老虎滩夜场'
                    },
                    {
                        id: '0005',
                        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/b71c1387a921ccf9c6edc7e8def3da90.png',
                        desc: '森林动物园'
                    },
                    {
                        id: '0006',
                        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/3a0879f224e0aca97843bff78cabac3a.png',
                        desc: '大连必游'
                    },
                    {
                        id: '0007',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
                        desc: '沈阳必游'
                    },
                    {
                        id: '0008',
                        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/f04285731d7121da1b9028e2bf431695.png',
                        desc: '丹东山水'
                    },
                    {
                        id: '0009',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',
                        desc: '暑期聚惠'
                    }
                ]
            }
        },
        computed: {
            pages () {
                const  pages = []
                this.iconList.forEach((item, index) => {
                    const page = Math.floor(index / 8)
                    if(!pages[page]){  //此页不存在时，声明一个数组
                        pages[page] = []
                    }
                    pages[page].push(item) //往此页添加一个元素
                })
                return pages
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~@/assets/styles/varibles.styl"
    @import "~@/assets/styles/mixins.styl"
    .icons >>> .swiper-container
        height 0
        padding-bottom 50%
    .icon
        position relative
        overflow hidden
        float left
        width 25%
        height 0
        padding-bottom 25%
        .icon-img
            position absolute
            top 0
            left 0
            right 0
            bottom 22px
            box-sizing border-box
            padding 5px
            .icon-img-content
                display block
                margin 0 auto
                height 100%
        .icon-desc
            position absolute
            left 0
            right 0
            bottom 0
            height 22px
            line-height 22px
            text-align center
            color $darkTextColor
            ellipse()
</style>
