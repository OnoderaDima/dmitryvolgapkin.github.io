<template>
    <div class="vender__panel">
        <form>
            <div class="vender__panel-block">
                <h2>Вставьте банкноту</h2>
                <Input type="number" max="10" :disabled="(getMachineMode()==0?false:true)" @enter="insertBanknote"/>
             </div>
            <div class="vender__panel-block">
                <h2>Введите номер товара</h2>
                <Input type="number" max="10" :disabled="(getMachineMode()==1?false:true)" @enter="chooseGood"/>
            </div> 
        </form>       
    </div>
</template>
<script>
import Input from '@/components/Input.vue'

export default {
    name: "Panel",

    methods: {
        insertBanknote(data) { 
            if (event.keyCode == 13){         
                this.$store.dispatch("insertBanknote", {value: data.value});
            }
        },

        chooseGood(data) {
            if (event.keyCode == 13){         
                this.$store.dispatch("chooseGood", {value: data.value});
            }
        },

        getMachineMode() {
            return this.$store.getters.getMachineMode;
        },
    },

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