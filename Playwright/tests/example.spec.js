import { expect, test } from "@playwright/test";

test.describe("Google Suite", () => {
  test("Open Google Test", async ({ page }) => {
    const googleURL = "https://www.google.com";
    const searchBar = page.getByLabel("חיפוש", { exact: true });
    const playwrightResults = page.getByRole("link", {
      name: "Playwright: Fast and reliable",
    });

    await page.goto(googleURL);
    await searchBar.click();
    await searchBar.fill("playwhriht");
    await searchBar.press("Enter");
    await expect(playwrightResults).toBeVisible();
  });
});
