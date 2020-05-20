import Vue from 'vue'
import Vuex from 'vuex'
import {LoadingOverlayModule} from "@/store/LoadingOverlayModule";
import {ScannerHandleModule} from "@/store/ScannerHandleModule";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    LoadingOverlay: LoadingOverlayModule,
    ScannerHandler: ScannerHandleModule
  }
})
