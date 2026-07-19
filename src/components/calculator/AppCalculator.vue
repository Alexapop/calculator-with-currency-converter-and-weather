
<script setup>
import { ref } from "vue";
import { calculate } from "./calculator-operations.js";

const MAXIMUM_DIGITS = 12;
const displayValue = ref("0");
const formula = ref("");

let firstOperand = null;
let selectedOperator = null;
let waitingForSecondOperand = false;
let memoryValue = 0;
let hasError = false;

function getOperatorSymbol(operator) {
  switch (operator) {
    case "/":
      return "÷";
    case "*":
      return "×";
    case "-":
      return "−";
    default:
      return operator;
  }
}

function formatNumber(number) {
  const roundedNumber = Number(number.toFixed(10));
  return String(roundedNumber);
}

function resetCalculator() {
  displayValue.value = "0";
  formula.value = "";
  firstOperand = null;
  selectedOperator = null;
  waitingForSecondOperand = false;
  hasError = false;
}

function showError(message) {
  displayValue.value = "Error";
  formula.value = message;
  firstOperand = null;
  selectedOperator = null;
  waitingForSecondOperand = true;
  hasError = true;
}

function handleDigit(digit) {
  if (hasError) {
    resetCalculator();
  }

  if (waitingForSecondOperand) {
    displayValue.value = digit;
    waitingForSecondOperand = false;
    return;
  }

  if (displayValue.value === "0") {
    displayValue.value = digit;
    return;
  }

  const numberOfDigits = displayValue.value.replace(".", "").length;

  if (numberOfDigits < MAXIMUM_DIGITS) {
    displayValue.value += digit;
  }
}

function handleDecimal() {
  if (hasError) {
    resetCalculator();
  }

  if (waitingForSecondOperand) {
    displayValue.value = "0.";
    waitingForSecondOperand = false;
    return;
  }

  if (!displayValue.value.includes(".")) {
    displayValue.value += ".";
  }
}

function performCalculation(secondOperand) {
  try {
    const result = calculate(firstOperand, secondOperand, selectedOperator);

    if (!Number.isFinite(result)) {
      throw new Error("Result is too large");
    }

    return result;
  } catch (error) {
    showError(error.message);
    return null;
  }
}

function handleOperator(operator) {
  if (hasError) {
    return;
  }

  const currentValue = Number(displayValue.value);

  if (selectedOperator !== null && waitingForSecondOperand) {
    selectedOperator = operator;
    formula.value = `${formatNumber(firstOperand)} ${getOperatorSymbol(operator)}`;
    return;
  }

  if (firstOperand === null) {
    firstOperand = currentValue;
  } else if (selectedOperator !== null) {
    const result = performCalculation(currentValue);

    if (result === null) {
      return;
    }

    displayValue.value = formatNumber(result);
    firstOperand = result;
  }

  selectedOperator = operator;
  waitingForSecondOperand = true;
  formula.value = `${displayValue.value} ${getOperatorSymbol(operator)}`;
}

function handleEquals() {
  if (
    hasError ||
    firstOperand === null ||
    selectedOperator === null ||
    waitingForSecondOperand
  ) {
    showError("Incomplete operation");
    return;
  }

  const secondOperand = Number(displayValue.value);
  const operationFormula = `${formatNumber(firstOperand)} ${getOperatorSymbol(selectedOperator)} ${displayValue.value} =`;
  const result = performCalculation(secondOperand);

  if (result === null) {
    return;
  }

  displayValue.value = formatNumber(result);
  formula.value = operationFormula;
  firstOperand = null;
  selectedOperator = null;
  waitingForSecondOperand = true;
}

function handleReset() {
  resetCalculator();
}

function handleMemoryClear() {
  memoryValue = 0;
}

function handleMemoryRecall() {
  if (hasError) {
    resetCalculator();
  }

  displayValue.value = formatNumber(memoryValue);
  waitingForSecondOperand = false;
}

