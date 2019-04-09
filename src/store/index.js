import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import classify from './modules/classify'
import cart from './modules/cart'
import mine from './modules/mine'



Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        home,
        classify,
        cart,
        mine
    }
});


export default store;