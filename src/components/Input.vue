<template>
    <input class="input" :type="type" v-model="value" :disabled="disabled" @keypress="onKeyPress"> 
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
.input {
    padding: 10px;
    text-transform: uppercase;
    letter-spacing: 10px;
    color: #333333;
    background-color: #999999;

    font: {
        size: 16px;
        family: 'a_LCDNovaObl', arial;
    }

    border: {
        width: 2px;
        color: #666;
        radius: 5px;
        style: solid;
    }
}

.input:focus {
    outline: none;
    border-color: rgb(255, 221, 29);
}

.input::-webkit-outer-spin-button,
.input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
</style>