<template>
  {{ weather.name }}
  {{ weather.temp }}°C
</template>

<script>
import axios from "axios";
import { ref } from "vue";

export default {
  setup() {
    const weather = ref({});

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const coords = position.coords;

        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=b36ca9e34424b82fbc2276da7702e37f`
          )
          .then((res) => {
            weather.value = res.data;
            weather.value.temp = Math.round(weather.value.main.temp - 273.15);
            console.log(weather.value);
          });
      });
    }

    return { weather };
  },
};
</script>
