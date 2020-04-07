<template>
    <div class="vender__panel">
        <div class="vender__panel-block">
            <h2></h2>
            <Input/>
        </div>
    </div>
</template>
<script>
import Input from '@/components/Input.vue'

export default {
    name: "Panel",

    components: {
        Input,
    },
}
</script>
<style lang="scss">
.vender__panel {
    padding: 10px;

    background-color: #333333;

    border: {
        color: #999999;
        style: solid;
        radius: 4px;
        width: 2px;        
    }
}
</style>