# Calculator with Currency Converter and Weather

## Objective

Create a multifunctional calculator built with Vue.

## Minimum requirements for the calculator

The calculator must support the basic arithmetic operations:
- Addition
- Subtraction
- Multiplication
- Division

Required keys:
- Numeric keys from 0 to 9
- Addition, subtraction, multiplication, and division keys
- Equal sign
- Decimal point key
- CE key to reset the calculator
- Error handling

## Minimum requirements for the currency converter

The currency converter must be integrated into the calculator.

Supported currencies:
- Euro (€)
- Dollar ($)
- Yen (¥)

The app must use the following API:
- https://currencyfreaks.com/

## Minimum requirements for the weather feature

The app must use the following API:
- https://www.el-tiempo.net/api

It must display an image based on the weather state (StateSky).
The user should be able to choose between national weather information and information for a specific province, such as Asturias.

> All elements should be available in a single view.

## Development requirements

- Mobile-first design
- Use Axios to make API calls
- Unit tests
- End-to-end tests

## Extra calculator features

- M+ key to store the current number in memory using Pinia
- MR key to retrieve the saved value
- MC key to clear the stored memory

## Technology stack

The application should be built with Vue 3.
Testing tools:
- Vitest for unit tests
- Playwright for end-to-end tests

Optional UI libraries:
- Bootstrap
- SCSS

## Design
Mockups were created using Google Stitch and AI Studio.

[View Mockups](https://versahub.ai.studio/)

## Deliverables

- GitHub Pages link