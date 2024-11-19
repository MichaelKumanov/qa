import { expect, test } from "@playwright/test";

test.describe.only("testcafe", () => {
  test("Open test cafe", async ({ page }) => {
    await page.goto("https://devexpress.github.io/testcafe/example/");
    await page.getByTestId("windows-radio").check();
    await page.getByTestId("remote-testing-checkbox").check();
    await page.getByTestId("name-input").click();
    await page.getByTestId("name-input").fill("michael");
    page.once("dialog", (dialog) => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });
    await page.getByTestId("populate-button").click();
    
  });
});
