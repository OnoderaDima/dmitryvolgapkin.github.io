<template>
    <div :class="{'coins-output':true,'coins-output__active':isActive()}">
        <p>
            Ваша сдача:
        </p>
        <p v-for="item of getCoinsChange()" :key="item.coin">
            <span>{{item.coin}}р </span><span>{{item.count}}X</span>
        </p>
    </div>
</template>
<script>
export default {
    name: "CoinsOutput",

    methods: {
        isActive() {
            if (this.$store.getters.getGood && this.$store.getters.getChange) 
                return true;
            return false;
        },           
        getCoinsChange(){
            return this.$store.getters.getChange;
        },
    },
}
</script>
<style lang="scss">
    .coins-output {
        padding: 10px;
        color: #999999;
        background-color: #333333;
        width: 100%;
        height: 200px;
        margin: 5px;

        border: {
            color: #999999;
            style: solid;
            radius: 4px;
            width: 2px;        
        }     

        font:{
            size: 16px;
            family: 'a_LCDNovaObl', arial;   
        }

        &__active {
            animation: lighting 2s  infinite; 

            @keyframes lighting{
                0% {
                    background-color: transparent;
                    color: #999999;
                }

                50% {
                    background-color: rgb(255, 221, 29);
                    color: #000000;
                }

                100% {
                    background-color: transparent;
                    color: #999999;
                }
            }            
        }        
    }
</style>