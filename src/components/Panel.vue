<template>
    <div class="vender__panel">
        <div class="vender__panel-block">
            <h2>Вставьте банкноту</h2>
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

    &-block {
        h2 {
            color: #999999;
            letter-spacing: 10px;
            padding: 10px;
            text-align: center;

            font-family: 'a_LCDNovaObl', arial;

            border: {
                color: #999999;
                style: solid;
                radius: 4px;
                width: 2px;        
            }
        }
    }
}
</style>