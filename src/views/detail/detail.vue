<template>
    <div>
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <div class="content"></div>
    </div>
</template>

<script>
    import DetailBanner from './components/banner'
    import DetailHeader from './components/header'
    export default {
        name: "detail",
        components: {
            DetailBanner,
            DetailHeader
        }
    }
</script>

<style scoped>
    .content{
        height: 2000px;
    }

</style>
