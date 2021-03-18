<template>
  <header>
    <div class="header__wrapper">
      <div class="column-1">
        <h1 class="header__title">Weather App</h1>
        <p class="header__p">Search current weather data wherever you want</p>
      </div>
      <div class="column-2">
        <img class="header__img" src="@/assets/img/favicon.png" />
      </div>
    </div>

    <div class="header__inputWrapper">
      <input
        class="header__searchInput"
        spellcheck="false"
        placeholder="Search..."
        :value="query"
        @keypress="
          (e) => {
            this.$emit('input1', e);
          }
        "
      />
    </div>
  </header>
</template>

<script>
export default {
  props: ["query"],
};
</script>
