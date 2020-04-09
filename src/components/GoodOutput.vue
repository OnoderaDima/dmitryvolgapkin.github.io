<template>
    <div :class="{'good-output':true,'good-output__active':isActive()}" :style="getGoodPicture()"></div>
</template>
<script>
export default {
    name: "GoodOutput",

    methods: {
        isActive() {
            if (this.$store.getters.getGood && this.$store.getters.getChange) 
                return true;
            return false;
        },           
        getGoodPicture(){
            if (this.$store.getters.getGood)
                return "background-image: url(" + require("../assets/"+this.$store.getters.getGood.image) + ")";
            return false;
        },
    },
}
</script>
<style lang="scss">
    .good-output {
        padding: 10px;
        color: #999999;
        width: 100%;
        height: 200px;
        margin: 5px;

        background: {
            color: #333333;
            repeat: no-repeat;
            size: contain;
            position: center;
        }

        border: {
            color: #999999;
            style: solid;
            radius: 4px;
            width: 2px;        
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