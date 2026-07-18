<script setup>
import AppHeader from "@/components/header/AppHeader.vue";
import AppFooter from "./components/footer/AppFooter.vue";
import AppCalculator from "./components/calculator/AppCalculator.vue";
import CurrencyConvertor from "./components/currency/CurrencyConvertor.vue";
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
}
</style>


