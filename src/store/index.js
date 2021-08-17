import Vue from "vue";
import axios from "axios";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    weather: "",
    search: "",
    token: "",
  },
  mutations: {
    setWeather(state, payload) {
      state.weather = payload;
    },
    setCity(state,message){
      state.search = message
    }
  },
  actions: {
    async weatherNow({ commit,state }) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${state.search}&appid=${state.token}`
        )
        .then((res) => {
          console.log(res);
          commit("setWeather", res);
        });
    },
  },
  getters: {
    getWeather: state => state.weather
  },
  modules: {},
});
