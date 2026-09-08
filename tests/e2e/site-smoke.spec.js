const { test, expect } = require("@playwright/test")

test("home page renders with core navigation", async ({ page }) => {
  await page.goto("/")
  const nav = page.getByRole("navigation")
  await expect(nav.getByRole("link", { name: "Projects", exact: true })).toBeVisible()
  await expect(nav.getByRole("link", { name: "Apps", exact: true })).toBeVisible()
  await expect(nav.getByRole("link", { name: "Designs", exact: true })).toBeVisible()
})
