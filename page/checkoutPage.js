const testdata= JSON.parse(JSON.stringify(require("../testdata.json")))

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
        this.successMessage = page.locator('[data-test="complete-header"]')
        
    }
        async checkout() { 
        await this.cartIcon.click()
        await this.checkoutButton.click()
        await this.firstNameField.type('firsName')
        await this.lastNameField.type('lastName')
        await this.postalCodeField.type('postalCode')
        await this.continueButton.click()
        await this.finishButton.click()
       
    }
}
