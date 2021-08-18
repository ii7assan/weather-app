<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col sm="12" md="6" lg="4" align="center">
        <WeatherSearchInput />
      </v-col>
      <v-col cols="12" align="center">
        <v-card class="mx-auto" max-width="400">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="text-h4">
                {{ getWeather.name }}
              </v-list-item-title>
              <v-list-item-subtitle class="text-capitalize"
                >{{ dateNow }},
                {{ getWeatherDescription }}</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>

          <v-card-text>
            <v-row align="center">
              <v-col class="text-h3" cols="6"> {{ getTemp }}&deg;C </v-col>
              <v-col cols="6">
                <v-img
                  :src="
                    (isDay > 20) & (isDay < 4)
                      ? require('../assets/moon.png')
                      : 'https://cdn.vuetifyjs.com/images/cards/sun.png'
                  "
                  alt="Sunny image"
                  width="92"
                ></v-img>
              </v-col>
            </v-row>
          </v-card-text>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-send</v-icon>
            </v-list-item-icon>
            <v-list-item-subtitle>{{ getWindSpeed }} km/h</v-list-item-subtitle>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import WeatherSearchInput from "../components/weatherSearchInput.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    WeatherSearchInput,
  },
  data: () => ({}),
  computed: {
    ...mapGetters([
      "getWeather",
      "getTemp",
      "getWindSpeed",
      "getWeatherDescription",
    ]),
    dateNow() {
      return new Date().toDateString();
    },
    isDay() {
      return new Date().getHours();
    },
  },
};
</script>

<style></style>
