import Vue from "vue";
import axios from "axios";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    weather: "",
    search: "qom",
    token: "",
    temp: "",
    windSpeed: "",
    weatherDescription: "",
  },
  mutations: {
    setWeather(state, payload) {
      state.weather = payload;
    },
    setCity(state, message) {
      state.search = message;
    },
    setTemp(state, payload) {
      state.temp = Math.floor(payload) / 10;
    },
    setWindSpeed(state, payload) {
      state.windSpeed = payload;
    },
    setWeatherDescription(state, payload) {
      state.weatherDescription = payload;
    },
  },
  actions: {
    async weatherNow({ commit, state }) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${state.search}&appid=${state.token}`
        )
        .then((res) => {
          console.log(res);
          commit("setWeather", res.data);
          commit("setTemp", res.data.main.temp);
          commit("setWindSpeed", res.data.wind.speed);
          commit("setWeatherDescription", res.data.weather[0].description);
        });
    },
  },
  getters: {
    getWeather: (state) => state.weather,
    getTemp: (state) => state.temp,
    getWindSpeed: (state) => state.windSpeed,
    getWeatherDescription: (state) => state.weatherDescription,
  },
  modules: {},
});
