<template>
    <div class="container" @click="handlGallaryClick">
        <div class="wrapper">
            <swiper :options="swiperOption">
                <!-- slides -->
                <swiper-slide v-for="(item,index) in imgs" :key="index">
                    <img class="gallary-img" :src="item" alt="">
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Gallary",
        props: {
            imgs: {
                type: Array,
                default () {
                    return []
                }
            }
        },
        data () {
            return {
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'fraction'
                    },
                    observer:true,
                    observeParents:true
                }
            }
        },
        methods: {
            handlGallaryClick () {
                this.$emit("close")
            }
        }
    }
</script>

<style scoped>
    .container >>> .swiper-container{
        overflow: inherit;
    }
    .container{
        z-index: 99;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: fixed;
        left: 0;right: 0;top: 0;bottom: 0;
        background: #000;
    }
    .wrapper{
        height: 0;
        width: 100%;
        padding-bottom: 100%;
    }
    .gallary-img{
        width: 100%;
    }
    .swiper-pagination{
        color: #fff;
        bottom: -30px;
    }
</style>
