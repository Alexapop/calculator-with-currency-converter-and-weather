<script setup>
import AppHeader from "@/components/header/AppHeader.vue";
import AppFooter from "./components/footer/AppFooter.vue";
import AppCalculator from "./components/calculator/AppCalculator.vue";
import CurrencyConvertor from "./components/currency/CurrencyConvertor.vue";
</script>

<template>
  <div class="container py-4 py-md-5">
    <AppHeader />

    <main>
      <div class="row g-4">
        <div class="col-12 col-md-6 col-xl-4">
          <AppCalculator />
        </div>
        <div class="col-12 col-md-6 col-xl-4">
          <CurrencyConvertor />
        </div>
      </div>
    </main>

    <AppFooter />
  </div>
</template>


