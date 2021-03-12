<template>
  <main>
    <div class="weatherContainer">
      {{ weather.name }} - {{ weather.celcius }}°C
    </div>
  </main>
  {{ time }}
  <div v-if="location">
    <iframe
      width="100%"
      height="500"
      style="border:0"
      loading="lazy"
      allowfullscreen
      :src="
        `https://www.google.com/maps/embed/v1/view?center=${location.lat},${location.lon}&zoom=12&key=AIzaSyCXeckAkyZNnAPDyJjl_9bSLYvCwV3nprs`
      "
    >
    </iframe>
  </div>
</template>

<script>
export default {
  props: ["query", "weather", "time", "location"],
};
</script>
