export class InventoryPage {
    constructor(page) {
        this.page = page
        this.productsHeader = page.locator("[data-test='title']")
        this.productSortContainer = page.locator("[data-test='product-sort-container']")
        this.selectproduct = page.locator("[alt='Sauce Labs Onesie']")

    }

    async validateInventoryPage() {
        await this.productsHeader.waitFor()
        await this.productSortContainer.selectOption('lohi')
        await this.selectproduct.click()

    }


}