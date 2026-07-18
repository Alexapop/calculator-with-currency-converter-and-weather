<template>
  <footer class="app-footer">
    <p class="app-footer__label">
      VersaHub Multi-Service System Engine • Built with Precision &amp; Care
    </p>

    <p class="app-footer__description">
      This is a professional product for arithmetic operations, live currency
      conversion, and real-time regional weather monitoring in Spain.
    </p>
  </footer>
</template>

<style lang="scss" scoped>
.app-footer {
  margin-top: 4rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-brand-surface-high);
  text-align: center;

  &__label {
    margin-bottom: 0;
    color: rgb(30 27 75 / 40%);
    font-family: var(--font-geist);
    font-size: 0.625rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  &__description {
    margin-top: 0.25rem;
    margin-bottom: 0;
    color: rgb(30 27 75 / 35%);
    font-family: var(--font-sans);
    font-size: 0.6875rem;
  }
}
</style>
