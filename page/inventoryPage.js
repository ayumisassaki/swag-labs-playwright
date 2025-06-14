export class InventoryPage {
    constructor(page) {
        this.page = page
        this.productsHeader = page.locator("[data-test='title']")
        this.productSortContainer = page.locator("[data-test='product-sort-container']")
        this.itemPrices = page.locator('.inventory_item_price')
        this.selectproduct = page.getByAltText('Sauce Labs Onesie')
        
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

    async checkLoHiprice() {
    const priceTexts = await this.itemPrices.evaluateAll(nodes =>
      nodes.slice(0, 2).map(n =>
        parseFloat(n.textContent.replace('$', '').replace(',', '.'))
      )
    );
    return priceTexts;
  }

    async selectProduct() {
        await this.selectproduct.click()
    }

}
    