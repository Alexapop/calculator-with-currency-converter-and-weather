<template>
  <section id="calculator-widget" class="calculator" aria-labelledby="calculator-title">
    <header class="calculator__header">
      <h2 id="calculator-title" class="calculator__title">
        <span class="calculator__status" aria-hidden="true"></span>
        Calculator
      </h2>
    </header>

    <div class="calculator__display" aria-live="polite">
      <span class="calculator__formula" aria-hidden="true">&nbsp;</span>
      <output class="calculator__result">0</output>
    </div>

    <div class="calculator__keys" aria-label="Calculator keypad">
      <button class="calculator__key calculator__key--memory" type="button">MC</button>
      <button class="calculator__key calculator__key--memory" type="button">MR</button>
      <button class="calculator__key calculator__key--memory" type="button">M+</button>
      <button class="calculator__key calculator__key--clear" type="button">CE</button>

      <button class="calculator__key calculator__key--action" type="button">%</button>
      <button class="calculator__key calculator__key--action" type="button">+/−</button>
      <button class="calculator__key calculator__key--clear" type="button">AC</button>
      <button class="calculator__key calculator__key--operator" type="button">×</button>

      <button class="calculator__key calculator__key--digit" type="button">7</button>
      <button class="calculator__key calculator__key--digit" type="button">8</button>
      <button class="calculator__key calculator__key--digit" type="button">9</button>
      <button class="calculator__key calculator__key--operator" type="button">÷</button>

      <button class="calculator__key calculator__key--digit" type="button">4</button>
      <button class="calculator__key calculator__key--digit" type="button">5</button>
      <button class="calculator__key calculator__key--digit" type="button">6</button>
      <button class="calculator__key calculator__key--operator" type="button">−</button>

      <button class="calculator__key calculator__key--digit" type="button">1</button>
      <button class="calculator__key calculator__key--digit" type="button">2</button>
      <button class="calculator__key calculator__key--digit" type="button">3</button>
      <button class="calculator__key calculator__key--operator" type="button">+</button>

      <button class="calculator__key calculator__key--digit calculator__key--zero" type="button">0</button>
      <button class="calculator__key calculator__key--digit" type="button">.</button>
      <button class="calculator__key calculator__key--equals" type="button">=</button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.calculator {
  display: flex;
  height: 100%;
  flex-direction: column;
  padding: 1.125rem;
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;
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
    font-size: 0.875rem;
    font-weight: 700;
  }

  &__status {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: var(--color-brand-primary);
  }

  &__display {
    position: relative;
    display: flex;
    min-height: 4.75rem;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 1rem;
    padding: 0.75rem;
    overflow: hidden;
    border: 1px solid rgb(221 214 254 / 60%);
    border-radius: var(--radius-md);
    background: linear-gradient(135deg, var(--color-brand-surface-low), var(--color-brand-surface-container));
    text-align: right;

    &::before {
      position: absolute;
      inset: 0;
      background-image: radial-gradient(var(--color-brand-primary) 0.5px, transparent 0.5px);
      background-size: 0.75rem 0.75rem;
      content: "";
      opacity: 0.05;
      pointer-events: none;
    }
  }

  &__formula,
  &__result {
    position: relative;
  }

  &__formula {
    min-height: 1rem;
    margin-bottom: 0.125rem;
    color: rgb(30 27 75 / 40%);
    font-family: var(--font-geist);
    font-size: 0.625rem;
    font-weight: 600;
    letter-spacing: 0.025em;
  }

  &__result {
    color: var(--color-brand-primary);
    font-family: var(--font-sora);
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 1;
  }

  &__keys {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0.5rem;
  }

  &__key {
    padding: 0.625rem 0.25rem;
    border: 1px solid transparent;
    border-radius: var(--radius-default);
    font-family: var(--font-geist);
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.25;
    transition: background-color 150ms ease, border-color 150ms ease, transform 150ms ease;

    &:active {
      transform: scale(0.95);
    }

    &:focus-visible {
      outline: 2px solid var(--color-brand-primary);
      outline-offset: 2px;
    }

    &--memory,
    &--action {
      background-color: var(--color-brand-surface-low);
      font-size: 0.75rem;

      &:hover {
        background-color: var(--color-brand-surface-container);
      }
    }

    &--memory {
      color: rgb(30 27 75 / 60%);
    }

    &--action {
      color: var(--color-brand-primary);
    }

    &--clear {
      color: #e11d48;
      background-color: rgb(255 228 230 / 80%);
      font-size: 0.75rem;

      &:hover {
        background-color: #fecdd3;
      }
    }

    &--operator {
      color: var(--color-brand-primary);
      background-color: var(--color-brand-surface-container);

      &:hover {
        background-color: var(--color-brand-surface-high);
      }
    }

    &--digit {
      border-color: rgb(221 214 254 / 60%);
      color: var(--color-brand-navy);
      background-color: var(--color-brand-surface);
      font-family: var(--font-sora);
      font-weight: 600;

      &:hover {
        background-color: var(--color-brand-surface-low);
      }
    }

    &--zero {
      grid-column: span 2;
    }

    &--equals {
      color: #fff;
      background-color: var(--color-brand-primary);
      box-shadow: 0 0.125rem 0.25rem rgb(139 92 246 / 20%);

      &:hover {
        background-color: var(--color-brand-primary-dark);
      }
    }
  }
}
</style>
