export class ProductPage {
    constructor(page) {
        this.addToCartButton = page.locator("[name='add-to-cart']")  
        
    }

    async addToCart() {
        await this.addToCartButton.click()
    }
}