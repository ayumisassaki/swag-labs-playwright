import { test, expect } from '@playwright/test'
import { LoginPage } from '../../page/loginPage';

test('Login com sucesso', async ({ page }) => {
  const login = new LoginPage(page)

  await page.goto('https://www.saucedemo.com/')
  await login.loginWithUser()
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
  
});




