import { test, expect } from '@playwright/test'
import { LoginPage } from '../../page/loginPage.js';
import { InventoryPage } from '../../page/InventoryPage.js';

test('search product', async ({ page }) => {
    const login = new LoginPage(page)
    const inventoryPage = new InventoryPage(page)

  await page.goto('https://www.saucedemo.com/')
  await login.loginWithUser()
  await inventoryPage.validateInventoryPage()
  await expect(page.getByText('Sauce Labs Onesie')).toBeVisible()

});