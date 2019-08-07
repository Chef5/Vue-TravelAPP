<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img :src="bannerImg" alt="" class="banner-img">
            <div class="banner-info">
                <div class="banner-title">{{sightName}}</div>
                <div class="banner-number">
                    <span class="t-font banner-icon">&#xe65f;</span>
                    39
                </div>
            </div>
        </div>
        <Fade>
            <Gallary :imgs="gallaryImgs" @close="handleGallaryClose" v-show="showGallary"></Gallary>
        </Fade>
    </div>
</template>

<script>
    import Gallary from '@/components/gallary/gallary'
    import Fade from '@/components/fade/fade'
    export default {
        name: "detailBanner",
        components: {
            Gallary,
            Fade
        },
        props: {
            sightName: {
                type: String,
                default: "暂无景点"
            },
            bannerImg: {
                type: String,
                default: "null.jpg"
            },
            gallaryImgs: {
                type: Array,
                default () {
                    return []
                }
            }
        },
        data () {
            return {
                showGallary: false
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
            background-image linear-gradient(to bottom , rgba(0,0,0,0), rgba(0,0,0,0.8))
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
