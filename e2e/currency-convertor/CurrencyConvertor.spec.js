import { expect, test } from "@playwright/test"

const ratesResponse = {
  date: "2026-07-20 12:00:00+00",
  base: "USD",
  rates: {
    EUR: "0.92",
    USD: "1",
    JPY: "150",
  },
}

async function mockCurrencyApi(page, onRequest = () => {}) {
  await page.route(
    "https://api.currencyfreaks.com/v2.0/rates/latest**",
    async (route) => {
      onRequest()
      await route.fulfill({
        contentType: "application/json",
        body: JSON.stringify(ratesResponse),
      })
    },
  )
}

test.describe("Currency converter", () => {
  test("loads the exchange rates once when the page opens", async ({ page }) => {
    let apiCallCount = 0
    await mockCurrencyApi(page, () => {
      apiCallCount += 1
    })

    await page.goto("/")

    await expect(page.locator("#currency-widget")).toBeVisible()
    await expect.poll(() => apiCallCount).toBe(1)
  })

  test("converts an amount from USD to EUR", async ({ page }) => {
    await mockCurrencyApi(page)
    await page.goto("/")

    await page.locator("#currency-amount").fill("100")

    await expect(page.locator("#currency-widget output")).toHaveText("92")
  })

  test("recalculates with other currencies without another API call", async ({
    page,
  }) => {
    let apiCallCount = 0
    await mockCurrencyApi(page, () => {
      apiCallCount += 1
    })

    await page.goto("/")
    await page.locator("#currency-amount").fill("92")
    await page.locator("#currency-from").selectOption("EUR")
    await page.locator("#currency-to").selectOption("JPY")

    await expect(page.locator("#currency-widget output")).toHaveText("15000")
    expect(apiCallCount).toBe(1)
  })
})
