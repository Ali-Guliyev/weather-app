<template>
  <Header @input="changeQuery" :query="query" />
  <Main :weather="weather" :query="query" />
</template>

<script>
import { ref } from "vue";
import Header from "./Header.vue";
import Main from "./Main";
import WeatherService from "@/services/WeatherService";

export default {
  components: { Header, Main },
  setup() {
    const query = ref("");
    const weather = ref({});
    const time = ref({});

    const getWeatherDetails = (res) => {
      // GETTING TIME BY TIMEZONES AND COUNTRIES
      const ct = require("countries-and-timezones");
      const country = ct.getCountry(res.sys.country);

      const date = new Date();
      const utcTime = date.getTime() + date.getTimezoneOffset() * 60000;
      const timeOffset = ct.getTimezone(country.timezones[0]).utcOffset / 60;
      const currentTime = new Date(utcTime + 3600000 * timeOffset);
      const time = `${currentTime.getHours()}:${currentTime.getMinutes()}`;
      console.log(time);

      // ADDING THE DATA TO THE WEATHER REF
      weather.value = {
        name: `${res.name}, ${res.sys.country}`,
        celcius: Math.round(res.main.temp - 273.15),
        fahrenheit: Math.round(((res.main.temp - 273.15) * 9) / 5 + 32),
        description: res.weather[0].description,
        icon: `https://openweathermap.org/img/wn/${res.weather[0].icon}.png`,
        humidity: res.main.humidity,
        windspeed: res.wind.speed,
        time: time,
      };
    };

    // Get Weather By Current Location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        WeatherService.getWeatherByLocation(
          position.coords.longitude,
          position.coords.latitude
        ).then((res) => {
          getWeatherDetails(res.data);
        });
      });
    }

    // Get Weather By Input Search
    const handleSearch = () => {
      WeatherService.getWeatherByQuery(query.value).then((res) => {
        console.log(res.data);
        getWeatherDetails(res.data);
      });
    };

    // Change Query
    const changeQuery = (e) => {
      query.value = e.target.value;

      if (e.key == "Enter") {
        handleSearch();
      }
    };

    return { query, changeQuery, weather, handleSearch };
  },
};
</script>
