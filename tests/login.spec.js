import { test, expect } from '@playwright/test'
import { LoginPage } from '../page/loginPage'

test('Login com sucesso', async ({ page }) => {
  const login = new LoginPage(page)

  await page.goto('')
  await login.loginWithUser()
  await expect(page).toHaveURL('/inventory.html')
  
});




