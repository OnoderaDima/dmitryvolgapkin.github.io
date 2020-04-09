<template>
    <a :class="{'button':true,'button__disabled':disabled}" @click="onClick">{{value}}</a>
</template>
<script>
export default {
    name: "Button",

    props: {
        value: String,
        disabled: Boolean,
    },

    methods: {
        onClick () {
            if (!this.disabled)
                this.$emit('click')
    },
}
}
</script>
<style lang="scss">
.button {
    display: inline-block;
    padding: 10px;
    letter-spacing: 10px;
    color: #FFFFFF;
    background-color: #e24040;
    cursor: pointer;
    box-sizing: border-box;

    text: {
        transform: uppercase;
        align: center;
    }

    font: {
        size: 14px;
        family: Arial;
    }

    border: {
        width: 2px;
        color: #666;
        radius: 5px;
    }

    &__disabled {
        background-color: #999999!important;
        color: #333!important;
    }

    transition: background-color .5s;
    -webkit-transition: background-color .5s;
    -moz-transition: background-color .5s;
    -o-transition: background-color .5s;            
}

.button:not(.button__disabled):hover {
    color: #333;
    background-color: rgb(255, 221, 29);
}
</style>