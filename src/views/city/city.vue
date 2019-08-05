<template>
    <div>
        <city-header></city-header>
        <city-search :cities="cities"></city-search>
        <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
        <city-alphabet :cities="cities" @change="hangdleLetterChange"></city-alphabet>
    </div>
</template>

<script>
    import CityHeader from './components/header'
    import CitySearch from './components/search'
    import CityList from './components/list'
    import CityAlphabet from './components/alphabet'
    import axios from 'axios'
    export default {
        name: "city",
        components: {
            CityHeader,
            CitySearch,
            CityList,
            CityAlphabet
        },
        data () {
            return {
                cities: {},
                hotCities: [],
                letter: "A"
            }
        },
        methods: {
            getCityInfo () {
                axios.get('/api/city.json')
                    .then(this.handleGetCityInfoSuccess)
            },
            handleGetCityInfoSuccess (res) {
                // console.log(res);
                res = res.data
                if(res.status){
                    const data = res.data
                    this.cities = data.cities
                    this.hotCities = data.hotCities
                }
            },
            hangdleLetterChange (letter){
                this.letter = letter
            }
        },
        mounted() {
            this.getCityInfo()
        }
    }
</script>

<style scoped>

</style>
