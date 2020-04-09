<template>
    <div :class="{slot:true,slot__active:isActive()}">
        <h3>{{getMessage()}}</h3>
        <Input type="number" @enter="insertBanknote" :disabled="isDisabled()"/> 
    </div>   
</template>
<script>
import Input from '@/components/Input.vue'

export default {
    name: "PaymentSlot",

    data() {
        return {
            error: null,
        }
    },

    methods: {
        isDisabled() {
            if (this.$store.getters.getGood)
                return true;
            return false;
        },        
        isActive() {
            if (!this.$store.getters.getPayment && !this.$store.getters.getGood) 
                return true;
            return false;
        },        
        getMessage() {
            if (!this.error) {
                if (this.$store.getters.getPayment) 
                    return "Внесено: " + this.$store.getters.getPayment + "р";
                return "Внесите банкноты";
            }
            else {
                return this.error;
            } 
        },
        insertBanknote(data) { 
            if (event.keyCode == 13){         
                this.$store.dispatch("insertBanknote", {value: data.value}).catch(
                    error => {
                        this.error = error;
                        setTimeout(()=>this.error=null,2500);
                    }
                );
            }
        },
    },    

    components: {
        Input,
    },
}
</script>
<style lang="scss">
    .slot {
        h3 {
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
    
        &__active {
            h3 {
                animation: lighting 2s  infinite; 
            }

            @keyframes lighting{
                0% {
                    background-color: transparent;
                    color: #999999;
                }

                50% {
                    background-color: rgb(255, 221, 29);
                    color: #000000;
                }

                100% {
                    background-color: transparent;
                    color: #999999;
                }
            }
        } 
    }
</style>