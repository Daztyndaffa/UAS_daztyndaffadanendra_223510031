<template>
  <q-page padding class="bg-grey-8">
    <q-card class="my-card">
      <q-card-section class="text-center">
        <q-icon name="cloud" size="48px" class="q-mb-md text-vuejs-dark"></q-icon>
        <h2 class="text-h4 text-vuejs-dark">Weather Information</h2>
      </q-card-section>
      <q-card-section class="q-pt-none q-pb-none">
        <div class="q-pa-md">
          <q-input v-model="city" label="Enter city" @keyup.enter="fetchWeather" outlined class="q-mb-md text-vuejs-dark"></q-input>
          <div class="text-center">
            <q-btn @click="fetchWeather" label="Get Weather" color="green" class="q-mb-lg"></q-btn>
          </div>
          <div v-if="weather" class="weather-info text-center">
            <h3>{{ weather.name }}</h3>
            <p class="text-orange">{{ weather.main.temp }}°C</p>
            <p>Weather: {{ weather.weather[0].description }}</p>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      city: '',
      weather: null
    };
  },
  methods: {
    async fetchWeather() {
      const apiKey = '94bf6d59f86ae95e8071e78240546056';
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${apiKey}`);
      this.weather = response.data;
    }
  }
};
</script>

<style scoped>
.my-card {
  max-width: 600px;
  margin: auto;
  background-color: #C0C0C0;
  color: var(--q-text);
}
.weather-info {
  background-color: var(--q-dark);
  padding: 20px;
  border-radius: 8px;
  color: var(--q-light);
  text-align: center;
}
.text-center {
  text-align: center;
}
.text-vuejs-dark {
  color: #41b883; /* Warna hijau gelap Vue.js */
}
.text-orange {
  color: #ffa500; /* Warna Orange */
}
.q-pt-none,
.q-pb-none {
  padding-top: 0;
  padding-bottom: 0;
}
</style>
