<template> </template>

<script>
import axios from "axios";

export default {
  setup() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const coords = position.coords;

        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=b36ca9e34424b82fbc2276da7702e37f`
          )
          .then((res) => {
            console.log(res.data);
          });
      });
    }
  },
};
</script>
