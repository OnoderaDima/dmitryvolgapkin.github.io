import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const validBanknotes = [50, 100, 200, 500, 1000];

export default new Vuex.Store({
    actions: {
        insertBanknote(ctx, banknote) {
            if (validBanknotes.indexOf(parseInt(banknote.value))+1) {
                alert("Валидная банкнота");
            }
            else {
                alert("Не валидная банкнота");
            }
            ctx.commit('updatePayment',banknote);
        },
    },
    mutations: {
        updatePayment(state, payment) {
            state.payment = payment;
        },
    },
    state: {
        // платеж
        payment: 0,
    },
    getters: {
       /* getH1Content(state) {
            return state.h1Content;
        }, */
    },
})