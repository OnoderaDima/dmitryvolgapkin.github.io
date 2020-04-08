<template>
    <input class="vender__input" :type="type" v-model="value" :maxlength="max" :disabled="disabled" @keypress="onKeyPress"> 
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
        max: String,
        disabled: Boolean,
    },

    methods: {
        onKeyPress () {
            this.$emit('enter', {
                value: this.value,
         })
    },
}
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