function handleMemoryAdd() {
  if (hasError) {
    return;
  }

  memoryValue += Number(displayValue.value);

  if (!Number.isFinite(memoryValue)) {
    memoryValue = 0;
    showError("Memory limit exceeded");
  }
}
</script>

<template>
  <section
    id="calculator-widget"
    class="calculator"
    aria-labelledby="calculator-title"
  >
    <header class="calculator__header">
      <h2 id="calculator-title" class="calculator__title">
        <span class="calculator__status" aria-hidden="true"></span>
        Calculator
      </h2>
    </header>

    <div class="calculator__display" aria-live="polite">
      <span class="calculator__formula">{{ formula || "\u00a0" }}</span>
      <output class="calculator__result">{{ displayValue }}</output>
    </div>

    <div class="calculator__keys" aria-label="Calculator keypad">
      <button
        class="calculator__key calculator__key--clear"
        type="button"
        @click="handleReset"
      >
        CE
      </button>
      <button
        class="calculator__key calculator__key--memory"
        type="button"
        @click="handleMemoryClear"
      >
        MC
      </button>
      <button
        class="calculator__key calculator__key--memory"
        type="button"
        @click="handleMemoryRecall"
      >
        MR
      </button>
      <button
        class="calculator__key calculator__key--memory"
        type="button"
        @click="handleMemoryAdd"
      >
        M+
      </button>
      <button
        class="calculator__key calculator__key--digit"
        type="button"
        @click="handleDigit('7')"
      >
        7
      </button>
      <button
        class="calculator__key calculator__key--digit"
        type="button"
        @click="handleDigit('8')"
      >
        8
      </button>
      <button
        class="calculator__key calculator__key--digit"
        type="button"
        @click="handleDigit('9')"
      >
        9
      </button>

      <button
        class="calculator__key calculator__key--operator"
        type="button"
        @click="handleOperator('/')"
      >
        ÷
      </button>
      <button
        class="calculator__key calculator__key--digit"
        type="button"
        @click="handleDigit('4')"
      >
        4
      </button>

      <button
        class="calculator__key calculator__key--digit"
        type="button"
        @click="handleDigit('5')"
      >
        5
      </button>
      <button
        class="calculator__key calculator__key--digit"
        type="button"
        @click="handleDigit('6')"
      >
        6
      </button>

      <button
        class="calculator__key calculator__key--operator"
        type="button"
        @click="handleOperator('*')"
      >
        ×
      </button>
      <button
        class="calculator__key calculator__key--digit"
        type="button"
        @click="handleDigit('1')"
      >
        1
      </button>
      <button
        class="calculator__key calculator__key--digit"
        type="button"
        @click="handleDigit('2')"
      >
        2
      </button>
      <button
        class="calculator__key calculator__key--digit"
        type="button"
        @click="handleDigit('3')"
      >
        3
      </button>
      <button
        class="calculator__key calculator__key--operator"
        type="button"
        @click="handleOperator('-')"
      >
        −
      </button>

      <button
        class="calculator__key calculator__key--digit"
        type="button"
        @click="handleDigit('0')"
      >
        0
      </button>
      <button
        class="calculator__key calculator__key--digit"
        type="button"
        @click="handleDecimal"
      >
        .
      </button>
      <button
        class="calculator__key calculator__key--equals"
        type="button"
        @click="handleEquals"
      >
        =
      </button>
      <button
        class="calculator__key calculator__key--operator"
        type="button"
        @click="handleOperator('+')"
      >
        +
      </button>
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
  transition:
    border-color 300ms ease,
    box-shadow 300ms ease;

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
    background: linear-gradient(
      135deg,
      var(--color-brand-surface-low),
      var(--color-brand-surface-container)
    );
    text-align: right;

    &::before {
      position: absolute;
      inset: 0;
      background-image: radial-gradient(
        var(--color-brand-primary) 0.5px,
        transparent 0.5px
      );
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
    transition:
      background-color 150ms ease,
      border-color 150ms ease,
      transform 150ms ease;

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
