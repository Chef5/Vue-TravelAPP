<template>
    <div>
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <detail-list :list="list"></detail-list>
        <div class="content"></div>
    </div>
</template>

<script>
    import DetailBanner from './components/banner'
    import DetailHeader from './components/header'
    import DetailList from './components/list'
    export default {
        name: "detail",
        components: {
            DetailBanner,
            DetailHeader,
            DetailList
        },
        data () {
            return {
                list: [
                    {
                        title: '成人票',
                        children: [
                            {
                                title: '成人三馆联票'
                            },
                            {
                                title: '成人五馆联票',
                                children: [
                                    {
                                        title: '五馆全票'
                                    },
                                    {
                                        title: '五馆团体'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: '学生票'
                    },
                    {
                        title: '儿童票'
                    },
                    {
                        title: '特惠票'
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    .content{
        height: 2000px;
    }

</style>
