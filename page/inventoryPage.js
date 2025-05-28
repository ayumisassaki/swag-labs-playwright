export class InventoryPage {
    constructor(page) {
        this.page = page
        this.productsHeader = page.locator("[data-test='title']")
        this.productSortContainer = page.locator("[data-test='product-sort-container']")
        this.selectproduct = page.locator("[alt='Sauce Labs Onesie']")

    }

    async validateInventoryPage() {
        await this.productsHeader.waitFor()
    }

    async sortByPriceHiLo() {
        await this.productSortContainer.selectOption('hilo') 
    }

    async sortByPriceLowHi() {
        await this.productSortContainer.selectOption('lohi')
    }

    async sortByAZ() {
        await this.productSortContainer.selectOption('az')
    }

    async sortByZA() {
        await this.productSortContainer.selectOption('za')
    }

    async chooseProduct() {
        await this.selectproduct.click()
    }
    


}