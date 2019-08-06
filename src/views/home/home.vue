<template>
  <div class="home">
    <home-header ></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/icons'
import HomeRecommend from './components/recommend'
import HomeWeekend from './components/weekend'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'home',
  data () {
    return {
      lastCity: "",
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/home.json?city=' + this.city).then(
          this.getHomeInfoSuccess
      )
    },
    getHomeInfoSuccess (res) {
      // console.log(res)
      res = res.data
      if (res.status){
        let data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted() {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  computed: {
    ...mapState(['city'])
  },
  activated() {
    if (this.lastCity !== this.city){
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>
