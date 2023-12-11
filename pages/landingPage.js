import { test, expect } from "@playwright/test";

exports.landingPage = class landingPage {

  constructor(page) {
    this.page = page;
    this.searchbox_textbox = page.locator('#search_query_field_desktop')
    this.searchbox_button = page.locator('[type="submit"][data-zta="search_form_button_desktop"]')
    this.checkout_button = page.locator('data-testid="MiniCartLink')
    this.popup_accept_button = page.locator('#onetrust-accept-btn-handler')
    this.contact_button = page.locator('#srh-help')
    this.lowerbar_module = page.locator('#header-category-links')
    this.brandlogo_image = page.locator('#srh-logo')
  }

  async goto() {
    await this.page.goto("https://www.zooplus.pl/")
  }

  async acceptCookies() {
    const popupAcceptButton = this.popup_accept_button;
    await expect(popupAcceptButton).toBeVisible()
    await popupAcceptButton.click()
  }

  async pageTitleIsCorrect(){
    await expect(this.page).toHaveTitle('Internetowy sklep zoologiczny: karma i akcesoria dla zwierząt w zooplus')
  }

  // async websiteImagesAreLoadedCorrect(){
  //   const brandLogoImage = this.brandlogo_image
  //   await expect(brandLogoImage).toBeVisible
  // }

  async searchboxFill(product) {
    await this.searchbox_textbox.fill(product)
    await this.searchbox_button.click()
  }
};
