<script setup>
defineProps({
  weather: {
    type: Object,
    default: null,
  },
});
</script>

<template>
  <section
    id="weather-widget"
    class="state-sky"
    aria-labelledby="state-sky-title"
  >
    <template v-if="weather">
      <span
        class="state-sky__icon"
        role="img"
        :aria-label="weather.condition"
      >
        {{ weather.icon }}
      </span>

      <div class="state-sky__location">
        <span aria-hidden="true">●</span>
        <h2 id="state-sky-title">
          {{ weather.city }}<small>, Spain</small>
        </h2>
      </div>

      <p class="state-sky__condition">
        {{ weather.condition }}
      </p>

      <p class="state-sky__temperature">
        {{ weather.temperature }}<span>°C</span>
      </p>
    </template>

    <p v-else>Loading weather...</p>
  </section>
</template>

<style lang="scss" scoped>
.state-sky {
  position: relative;
  display: flex;
  min-height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.5rem;
  overflow: hidden;
  border-radius: var(--radius-lg);
  color: #fff;
  background: linear-gradient(135deg, var(--color-brand-primary-dark), var(--color-brand-primary) 55%, var(--color-brand-pink));
  box-shadow: 0 0.5rem 1.5rem rgb(124 58 237 / 18%);
  text-align: center;

  &::before {
    position: absolute;
    top: -2rem;
    right: -2rem;
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    background-color: rgb(255 255 255 / 10%);
    filter: blur(0.75rem);
    content: "";
  }

  &__icon {
    position: absolute;
    top: 1rem;
    right: 1rem;
    display: inline-flex;
    width: 3rem;
    height: 3rem;
    align-items: center;
    justify-content: center;
    border: 1px solid rgb(255 255 255 / 25%);
    border-radius: 50%;
    background-color: rgb(255 255 255 / 12%);
    font-size: 1.5rem;
  }

  &__location {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    > span {
      font-size: 0.75rem;
      opacity: 0.9;
    }

    h2 {
      margin: 0;
      font-family: var(--font-sora);
      font-size: clamp(1.75rem, 4vw, 2.25rem);
      font-weight: 800;
      letter-spacing: -0.025em;
    }

    small {
      color: rgb(255 255 255 / 75%);
      font-size: 1.125rem;
      font-weight: 600;
    }
  }

  &__condition {
    position: relative;
    margin: 0;
    color: rgb(255 255 255 / 85%);
    font-size: 0.875rem;
  }

  &__temperature {
    position: relative;
    margin: 0.25rem 0 0;
    font-family: var(--font-sora);
    font-size: 2rem;
    font-weight: 800;
    line-height: 1;

    span {
      margin-left: 0.125rem;
      color: rgb(255 255 255 / 80%);
      font-size: 0.875rem;
      vertical-align: top;
    }
  }
}

@media (min-width: 992px) {
  .state-sky {
    min-height: 30rem;
  }
}
</style>
