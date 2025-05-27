export class InventoryPage {
    constructor(page) {
        this.page = page
        this.productsHeader = page.locator("[data-test='title']")
        this.productSortContainer = page.locator("[data-test='product-sort-container']")
        
    }

    async checkProductsPage() {
        await  this.productsHeader.waitFor()
        await this.productSortContainer.click()
    
    }
}