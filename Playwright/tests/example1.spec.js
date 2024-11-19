import { expect, test } from "@playwright/test"

test("title test", async ({ page }) => {});

test.describe("Google test", () => {
  test("Valibate login with existing user details", async ({ page }) => {
    await page.goto("https://www.google.com");
  });
});
