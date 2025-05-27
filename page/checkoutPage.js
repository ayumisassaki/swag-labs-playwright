export class CheckoutPage {
    constructor(page) {
        this.page = page
        this.cartIcon = page.locator("[data-test='shopping-cart-link']")
        this.checkoutButton = page.locator('.checkout_button')
        this.firstNameField = page.locator("[name='firstName']")
        this.lastNameField = page.locator("[name='lastName']")
        this.postalCodeField = page.locator("[data-test='postalCode']")
        this.continueButton = page.locator("[name='continue']")
        this.finishButton = page.locator("[name='finish']")
        
    }
        async checkout() { 
        await this.cartIcon.click()
        await this.checkoutButton.click()
        await this.firstNameField.type('Tatiana')
        await this.lastNameField.type('Sassaki')
        await this.postalCodeField.type('123456')
        await this.continueButton.click()
        await this.finishButton.click()
        await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html')
        await expect(page.getByText('Thank you for your order!')).toBeVisible()
        
    }
}
