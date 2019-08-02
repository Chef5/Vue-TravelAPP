<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
    </div>
</template>

<script>
    import CityHeader from './components/header'
    import CitySearch from './components/search'
    export default {
        name: "city",
        components: {
            CityHeader,
            CitySearch
        }
    }
</script>

<style scoped>

</style>
