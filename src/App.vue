<script setup>
import { ref } from "vue";
import AppHeader from "@/components/header/AppHeader.vue";
import AppFooter from "./components/footer/AppFooter.vue";
import AppCalculator from "./components/calculator/AppCalculator.vue";
import CurrencyConvertor from "./components/curency-convertor/CurrencyConvertor.vue";
import AppStateSky from "@/components/state-sky/AppStateSky.vue";
import AppForecast from "@/components/forecast/AppForecast.vue";

const selectedWeather = ref(null);

function updateSelectedWeather(weather) {
  selectedWeather.value = weather;
}
</script>

<template>
  <div class="container py-4 py-md-5">
    <div class="page-header">
      <AppHeader />
    </div>

    <main>
      <div class="widgets-row row justify-content-center g-4">
        <div class="col-12 widget-column">
          <AppCalculator />
        </div>
        <div class="col-12 widget-column">
          <CurrencyConvertor />
        </div>
        <div class="col-12 state-sky-column">
          <AppStateSky :weather="selectedWeather" />
        </div>
        <div class="col-12 forecast-column">
          <AppForecast @select-weather="updateSelectedWeather" />
        </div>
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<style lang="scss" scoped>
@media (min-width: 992px) {
  .page-header {
    margin-inline: 5%;
  }

  .widgets-row {
    --bs-gutter-x: 2rem;
  }

  .widget-column {
    flex: 0 0 auto;
    width: 45%;
  }

  .state-sky-column {
    flex: 0 0 auto;
    width: 37.5%;
  }

  .forecast-column {
    flex: 0 0 auto;
    width: 52.5%;
  }
}
</style>


