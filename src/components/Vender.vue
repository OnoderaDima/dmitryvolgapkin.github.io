<template>
    <div class="vender">
        <div class="vender__left">
            <Goods :goodList="goods"/>
        </div>
        <div class="vender__right">
            <Panel/>
        </div>
    </div>
</template>
<script>
import Panel from '@/components/Panel.vue'
import Goods from '@/components/Goods.vue'

export default {
    name: "Vender",

    props: {
        goods: Array,
    },

    components: {
        Panel,
        Goods,
    },
}
</script>
<style lang="scss">
.vender {
    display: flex;
    justify-content: space-between;
    padding: 15px;

    background: {
        color: rgb(255, 55, 55);
    }

    border-radius: 10px;

    &__left {
        width: 500px;
        margin: 5px;
        
        border: {
            color: #999999;
            style: solid;
            radius: 10px;
            width: 2px;
        }

        background-color: #FFFFFF;
    }

    &__right {
        width: 300px;
        margin: 5px;
    }
}
</style>