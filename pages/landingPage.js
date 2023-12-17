import { test, expect } from "@playwright/test";

exports.landingPage = class landingPage {

  constructor(page) {
    this.page = page;
    this.searchbox_textbox = page.locator('#search_query_field_desktop')
    this.searchbox_button = page.locator('[type="submit"][data-zta="search_form_button_desktop"]')
    this.checkout_button = page.locator('[data-testid="MiniCartLink"]')
    this.popup_accept_button = page.locator('#onetrust-accept-btn-handler')
    this.contact_button = page.locator('#srh-help')
    this.header_module = page.locator('#header-category-links')
    this.header_section = page.locator('[data-zta="shop-header-wrapper"]')
    this.sale_section = page.locator('#promobar-onsite')
    this.newsletter_section = page.locator('[data-zta="footer-newsletter"]')
    this.recommendation_section = page.locator('[class="RecommendationSlider_sliderContainer__HMQ6h"]')
    this.sidebanner_section = page.locator('[data-testid="side-banner"]')
    this.infolist_section = page.locator('[class="InfoListAndCountrySelector-module_infoList__DTNyj"]')
    this.purchasedetails_section = page.locator('[class="PurchaseDetails-module_paymentShippingAndTrust__0p7i3"]')
    this.socialandapps_section = page.locator('[class="SocialAndApps-module_socialAndApps__OLYLe"]')
    this.legallinks_section = page.locator('[class="LegalLinks-module_legalLinks__5Jdza"]')
    this.brandlogo_image = page.locator('#srh-logo')
    this.leftbackground_image = page.locator('[class="BackgroundBanner-module_leftImage__GFWBA"]')
    this.rightbackground_image = page.locator ('[class="BackgroundBanner-module_rightImage__r5yBK"]')
  }

  async goto() {
    await this.page.goto("https://www.zooplus.pl/")
  }

  async acceptCookies() {
    await expect(this.popup_accept_button).toBeVisible()
    await this.popup_accept_button.click()
  }

  async pageTitleIsCorrect(){
    await expect(this.page).toHaveTitle('Internetowy sklep zoologiczny: karma i akcesoria dla zwierząt w zooplus')
  }

  async imagesAreLoadedAndVisible(){
    await expect(this.brandlogo_image).toBeVisible
    await expect(this.leftbackground_image).toBeVisible
    await expect(this.rightbackground_image).toBeVisible
  }

  async sectionsAreLoadedAndVisible(){
    await expect(this.sale_section).toBeVisible
    await expect(this.header_module).toBeVisible
    await expect(this.newsletter_section).toBeVisible
    await expect(this.recommendation_section).toBeVisible
    await expect(this.sidebanner_section).toBeVisible
    await expect(this.infolist_section).toBeVisible
    await expect(this.purchasedetails_section).toBeVisible
    await expect(this.socialandapps_section).toBeVisible
    await expect(this.legallinks_section).toBeVisible
  }

  async searchboxFill(product) {
    await this.searchbox_textbox.fill(product)
    await this.searchbox_button.click()
    await expect(this.page.getByText('Tutaj znajdziesz wyniki dla '+ product +'')).toBeVisible()
  }
};
