<template>
    <div :class="{slot:true,slot__active:isActive()}">
        <h3>{{getMessage()}}</h3>
        <input id="goodInput" class="input" type="number" @onfocus="isActive()" @keypress="chooseGood()" :disable="isDisabled()" v-model="value">
    </div>   
</template>
<script>
export default {
    name: "PaymentSlot",

    data() {
        return {
            error: null,
            good: 0,
        }
    },

    computed: {
        value: {
            get: function () {
                return this.$store.getters.getGoodInput;
            },
            set: function (newValue) {  
                this.good = newValue;
                this.$store.commit('updateGoodInput', newValue);
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
            if (this.$store.getters.getPayment && !this.$store.getters.getGood) 
                return true;
            return false;
        },
        getMessage() {
            if (!this.error) {
                if (this.$store.getters.getGood) 
                    return "Выбран: " + this.$store.getters.getGood.name + "(" + this.$store.getters.getGood.number + ")";
                return "Выберите товар";
            }
            else {
                return this.error;
            } 
        },        
        chooseGood() {
            if (event.keyCode == 13){         
                this.$store.dispatch("chooseGood", {value: this.good}).then(
                    () => {
                        this.$store.commit('updatePaymentInput', 0);
                        this.$store.commit('updateGoodInput', 0);
                    },
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