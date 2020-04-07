<template>
    <input class="vender__input" :type="type" :value="value" :maxlength="max"> 
</template>
<script>
export default {
    name: "Input",

    props: {
        type: String,
        value: String,
        max: Number,
    },
}
</script>
<style lang="scss">
.vender__input {
    padding: 10px;
    text-transform: uppercase;
    letter-spacing: 10px;
    color: #333333;
    background-color: #999999;

    font: {
        size: 32px;
        family: 'a_LCDNovaObl', arial;
    }

    border: {
        width: 2px;
        color: #666;
        radius: 5px;
    }
}
</style>