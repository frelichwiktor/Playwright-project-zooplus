import { test, expect } from "@playwright/test";

exports.productPage = class productPage {

  constructor(page) {
    this.page = page;
    this.popup_accept_button = page.locator('#onetrust-accept-btn-handler')
    this.productName = page.locator('[data-zta="productTitle"')
    this.productSummary = page.locator('data-zta="productCardSummary"')
    this.productIngridients = page.locator('data-zta="productAnchorsIngredients"')

  }

  async goto() {
    await this.page.goto("https://www.zooplus.pl/shop/koty/karma_dla_kota_mokra/purizon/adult/1224918?origin=hopps&q=purizon&i=7&ro=10")
  }

  async acceptCookies() {
    const popupAcceptButton = this.popup_accept_button;
    await expect(popupAcceptButton).toBeVisible()
    await popupAcceptButton.click()
  }

  async clickIngridients(){
    await this.page.productIngridients.click()
  }
}