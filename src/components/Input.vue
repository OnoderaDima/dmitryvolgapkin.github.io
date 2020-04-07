<template>
    <input class="vender__input" :type="type" v-model="value" :maxlength="max" @keypress="insertBanknote()"> 
</template>
<script>
export default {
    name: "Input",

    data() {
        return {
            value: "",
        }
    },

    props: {
        type: String,
        max: Number,
    },

    methods: {
        insertBanknote() {
            if (event.keyCode == 13){
                this.$store.dispatch('insertBanknote', {value: this.value});
            }
        }
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