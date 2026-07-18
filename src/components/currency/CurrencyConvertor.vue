<template>
  <section id="currency-widget" class="currency" aria-labelledby="currency-title">
    <header class="currency__header">
      <h2 id="currency-title" class="currency__title">
        <span class="currency__icon" aria-hidden="true">$</span>
        Currency
      </h2>
    </header>

    <div class="currency__field">
      <label class="currency__label" for="currency-amount">Amount</label>
      <div class="currency__amount">
        <input id="currency-amount" type="number" placeholder="Enter amount"/>
        <span>USD</span>
      </div>
    </div>

    <div class="currency__field">
      <label class="currency__label" for="currency-from">From</label>
      <div class="currency__selector">
        <select id="currency-from" name="currency-from">
          <option value="EUR">Euro (€)</option>
          <option value="USD" selected>Dólar ($)</option>
          <option value="JPY">Yen (¥)</option>
        </select>
        <span class="currency__chevron" aria-hidden="true">⌄</span>
      </div>
    </div>

    <div class="currency__field">
      <label class="currency__label" for="currency-to">To</label>
      <div class="currency__selector">
        <select id="currency-to" name="currency-to">
          <option value="EUR" selected>Euro (€)</option>
          <option value="USD">Dólar ($)</option>
          <option value="JPY">Yen (¥)</option>
        </select>
        <span class="currency__chevron" aria-hidden="true">⌄</span>
      </div>
    </div>

    <div class="currency__result">
      <span class="currency__result-label">Exchange Result</span>
      <output></output>
      <small>1 USD = 0.9125 EUR • Updated just now</small>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.currency {
  display: flex;
  height: 100%;
  flex-direction: column;
  padding: 1.5rem;
  border: 1px solid var(--color-brand-surface-high);
  border-radius: var(--radius-lg);
  background-color: var(--color-brand-surface);
  box-shadow: 0 0.125rem 0.25rem rgb(30 27 75 / 6%);
  transition: border-color 300ms ease, box-shadow 300ms ease;

  &:hover {
    border-color: var(--color-brand-primary);
    box-shadow: 0 0.5rem 1.875rem rgb(139 92 246 / 8%);
  }

  &__header {
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--color-brand-surface-low);
  }

  &__title {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0;
    color: var(--color-brand-navy);
    font-family: var(--font-sora);
    font-size: 1rem;
    font-weight: 700;
  }

  &__icon {
    display: inline-flex;
    width: 1.5rem;
    height: 1.5rem;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: var(--color-brand-primary);
    background-color: var(--color-brand-surface-low);
    font-size: 0.875rem;
  }

  &__field {
    margin-bottom: 1rem;
  }

  &__label {
    display: block;
    margin-bottom: 0.375rem;
    color: rgb(30 27 75 / 70%);
    font-family: var(--font-geist);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  &__amount {
    display: flex;
    align-items: center;
    padding: 0.125rem;
    border: 1px solid var(--color-brand-surface-high);
    border-radius: var(--radius-md);
    background-color: var(--color-brand-surface-low);

    input {
      width: 100%;
      min-width: 0;
      padding: 0.75rem 1rem;
      border: 0;
      outline: 0;
      color: var(--color-brand-navy);
      background-color: transparent;
      font-family: var(--font-sora);
      font-size: 1.125rem;
      font-weight: 700;

      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        margin: 0;
        appearance: none;
      }
    }

    span {
      padding: 0.5rem 1rem;
      border-radius: var(--radius-default);
      color: var(--color-brand-primary);
      background-color: var(--color-brand-surface);
      box-shadow: 0 0.0625rem 0.125rem rgb(30 27 75 / 8%);
      font-family: var(--font-geist);
      font-size: 0.75rem;
      font-weight: 700;
    }
  }

  &__selector {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    border: 1px solid var(--color-brand-surface-high);
    border-radius: var(--radius-md);
    background-color: var(--color-brand-surface);
    transition: border-color 150ms ease, background-color 150ms ease;

    &:hover {
      border-color: var(--color-brand-primary);
      background-color: var(--color-brand-bg);
    }

    &:focus-within {
      border-color: var(--color-brand-primary);
      box-shadow: 0 0 0 0.2rem rgb(139 92 246 / 15%);
    }

    select {
      width: 100%;
      padding: 0.75rem 2.75rem 0.75rem 1rem;
      border: 0;
      outline: 0;
      appearance: none;
      color: var(--color-brand-navy);
      background-color: transparent;
      font-family: var(--font-sora);
      font-size: 0.875rem;
      font-weight: 600;
      cursor: pointer;
    }
  }

  &__chevron {
    position: absolute;
    right: 1rem;
    color: rgb(30 27 75 / 55%);
    font-size: 1.125rem;
    pointer-events: none;
  }

  &__result {
    margin-top: auto;
    padding: 1rem;
    border: 1px solid var(--color-brand-surface-high);
    border-radius: var(--radius-md);
    background-color: rgb(245 243 255 / 50%);
    text-align: center;

    output {
      display: block;
      min-height: 1.8rem;
      color: var(--color-brand-primary);
      font-family: var(--font-sora);
      font-size: 1.5rem;
      font-weight: 800;
      letter-spacing: -0.025em;
    }

    small {
      display: block;
      margin-top: 0.25rem;
      color: rgb(30 27 75 / 50%);
      font-family: var(--font-geist);
      font-size: 0.625rem;
    }
  }

  &__result-label {
    display: block;
    margin-bottom: 0.25rem;
    color: rgb(30 27 75 / 50%);
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
}
</style>
