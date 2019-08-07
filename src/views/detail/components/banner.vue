<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img src="http://img1.qunarzz.com/sight/p0/1808/ae/aee4ea6935c01799a3.water.jpg_350x240_6be0dee0.jpg" alt="" class="banner-img">
            <div class="banner-info">
                <div class="banner-title">海昌发现王国</div>
                <div class="banner-number">
                    <span class="t-font banner-icon">&#xe65f;</span>
                    39
                </div>
            </div>
        </div>
        <Gallary :imgs="imgs" @close="handleGallaryClose" v-show="showGallary"></Gallary>
    </div>
</template>

<script>
    import Gallary from '@/components/gallary/gallary'
    export default {
        name: "detailBanner",
        components: {
            Gallary
        },
        data () {
            return {
                showGallary: false,
                imgs: [
                    "http://img1.qunarzz.com/sight/p0/1808/ae/aee4ea6935c01799a3.water.jpg_350x240_6be0dee0.jpg",
                    "http://img1.qunarzz.com/sight/p0/1808/9a/9a8af6afcbf2e4e2a3.water.jpg_350x240_b9773ca5.jpg"
                ]
            }
        },
        methods: {
            handleBannerClick () {
                this.showGallary = true
            },
            handleGallaryClose () {
                this.showGallary = false
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .banner
        position: relative
        overflow hidden
        height 0
        padding-bottom 55%
        .banner-img
            width 100%
        .banner-info
            display flex
            position: absolute
            left 0
            right 0
            bottom 0
            line-height 30px
            color #fff
            background-image linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8))
            .banner-title
                flex 1
                font-size 16px
                padding 0 10px
            .banner-number
                height 16px
                margin-top 10px
                padding 0 20px
                line-height 16px
                font-size 12px
                border-radius 10px
                background rgba(0,0,0,.8)
                .banner-icon
                    font-size 12px
</style>
