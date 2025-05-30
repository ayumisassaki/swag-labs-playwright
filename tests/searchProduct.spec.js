import { test, expect } from '@playwright/test'
import { LoginPage } from '../page/loginPage.js'
import { InventoryPage } from '../page/inventoryPage.js'

test.beforeEach(async ({ page }) => {
  const login = new LoginPage(page)
  const inventoryPage = new InventoryPage(page)

  await page.goto('')
  await login.loginWithUser()
  await inventoryPage.validateInventoryPage()
})

test('Sort products', async ({ page }) => {
  const inventoryPage = new InventoryPage(page)

  await inventoryPage.sortByPriceHiLo()
  await inventoryPage.sortByZA()
  await inventoryPage.sortByAZ()
  await inventoryPage.sortByPriceLowHi()
  await inventoryPage.selectProduct()
  await expect(page.getByText('Sauce Labs Onesie')).toBeVisible()
})