import { expect, test } from "@playwright/test";
import { describe } from "node:test";

describe("Google Suite", () => {
  test("Open Google Test", async ({ page }) => {
    await page.goto("https://www.google.com");
  });
});
