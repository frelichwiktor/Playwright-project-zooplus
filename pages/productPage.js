import { test, expect } from "@playwright/test";

exports.productPage = class productPage {

  constructor(page) {
    this.page = page;
    this.popup_accept_button = page.locator('#onetrust-accept-btn-handler')
    this.quantitiyDecrease_button = page.locator('[data-zta="quantityStepperDecrementButton"]')
    this.addToCart_button = page.locator('[data-zta="add-to-cart-button"]')
    this.quantityIncrease_button = page.locator('[data-zta="quantityStepperIncrementButton"]')
    this.ingredients_button = page.locator('[data-zta="productAnchorsIngredients"]')
    this.productFeedingRecommendations_button = page.locator('[data-zta="productAnchorsFeedingRecommendation"]')
    this.productName_text = page.locator('[data-zta="productTitle"]')
    this.productSummary_text = page.locator('[data-zta="productCardSummary"]')
    this.ratingStars_text = page.locator('[data-zta="productRatingTeaser"]')
    this.zooplusAboBanner_text = page.locator('#autoshipment-banner')
    this.quantityCounter_text = page.locator('[data-zta="quantityStepperInput"]')
    this.popupProductInCart_text = page.locator('[data-testid="addToCartPopoverText"]')
    this.mixed_set = page.locator('[id="3709165"]')
    this.chickenFish_set = page.locator('[id="3709163"]')
    this.chickenTurkey_set = page.locator('[id="3709272"]')
    this.feedingRecommendation_section = page.locator(['data-zta="feedingrecommendation"'])
    this.ingredients_section = page.locator('#ingredients')
    this.productRecommendation_section = page.locator('[data-zta="feedingrecommendation"]')
  }

  async goToPage() {
    await this.page.goto("https://www.zooplus.pl/shop/koty/karma_dla_kota_mokra/purizon/adult/1224918?origin=hopps&q=purizon&i=7&ro=10")
  }

  async acceptCookies() {
    await expect(this.popup_accept_button).toBeVisible()
    await this.popup_accept_button.click()
  }

  async productNameIsCorrect(productName){
    await expect(this.productName_text).toHaveText(`${productName}`);
  }

  async productSummaryHaveText(text){
    await expect(this.productSummary_text).toBeVisible()
    await expect(this.productSummary_text).toContainText(`${text}`);
  }

  async specificProductIngredientsAreVisible(ingridient){
    await expect(this.ingredients_button).toBeVisible()
    await this.ingredients_button.click()
    await expect(this.ingredients_section).toBeVisible();
    await expect(this.ingredients_section).toContainText(`${ingridient}`);
  }

  async productFeedingRecommendationsAreVisible(recommendation){
    await expect(this.productFeedingRecommendations_button).toBeVisible()
    await this.productFeedingRecommendations_button.click()
    await expect(this.productRecommendation_section).toBeVisible();
    await expect(this.productRecommendation_section).toContainText(`${recommendation}`);
  }

  async ratingStarsAreVisible(){
    await expect(this.ratingStars_text).toBeVisible()
  }

  async zooplusAboBannerIsVisible(){
    await expect(this.zooplusAboBanner_text).toBeVisible()
  }

  async quantityDecreaseButtonIsDisabledAsDefault(){
    await expect(this.quantitiyDecrease_button.first()).toBeDisabled()
  }

  async quantityCounterIsWorking(){
    await this.quantityIncrease_button.first().click()
    await expect(this.quantityCounter_text.first()).toHaveValue("1");
  }

  async quantityDecreaseButtonIsEnabled(){
    await this.quantityIncrease_button.first().click()
    await expect(this.quantitiyDecrease_button.first()).toBeEnabled()
  }

  async addingAnItemToCart(){
    await this.quantityIncrease_button.first().click()
    await this.addToCart_button.first().click()
    await expect(this.popupProductInCart_text).toHaveText('1 produkt w koszyku')
  }

  async removingAnItemFromCart(){
    await this.quantitiyDecrease_button.first().click()
    await this.addToCart_button.first().click()
    await expect(this.popupProductInCart_text).toHaveText('Twój koszyk jest pusty')
  }

  async foodSetsAreVisible(){
    await expect(this.mixed_set).toBeVisible()
    await expect(this.chickenFish_set).toBeVisible()
    await expect(this.chickenTurkey_set).toBeVisible()
  }
}