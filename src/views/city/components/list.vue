<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.city}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper"
                         v-for="item of hot"
                         :key="item.id"
                         @click="handleCityClick(item.name)"
                    >
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area"
                 v-for="(item,key) of cities"
                 :key="key"
                 :ref="key"
            >
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list"
                     v-for="innerItem of item"
                     :key="innerItem.id"
                     @click="handleCityClick(innerItem.name)"
                >
                    <div class="item border-bottom">{{innerItem.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'
    import BScroll from 'better-scroll'
    export default {
        name: "CityList",
        props: {
            cities: {
                type: Object,
                default: {}
            },
            hot: {
                type: Array,
                default: []
            },
            letter: {
                type: String,
                default: 'A'
            }
        },
        computed: {
            ...mapState(['city'])
            // ...mapState({
            //     currentCity: 'city'
            // })
        },
        methods: {
            handleCityClick (city) {
                // this.$store.commit('changeCity', city)
                this.changeCity(city)
                this.$router.push('/')
            },
            ...mapMutations(['changeCity'])
        },
        mounted () {
            this.scroll = new BScroll(this.$refs.wrapper)
        },
        watch: {
            letter () {
                // console.log(this.letter);
                const element = this.$refs[this.letter][0]
                // console.log(element);
                this.scroll.scrollToElement(element)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~@/assets/styles/varibles.styl"
    .border-topbottom
        &:before
            border-color #ccc
        &:after
            border-color #ccc
    .border-bottom
        &:before
            border-color #ccc
    .list
        overflow hidden
        position absolute
        top 88px
        right 0
        left 0
        bottom 0
        .title
            line-height 27px
            background #eee
            padding-left 10px
            color #666
            font-size 13px
        .button-list
            overflow hidden
            padding 5px 30px 5px  5px
            .button-wrapper
                float left
                width 33.33%
                .button
                    margin  5px
                    padding 5px 0px
                    text-align center
                    border 1px solid #ccc
        .item-list
            .item
                line-height 38px
                color #666
                padding-left 10px
</style>
