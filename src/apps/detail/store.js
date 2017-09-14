import Vue from 'vue';
import Vuex from 'vuex';
import page1 from './modules/page1';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    page1,
  },
});
