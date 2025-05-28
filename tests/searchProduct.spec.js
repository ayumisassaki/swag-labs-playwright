import { test, expect } from '@playwright/test'
import { LoginPage } from '../page/loginPage.js'
import { InventoryPage } from '../page/inventoryPage.js'

test('search for a product', async ({ page }) => {
    const login = new LoginPage(page)
    const inventoryPage = new InventoryPage(page)

  await page.goto('https://www.saucedemo.com/')
  await login.loginWithUser()
  await inventoryPage.validateInventoryPage()
  await inventoryPage.sortByPriceHiLo()
  await inventoryPage.sortByZA()
  await inventoryPage.sortByAZ()
  await inventoryPage.sortByPriceLowHi()
  await inventoryPage.chooseProduct()
  await expect(page.getByText('Sauce Labs Onesie')).toBeVisible()

});