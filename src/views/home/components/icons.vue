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
        props: {
            iconList: {
                type: Array,
                default: []
            }
        },
        data () {
            return {

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
    .icons
        margin-top 5px
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
