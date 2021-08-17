<template>
<form @submit.prevent="search">
<v-text-field
    name="citySearch"
    label="Weather of what city are you looking for?"
    v-model="searchCity"
    solo
  ></v-text-field>
</form>
  
</template>

<script>
import { mapActions } from 'vuex'
export default {
  computed: {
    searchCity: {
      get() {
        return this.$store.state.search;
      },
      set(value) {
        return this.$store.commit("setCity", value);
      },
    },
  },
  methods: {
      ...mapActions({
          search: 'weatherNow'
      }),
  }
};
</script>

<style>
</style>