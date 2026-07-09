import { test, expect } from "@playwright/test";

test.describe("Calculadora de ahorro de tiempo", () => {
  test("calcula el ahorro de horas al mes y al año", async ({ page }) => {
    // Arrange: abrir la página y preparar los datos de entrada
    await page.goto("/calculator");
    await page.getByTestId("input-clients").fill("20");
    await page.getByTestId("input-quotes").fill("5");
    await page.getByTestId("input-manual-minutes").fill("5");

    // Act: ejecutar el cálculo
    await page.getByTestId("calculate-button").click();

    // Assert: verificar los resultados esperados
    // 20 clientes x 5 cotizaciones = 100/mes
    // manual: 100 x 5 min = 500 min ; sistema: 100 x 0.2 min = 20 min
    // ahorro: 480 min = 8.0 h/mes ; 96.0 h/año
    await expect(page.getByTestId("total-quotes")).toHaveText("100");
    await expect(page.getByTestId("hours-saved-month")).toHaveText("8.0 h");
    await expect(page.getByTestId("hours-saved-year")).toHaveText("96.0 h");
  });

  test("no muestra resultados negativos con valores en cero", async ({ page }) => {
    // Arrange
    await page.goto("/calculator");
    await page.getByTestId("input-clients").fill("0");
    await page.getByTestId("input-quotes").fill("0");

    // Act
    await page.getByTestId("calculate-button").click();

    // Assert
    await expect(page.getByTestId("hours-saved-month")).toHaveText("0.0 h");
    await expect(page.getByTestId("hours-saved-year")).toHaveText("0.0 h");
  });
});