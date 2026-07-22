<script setup>
import { onMounted, ref } from "vue";
import { getAsturiasForecast } from "../../services/weatherService.js";

const emit = defineEmits(["select-weather"]);

const forecasts = ref([]);
const selectedForecastId = ref("");
const errorMessage = ref("");

const weatherIcons = {
  tormenta: "⛈️",
  lluvia: "🌧️",
  chubasco: "🌧️",
  nieve: "❄️",
  despejado: "☀️",
};

function getWeatherIcon(condition) {
  const text = condition.toLowerCase();

  for (const word in weatherIcons) {
    if (text.includes(word)) {
      return weatherIcons[word];
    }
  }

  return "☁️";
}

function selectForecast(forecast) {
  selectedForecastId.value = forecast.id;
  emit("select-weather", forecast);
}

async function loadForecasts() {
  try {
    forecasts.value = await getAsturiasForecast();

    if (forecasts.value.length) {
      selectForecast(forecasts.value[0]);
    }
  } catch (error) {
    console.error("Weather error:", error);
    errorMessage.value = "Could not load weather information.";
  }
}

onMounted(loadForecasts);
</script>

<template>
  <section class="forecast" aria-labelledby="forecast-title">
    <header class="forecast__header">
      <h2 id="forecast-title">Asturias</h2>
      <span>Interactive Forecasts</span>
    </header>

    <h3>Asturias Forecast</h3>

    <p v-if="errorMessage">
      {{ errorMessage }}
    </p>

    <div v-else class="forecast__list">
      <button
        v-for="forecast in forecasts"
        :key="forecast.id"
        type="button"
        class="forecast__city"
        :class="{
          'forecast__city--selected': forecast.id === selectedForecastId,
        }"
        :aria-pressed="forecast.id === selectedForecastId"
        @click="selectForecast(forecast)"
      >
        <span class="forecast__icon" aria-hidden="true">
          {{ getWeatherIcon(forecast.condition) }}
        </span>

        <span class="forecast__details">
          <strong>{{ forecast.city }}</strong>
          <small>{{ forecast.condition }}</small>
        </span>

        <strong class="forecast__temperature">
          {{ forecast.temperature }}°C
        </strong>
      </button>
    </div>

    <p class="forecast__note">
      Regional weather overview for selected cities in Asturias.
    </p>
  </section>
</template>

<style lang="scss" scoped>
.forecast {
  display: flex;
  height: 100%;
  min-height: 100%;
  flex-direction: column;
  padding: 1.25rem;
  border: 1px solid var(--color-brand-surface-high);
  border-radius: var(--radius-lg);
  background-color: var(--color-brand-surface);
  box-shadow: 0 0.125rem 0.25rem rgb(30 27 75 / 6%);

  > h3 {
    margin: 0 0 0.75rem;
    color: rgb(30 27 75 / 50%);
    font-family: var(--font-sora);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--color-brand-surface-low);

    h2 {
      margin: 0;
      color: var(--color-brand-primary);
      font-family: var(--font-sora);
      font-size: 0.875rem;
      font-weight: 700;
    }

    span {
      color: rgb(30 27 75 / 40%);
      font-family: var(--font-geist);
      font-size: 0.625rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
  }

  &__list {
    display: grid;
    gap: 0.625rem;
  }

  &__city {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem;
    border: 1px solid var(--color-brand-surface-high);
    border-radius: var(--radius-md);
    background-color: var(--color-brand-surface);
    font: inherit;
    text-align: left;
    cursor: pointer;

    &--selected {
      border-color: var(--color-brand-primary);
      background-color: var(--color-brand-surface-low);
      box-shadow: 0 0.0625rem 0.125rem rgb(139 92 246 / 10%);
    }
  }

  &__icon {
    display: inline-flex;
    width: 2rem;
    height: 2rem;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-default);
    color: var(--color-brand-primary);
    background-color: var(--color-brand-surface-low);
    font-size: 1rem;
  }

  &__details {
    display: flex;
    min-width: 0;
    flex: 1;
    flex-direction: column;

    strong {
      color: var(--color-brand-navy);
      font-family: var(--font-sora);
      font-size: 0.875rem;
    }

    small {
      color: rgb(30 27 75 / 55%);
      font-size: 0.6875rem;
    }
  }

  &__temperature {
    color: var(--color-brand-navy);
    font-family: var(--font-sora);
    font-size: 1rem;
  }

  &__note {
    margin: auto 0 0;
    padding-top: 0.75rem;
    border-top: 1px solid var(--color-brand-surface-low);
    color: rgb(30 27 75 / 45%);
    font-size: 0.6875rem;
    line-height: 1.5;
    text-align: center;
  }
}
</style>
