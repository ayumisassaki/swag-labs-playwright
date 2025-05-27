import { test, expect } from '@playwright/test'
import { LoginPage } from '../page/loginPage.js';
import { InventoryPage } from '../page/InventoryPage.js';

test('Login com sucesso', async ({ page }) => {
  const login = new LoginPage(page)
  const inventoryPage = new InventoryPage(page)

  await page.goto('https://www.saucedemo.com/')
  await login.loginWithUser()
  await inventoryPage.checkProductsPage()
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
  
});




