import { test, expect } from '@playwright/test'
import { LoginPage } from '../page/loginPage.js'
import { InventoryPage } from '../page/inventoryPage.js'
import { ProductPage } from '../page/productPage.js';
import { CheckoutPage } from '../page/checkoutPage.js';

test.beforeEach(async ({ page }) => {
  const login = new LoginPage(page)
  const inventoryPage = new InventoryPage(page)

  await page.goto('')
  await login.loginWithUser()
  await inventoryPage.validateInventoryPage()
})

test('add product to cart and checkout', async ({ page }) => {
    const inventoryPage = new InventoryPage(page)
    const productPage = new ProductPage(page)
    const checkoutPage = new CheckoutPage(page)

    await inventoryPage.sortByPriceLowHi()
    await expect(page.getByText('Sauce Labs Onesie')).toBeVisible()
    await expect(page.getByText('$7.99')).toBeVisible()
    await inventoryPage.selectProduct()
    await productPage.addToCart()
    await checkoutPage.checkout()
    await expect(checkoutPage.successMessage).toHaveText('Thank you for your order!')
    

});