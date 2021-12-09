import Vue from "vue";
import Vuex from "vuex";
import dbVideo from "@/modules/video/dbVideo"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    dbVideo
  }
});
