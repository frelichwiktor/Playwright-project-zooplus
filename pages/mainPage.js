import { test, expect } from "@playwright/test";

exports.landingPage = class landingPage {
  constructor(page) {
    this.page = page;
    this.searchbox_textbox = page.locator('#search_query_field_desktop')
    this.searchbox_button = page.locator('[type="submit"][data-zta="search_form_button_desktop"]')
    this.checkout_button = page.locator('data-testid="MiniCartLink')
    this.popup_accept_button = page.locator('#onetrust-accept-btn-handler')
  }

  async goto() {
    await this.page.goto("https://www.zooplus.pl/")
  }

  async acceptCookies() {
    await expect(this.page.locator("#onetrust-accept-btn-handler")).toBeVisible()
    await this.page.locator("#onetrust-accept-btn-handler").click()
  }

  async searchboxFill(product) {
    await this.searchbox_textbox.fill(product)
    await this.searchbox_button.click()
  }
};
