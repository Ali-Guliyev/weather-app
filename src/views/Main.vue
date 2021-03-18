<template>
  <main>
    <div class="main__container">
      <div class="column-1"></div>
      <div class="column-2"></div>
    </div>

    <div v-if="position" class="main__map">
      <iframe
        style="border: 0"
        loading="lazy"
        allowfullscreen
        :src="
          `https://www.google.com/maps/embed/v1/view?center=${position.lat},${position.lon}&zoom=10&key=AIzaSyCXeckAkyZNnAPDyJjl_9bSLYvCwV3nprs`
        "
      >
      </iframe>
    </div>
  </main>
</template>

<script>
export default {
  props: ["query", "weather", "time", "position"],
};
</script>
