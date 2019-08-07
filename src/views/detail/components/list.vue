<template>
    <div>
        <div class="item"
            v-for="(item, index) of list"
             :key="index"
        >
            <div class="item-title">
                <span class="item-title-icon"></span>
                {{item.title}}
            </div>
            <div v-if="item.children" class="item-children">
                <detail-list :list="item.children"></detail-list>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "detailList",
        props: {
            list: {
                type: Array,
                default () {
                    return []
                }
            }
        }
    }
</script>

<style scoped>
    .item-title{
        line-height: 40px;
        font-size: 16px;
    }
    .item-title-icon{
        position: relative;
        left: 3px;
        top: 3px;
        display: inline-block;
        width: 18px;
        height: 18px;
        background: url("../../../assets/images/ticket.png");
        overflow: hidden;
        border-radius: 50%;
        margin-right: 5px;
        background-size: 20px 20px;
        background-position: -0px -1px;
    }
    .item-children{
        padding: 0 20px;
    }
</style>
