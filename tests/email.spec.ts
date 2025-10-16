import { test, expect } from "@playwright/test";

// This one just checks that local server is working
test("Basic Check: has title", async ({ page }) => {
  await page.goto("/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("It's a title");
});

test.describe("HTML email input internationalization", () => {
  test("accepts IDN domain without punycode", async ({ page }) => {
    await page.goto("/email.html");
    await page.fill("#email", "user@bücher.example");
    await page.click("button[type=submit]");
    await expect(page.locator("#output")).toHaveText(
      "Submitted: user@bücher.example",
    );
  });

  test("accepts IDN domain but converts to punycode", async ({ page }) => {
    await page.goto("/email.html");
    await page.fill("#email", "user@bücher.example");
    await page.click("button[type=submit]");
    await expect(page.locator("#output")).toHaveText(
      "Submitted: user@xn--bcher-kva.example",
    );
  });
});
