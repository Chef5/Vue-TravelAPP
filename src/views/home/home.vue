<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <div>Home</div>

  </div>
</template>

<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>
