<template>
  <header class="app-header mb-5 d-flex flex-column flex-md-row justify-content-between gap-4">
    <div>
      <div class="d-flex align-items-center gap-2">
        <!-- VersaHub four-square logo -->
        <div class="app-header__logo" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <h1 class="app-header__title mb-0">
          Versa<span>Hub</span>
        </h1>
      </div>

      <p class="app-header__description mt-1 mb-0">
        Professional engine for arithmetic, currency and global weather
      </p>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.app-header {
  color: var(--color-brand-navy);

  &__logo {
    display: grid;
    grid-template-columns: repeat(2, 0.75rem);
    gap: 0.25rem;
    padding: 0.125rem;

    span {
      width: 0.75rem;
      height: 0.75rem;
      border-radius: var(--radius-sm);
      background-color: var(--color-brand-primary);
    }

    span:nth-child(2) {
      opacity: 0.8;
    }

    span:nth-child(3) {
      opacity: 0.6;
    }

    span:nth-child(4) {
      opacity: 0.4;
    }
  }

  &__title {
    font-family: var(--font-sora);
    font-size: 1.5rem;
    font-weight: 800;
    letter-spacing: -0.025em;

    span {
      color: var(--color-brand-primary);
    }
  }

  &__description {
    max-width: 36rem;
    color: rgb(30 27 75 / 60%);
    font-size: 0.875rem;
    line-height: 1.625;
  }
}
</style>

