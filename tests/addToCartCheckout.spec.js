import { test, expect } from '@playwright/test'
import { LoginPage } from '../page/loginPage.js'
import { InventoryPage } from '../page/inventoryPage.js'
import { ProductPage } from '../page/productPage.js';
import { CheckoutPage } from '../page/checkoutPage.js';


test('add product to cart and checkout', async ({ page }) => {
    const login = new LoginPage(page)
    const inventoryPage = new InventoryPage(page)
    const productPage = new ProductPage(page)
    const checkoutPage = new CheckoutPage(page)

    await page.goto('https://www.saucedemo.com/')
    await login.loginWithUser()
    await inventoryPage.validateInventoryPage()
    await inventoryPage.sortByPriceLowHi()
    await expect(page.getByText('Sauce Labs Onesie')).toBeVisible()
    await inventoryPage.chooseProduct()
    await productPage.addToCart()
    await checkoutPage.checkout()
    await expect(checkoutPage.successMessage).toHaveText('Thank you for your order!')
    

});