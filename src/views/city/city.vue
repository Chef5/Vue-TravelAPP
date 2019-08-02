<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list></city-list>
        <city-alphabet></city-alphabet>
    </div>
</template>

<script>
    import CityHeader from './components/header'
    import CitySearch from './components/search'
    import CityList from './components/list'
    import CityAlphabet from './components/alphabet'
    export default {
        name: "city",
        components: {
            CityHeader,
            CitySearch,
            CityList,
            CityAlphabet
        }
    }
</script>

<style scoped>

</style>
