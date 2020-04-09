<template>
    <div class="vender__panel">
        <form>
            <div class="vender__panel-block">
                <PaymentSlot/>
             </div>
            <div class="vender__panel-block">
                <GoodSlot/>
            </div> 
            <div class="vender__panel-block vender__panel-block_double">
                <CoinsOutput/>
                <GoodOutput/>
            </div>    
            <div class="vender__panel-block">
                <Button :disabled="isActive()" @click="takeGood()" value="Взять товар"/>
            </div>         
        </form>       
    </div>
</template>
<script>
import PaymentSlot from '@/components/PaymentSlot.vue'
import GoodSlot from '@/components/GoodSlot.vue'
import CoinsOutput from '@/components/CoinsOutput.vue'
import GoodOutput from '@/components/GoodOutput.vue'
import Button from '@/components/Button.vue'

export default {
    name: "Panel",

    methods: {
        isActive() { 
            if (!this.$store.getters.getGood) 
                return true;
            return false;
        },
        takeGood() {
            this.$store.dispatch("takeGood");
        },
    },

    components: {
        PaymentSlot,
        GoodSlot,
        CoinsOutput,
        GoodOutput,
        Button,
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
        padding: 10px;

        &_double {
            display: flex;
            justify-content: space-around;
        }

        input.input {
            width: 100%;
            box-sizing: border-box;
        }

        a.button {
            width: 100%;
        }
    }
}
</style>