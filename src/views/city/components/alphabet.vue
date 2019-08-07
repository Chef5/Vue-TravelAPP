<template>
    <ul class="list">
        <li class="item"
            v-for="item of letters"
            :key="item"
            :ref="item"
            @click="handleLetterClick"
            @touchstart.prevent="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
        >
            {{item}}
        </li>
    </ul>
</template>

<script>
    export default {
        name: "cityAlphabet",
        props: {
            cities: {
                type: Object,
                default: {}
            }
        },
        computed: {
            letters () {
                const letters = []
                for(let i in this.cities){
                    letters.push(i)
                }
                return letters
            }
        },
        data () {
          return {
              touchStatus: false,
              startY: 0,
              timer: null
          }
        },
        updated () {
            this.startY = this.$refs['A'][0].offsetTop //字母A距离header下边缘距离
        },
        methods: {
            handleLetterClick (e) {
                // console.log(e);
                this.$emit('change', e.target.innerText)
            },
            handleTouchStart () {
                this.touchStatus = true //控制标志位
            },
            handleTouchMove (e) {
                if (this.touchStatus) {
                    if (this.timer){
                        clearTimeout(this.timer)
                    }
                    this.timer = setTimeout(()=>{ //性能优化：高频函数截流
                        const startY = this.startY //字母A距离header下边缘距离
                        // console.log(startY);
                        const touchY = e.touches[0].clientY-89  //触点与屏幕顶部距离-header高度
                        // console.log(touchY);
                        const index = Math.floor((touchY-startY)/20) //计算当前触点字母下标
                        // console.log(index);
                        if(index >= 0 && index < this.letters.length){
                            this.$emit('change', this.letters[index])
                        }
                    }, 16)
                }
            },
            handleTouchEnd () {
                this.touchStatus = false
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~@/assets/styles/varibles.styl"
    .list
        display flex
        flex-direction column
        justify-content center
        position absolute
        top 88px
        right 0
        bottom 0
        width 20px
        .item
            line-height 20px
            text-align center
            color $bgColor
</style>
