<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col sm="12" md="6" lg="4" align="center">
        <WeatherSearchInput width="400" />
      </v-col>
      <v-col cols="12" align="center">
        <v-card class="mx-auto" max-width="400">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="text-h5">
                San Francisco
              </v-list-item-title>
              <v-list-item-subtitle
                >Mon, 12:30 PM, Mostly sunny</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>

          <v-card-text>
            <v-row align="center">
              <v-col class="text-h2" cols="6"> 23&deg;C </v-col>
              <v-col cols="6">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/sun.png"
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
            <v-list-item-subtitle>23 km/h</v-list-item-subtitle>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-cloud-download</v-icon>
            </v-list-item-icon>
            <v-list-item-subtitle>48%</v-list-item-subtitle>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import WeatherSearchInput from "../components/weatherSearchInput.vue";
import {mapGetters} from 'vuex'
export default {
  components: {
    WeatherSearchInput,
  },
  computed: {
      ...mapGetters({weatherData: 'getWeather'})
  }
};
</script>

<style>
</style>