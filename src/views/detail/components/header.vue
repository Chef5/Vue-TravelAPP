<template>
    <div>
        <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
            <div class="t-font back-icon">&#xe624;</div>
        </router-link>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            <router-link to="/">
                <div class="t-font header-back">&#xe624;</div>
            </router-link>
            景点详情
        </div>
    </div>
</template>

<script>
    export default {
        name: "detailHeader",
        data () {
            return {
                showAbs: true,
                opacityStyle: {
                    opacity: 0
                }
            }
        },
        methods: {
            handleScroll () {
                const top = document.documentElement.scrollTop;
               if (top > 30){
                   let opacity = top / 120
                   opacity = opacity>1 ? 1 : opacity
                   this.opacityStyle = { opacity }
                   this.showAbs = false
               }else {
                   this.showAbs = true
               }
            }
        },
        activated() {
            window.addEventListener('scroll', this.handleScroll)
        },
        deactivated() {
            window.removeEventListener('scroll', this.handleScroll)
        }
    }
</script>

<style scoped>
    .header-abs{
        position: absolute;
        left: 8px;
        top: 8px;
        width: 40px;
        height: 40px;
        border-radius: 20px;
        background: rgba(0, 0, 0, .8);
    }
    .back-icon{
        color: #fff;
        line-height: 40px;
        font-size: 18px;
        text-align: center;
    }
    .header-fixed{
        z-index: 2;
        position: fixed;
        top: 0px;
        left: 0px;
        right: 0px;
        height: 43px;
        font-size: 16px;
        line-height: 43px;
        text-align: center;
        color: #fff;
        background: #00bcd4;
    }
    .header-back{
        position: absolute;
        top: 0;
        left: 0;
        width: 32px;
        text-align: center;
        font-size: 14px;
        color: #fff;
    }
</style>
