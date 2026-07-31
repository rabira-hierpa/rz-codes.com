const { test, expect } = require("@playwright/test")

test("home page renders with core navigation", async ({ page }) => {
  await page.goto("/")
  await expect(page.getByRole("link", { name: "Projects" })).toBeVisible()
  await expect(page.getByRole("link", { name: "Apps" })).toBeVisible()
  await expect(page.getByRole("link", { name: "Designs" })).toBeVisible()
})
