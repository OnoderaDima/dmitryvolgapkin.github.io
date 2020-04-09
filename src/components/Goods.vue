<template>
    <div class="vender__goods">
        <div class="vender__good" v-for="good in goodList" :key="good.number" :style="getImageUrl(good.image)">
            <div class="vender__good-number">
                {{good.number}}
            </div>
            <div class="vender__good-price">
                {{good.price + "&#8381;"}}
            </div>
        </div>      
    </div>
</template>
<script>
export default {
    name: "Goods",

    methods: {
        getImageUrl(image){
            return "background-image:url(" + require("../assets/"+image) + ")";
        },
    },

    props: {
        goodList: Array,
    }
}
</script>
<style lang="scss">
.vender__goods {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;

    .vender__good {
        position: relative;
        height: 150px;
        width: 150px;
        margin: 30px;
        box-sizing: border-box;

        border: {
            width: 2px;
            color: #999999;
            style: solid;
            radius: 5px;
        }

        background: {
            position: center;
            repeat: no-repeat;
            size: contain;
            image: url(../assets/good_1.png);
        }

        &-number {
            position: absolute;
            right: 10px;
            top: -25px;
            width: 50px;
            height: 50px;
            box-sizing: border-box;

            border-radius: 25px;

            text-align: center;
            line-height: 50px;
            
            background-color: rgb(255, 223, 78);

            color: #333;

            font: {
                size: 24px;
                family: Arial;
                weight: bold;
            }

            text-transform: uppercase;
        }

        &-price {
            position: absolute;
            bottom: 0;
            width: 100%;

            background-color: rgb(255, 223, 78);

            text: {
                transform: uppercase;
                align: center;
            }

            color: #333;

            font: {
                size: 24px;
                family: Arial;
                weight: bold;
            }            
        }
    }
}
</style>