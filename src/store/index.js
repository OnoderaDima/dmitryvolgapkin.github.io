import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const MODE_INSERTING_BANKNOTES = 0;
const MODE_CHOOSING_GOODS = 1;
const MODE_GETTING_GOODS = 2;

const validBanknotes = [50, 100, 200, 500, 1000];
const coins = [1, 2, 5, 10];

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
        insertBanknote({ commit }, banknote) {
            return new Promise((resolve, reject) => {
                if (validBanknotes.indexOf(parseInt(banknote.value))+1) {
                    commit('updatePayment', this.getters.getPayment + parseInt(banknote.value));
                    resolve(true);
                }
                else {
                    reject(new Error("Не валидная банкнота!"))
                }
            })     
        },        
        chooseGood({ commit }, good) {
            return new Promise((resolve, reject) => {
                let boughtGood = this.getters.getGoods.find(i=>i.number==parseInt(good.value));

                // если товар с данным номером найден
                if (boughtGood) {
                    let priceChange = this.getters.getPayment - boughtGood.price;

                    if (priceChange >= 0) {
                        let change = coins.sort((a, b)=>b - a).map(coin=>{
                            let count = Math.floor(priceChange/coin);
                            priceChange = priceChange%coin;
                        
                            return {coin, count};
                        });
                        commit('updatePayment',0);
                        commit('updateGood',boughtGood);
                        commit('updateChange',change);
                        resolve(true);
                    }    
                    else {
                        reject(new Error("Нехватка средств!"))
                    }             
                }
                else {
                    reject(new Error("Неверный номер товара!"))
                }
            })   
        },   
        takeGood(ctx) {
            ctx.commit('updatePayment',0);
            ctx.commit('updateChange',[]);
            ctx.commit('updateGood',null);
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
        updateChange(state, change) {
            state.change = change;
        },
        updatePaymentInput(state, value) {
            state.paymentInput = value;
        },
        updateGoodInput(state, value) {
            state.goodInput = value;
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
        good: null,
        // сдача
        change: [],
        // поле ввода банкнот
        paymentInput: 0,
        // поле ввода номера товара
        goodInput: 0,
    },
    getters: {
        getPayment(state) {
            return state.payment;
        },
        getGoods(state) {
            return state.data.goods;
        },
        getGood(state) {
            return state.good;
        },
        getMachineMode(state) {
            return state.mode;
        },
        getChange(state) {
            return state.change;
        },
        getPaymentInput(state) {
            return state.getPaymentInput;
        },
        getGoodInput(state) {
            return state.goodInput;
        },
    },
})