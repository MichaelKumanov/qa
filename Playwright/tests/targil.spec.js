import { expect, test } from "@playwright/test";

// helek 1
// test.describe.only("testcafe", () => {
//   test("Open test cafe", async ({ page }) => {
//     await page.goto("https://devexpress.github.io/testcafe/example/");
//     await page.getByTestId("windows-radio").check();
//     await page.getByTestId("remote-testing-checkbox").check();
//     await page.getByTestId("name-input").click();
//     await page.getByTestId("name-input").fill("michael");
//     page.once("dialog", (dialog) => {
//       console.log(`Dialog message: ${dialog.message()}`);
//       dialog.dismiss().catch(() => {});
//     });
//     await page.getByTestId("populate-button").click();

//   });
// });

//helek 2
// test.describe.only("testcafe", () => {
//   test("Open test cafe", async ({ page }) => {
//     await page.goto("https://devexpress.github.io/testcafe/example/");
//     await expect(page.locator("#main-form")).toContainText(
//       "What is your primary Operating System: Windows MacOS Linux"
//     );
//     await page.getByTestId("macos-radio").check();
//     await page.pause();
//   });
// });

//helek 3

// test("Open test cafe ", async ({ page }) => {
//   await page.goto("https://devexpress.github.io/testcafe/example/");
//   await page
//     .getByTestId("preferred-interface-select")
//     .selectOption("JavaScript API");
//   await page.pause();
// });

//helek 4

// test('Open test cafe', async ({ page }) => {
//     await page.goto('https://devexpress.github.io/testcafe/example/');
//     await page.locator('div').filter({ hasText: '2 3 4 5 6 7 8 9 10' }).nth(2).click();
//     await page.locator('div').filter({ hasText: '2 3 4 5 6 7 8 9 10' }).nth(2).click();
//     await page.locator('div').filter({ hasText: '2 3 4 5 6 7 8 9 10' }).nth(2).click();
//     await page.pause()
//   });

//helek 5

// test('test', async ({ page }) => {
//     await page.goto('https://devexpress.github.io/testcafe/example/');
//     await page.getByTestId('tried-testcafe-checkbox').check();
//     await page.locator('#slider').click();
//     await page.pause()
//   });

//helek 6

// test("test", async ({ page }) => {
//   await page.goto("https://devexpress.github.io/testcafe/example/");
//   await page.getByTestId("name-input").click();
//   await page.getByTestId("name-input").fill("michael ");
//   await page.getByTestId("tried-testcafe-checkbox").check();
//   await page.locator("#slider").click();
//   await page.getByTestId("comments-area").click();
//   await page
//     .getByTestId("comments-area")
//     .fill(
//       "i think this coffee is very good\nbut a love the black coffee \nand i like ice latte."
//     );
// });

//helek 7

// test("test", async ({ page }) => {
//   await page.goto("https://devexpress.github.io/testcafe/example/");
//   await page.getByTestId("submit-button").click();
// });

//helek 8

// test("test", async ({ page }) => {
//   await page.goto("https://devexpress.github.io/testcafe/example/");
//   await page.getByTestId("name-input").click();
//   await page.getByTestId("name-input").type("michael");
//   await page.getByTestId("macos-radio").check();
//   await page
//     .getByTestId("preferred-interface-select")
//     .selectOption("JavaScript API");
//   await page.getByTestId("analysis-checkbox").check();
//   await page.getByTestId("tried-testcafe-checkbox").check();
//   await page.getByTestId("comments-area").click();
//   await page.getByTestId("comments-area").fill("Hello World!");
//   await page.getByTestId("submit-button").click();
// });

//helek 9

// test("test", async ({ page }) => {
//   await page.goto("https://devexpress.github.io/testcafe/example/");
//   await page.getByTestId("name-input").click();
//   await page.getByTestId("name-input").type("michael");
//   page.once("dialog", (dialog) => {
//     console.log(`Dialog message: ${dialog.message()}`);
//     dialog.dismiss().catch(() => {});
//   });
//   await page.getByTestId("populate-button").click();
//   await page.getByTestId("macos-radio").check();
//   await page
//     .getByTestId("preferred-interface-select")
//     .selectOption("JavaScript API");
//   await page.getByTestId("analysis-checkbox").check();
//   await page.getByTestId("tried-testcafe-checkbox").check();
//   await page.locator("#slider").click();
//   await page.getByTestId("comments-area").click();
//   await page.getByTestId("comments-area").fill("Hello World!");
//   await page.getByTestId("submit-button").click();
//   await page.pause()
// });
