import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const MODE_INSERTING_BANKNOTES = 0;
const MODE_CHOOSING_GOODS = 1;
const MODE_GETTING_GOODS = 2;

const validBanknotes = [50, 100, 200, 500, 1000];
//const coins = [1, 2, 5, 10];


export default new Vuex.Store({
    actions: {
        async getGoods(ctx, data) { 
            let response = await fetch(data.jsonUrl);
      
            if (response.ok) {
              let json = await response.json();

              ctx.commit('uploadData',json);
            }
            else {
              console.log("Ошибка HTTP: " + response.status);
            }
        },        
        insertBanknote(ctx, banknote) {
            if (validBanknotes.indexOf(parseInt(banknote.value))+1) {
                ctx.commit('updatePayment',banknote.value);
            }
            else {
                alert("Не валидная банкнота");
            }         
        },
        chooseGood(ctx, good) {
            if (this.getters.getGoods.findIndex(i=>i.number==parseInt(good.value))+1) {
                ctx.commit('uploadData',good.value);
            }
        },        
    },
    mutations: {
        uploadData(state, data) {
            state.data = data;
        },
        updatePayment(state, payment) {
            state.mode = MODE_CHOOSING_GOODS;
            state.payment = payment;
        },
        updateGood(state, good) {
            state.mode = MODE_GETTING_GOODS;
            state.good = good;
        },
    },
    state: {
        // параметры
        data: [],
        // режим 
        mode: MODE_INSERTING_BANKNOTES,
        // платеж
        payment: 0,
        // выбранный товар
        good: 0,

    },
    getters: {
        getGoods(state) {
            return state.data.goods;
        },
        getMachineMode(state) {
            return state.mode;
        },
    },
})