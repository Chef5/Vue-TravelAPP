<template>
    <div class="wrapper">
        <swiper :options="swiperOption" >
            <!-- slides -->
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" alt="">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: "homeSwiper",
        data () {
            return {
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    loop: true,
                    autoplay: {
                        delay: 3000,
                        stopOnLastSlide: false,
                        disableOnInteraction: true,
                    },
                },
                swiperList: [
                    {
                        id: '0001',
                        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/ae8987bff39ff10e82675a3643154e66.jpg_750x200_0f187b2e.jpg'
                    },
                    {
                        id: '0002',
                        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/9655dd361658cc55ec5bc9280ab3e706.jpg_750x200_6a12f192.jpg'
                    },
                    {
                        id: '0003',
                        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/ae29208de0e5aaa11964bdcaf198930d.jpg_750x200_05ab4be2.jpg'
                    },
                ]
            }
        },
    }
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background #fff
    .wrapper
        overflow hidden
        width 100%
        height 0
        padding-bottom 26.75%
        background-color #eee
        .swiper-img
            width 100%
</style>
