<template>
    <div>
        <div class="search">
            <input v-model="keyword" type="text" class="search-input" placeholder="请输入城市名或拼音">
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li class="search-item border-bottom"
                    v-for="item of list"
                    :key="item.id"
                    @click="handleCityClick(item.name)"
                >
                    {{item.name}}
                </li>
                <li class="search-item border-bottom" v-show="hasNoData">
                    暂无搜索结果！
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    import BScroll from 'better-scroll'
    export default {
        name: "citySearch",
        props: {
          cities:{
              type: Object,
              default: {}
          }
        },
        data () {
            return {
                keyword: "",
                timer: null,
                list: []
            }
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
            this.croll = new BScroll(this.$refs.search)
        },
        computed: {
            hasNoData() {
                return !this.list.length
            }
        },
        watch: {
            keyword () {
                if (this.timer) {
                    clearTimeout(this.timer)
                }
                if (!this.keyword){
                    this.list = []
                }
                this.timer = setTimeout( ()=>{
                    const result = []
                    for(let i in this.cities){
                        this.cities[i].forEach((value)=>{
                            if( value.name.indexOf(this.keyword) > -1 ||
                                value.spell.indexOf(this.keyword) > -1){
                                result.push(value)
                            }
                        })
                    }
                    this.list = result
                },100)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~@/assets/styles/varibles.styl"
    .search
        height 36px
        background $bgColor
        padding 5px
        .search-input
            box-sizing border-box
            width 100%
            padding 0 5px
            text-align center
            height 32px
            line-height 32px
            border-radius 3px
            color #666
    .search-content
        z-index 1
        overflow hidden
        position absolute
        top 88px
        left 0
        right 0
        bottom 0
        background #fff
        .search-item
            line-height 30px
            margin-top 1px
            padding-left 10px
            background #fff
            color #666
</style>
