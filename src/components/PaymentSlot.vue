<template>
    <div :class="{slot:true,slot__active:isActive()}">
        <h3>{{getMessage()}}</h3>
        <input id="paymentInput" class="input" type="number" :disabled="isDisabled()" @onfocus="isActive()" @keypress="insertBanknote()" v-model="value"> 
    </div>   
</template>
<script>
export default {
    name: "PaymentSlot",

    data() {
        return {
            error: null,
            banknote: 0,
        }
    },

    computed: {

        value: {
            get: function () {
                return this.$store.getters.getPaymentInput;
            },
            set: function (newValue) { 
                this.banknote = newValue;
                this.$store.commit('updatePaymentInput', newValue);
            }
        },
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
        insertBanknote() {
            if (event.keyCode == 13){         
                this.$store.dispatch("insertBanknote", {value:this.banknote}).catch(
                    error => {
                        
                        this.error = error;
                        setTimeout(()=>this.error=null,2500);
                    }
                );

            }
        },
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