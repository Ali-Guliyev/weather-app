<template>
  <main>
    <div class="weatherContainer">
      {{ weather.name }} - {{ weather.celcius }}°C
    </div>
  </main>
  {{ weather.time }}
</template>

<script>
export default {
  props: ["query", "weather"],
};
</script>
