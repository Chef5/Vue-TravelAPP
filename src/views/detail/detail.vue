<template>
    <div>
        <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
        <detail-header></detail-header>
        <detail-list :list="list"></detail-list>
        <div class="content"></div>
    </div>
</template>

<script>
    import DetailBanner from './components/banner'
    import DetailHeader from './components/header'
    import DetailList from './components/list'
    import axios from 'axios'
    export default {
        name: "detail",
        components: {
            DetailBanner,
            DetailHeader,
            DetailList
        },
        data () {
            return {
                sightName: "",
                bannerImg: "",
                gallaryImgs: [],
                list: []
            }
        },
        methods: {
            geDetailInfo () {
                axios.get("/api/detail.json?",{
                    params: {
                        id: this.$route.params.id
                    }
                }).then(this.handleGetDetailSuccess)
            },
            handleGetDetailSuccess (res) {
                res = res.data
                if(res.status){
                    const data = res.data
                    this.sightName = data.sightName
                    this.bannerImg = data.bannerImg
                    this.gallaryImgs = data.gallaryImgs
                    this.list = data.categoryList
                }
            }
        },
        mounted() {
            this.geDetailInfo()
        }

    }
</script>

<style scoped>
    .content{
        height: 2000px;
    }

</style>
