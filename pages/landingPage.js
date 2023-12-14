import { test, expect } from "@playwright/test";

exports.landingPage = class landingPage {

  constructor(page) {
    this.page = page;
    this.searchbox_textbox = page.locator('#search_query_field_desktop') //textbox
    this.searchbox_button = page.locator('[type="submit"][data-zta="search_form_button_desktop"]') //przycisk searchbox
    this.checkout_button = page.locator('[data-testid="MiniCartLink"]') //twoj koszyk
    this.popup_accept_button = page.locator('#onetrust-accept-btn-handler') //popup
    this.contact_button = page.locator('#srh-help') //contact button
    this.header_module = page.locator('#header-category-links') //sekcja psy/koty/itd
    this.header_section = page.locator('[data-zta="shop-header-wrapper"]')
    this.sale_section = page.locator('#promobar-onsite') //oferty próbne
    this.newsletter_section = page.locator('[data-zta="footer-newsletter"]') //newsletter
    this.recomendation_section = page.locator('[class="RecommendationSlider_sliderContainer__HMQ6h"]') //polecane produkty
    this.sidebanner_section = page.locator('[data-testid="side-banner"]') //ten boczny z 3ma zdjęciami
    this.infolist_section = page.locator('[class="InfoListAndCountrySelector-module_infoList__DTNyj"]')
    this.purchasedetails_section = page.locator('[class="PurchaseDetails-module_paymentShippingAndTrust__0p7i3"]')
    this.socialandapps_section = page.locator('[class="SocialAndApps-module_socialAndApps__OLYLe"]') //sam dół social + appstore
    this.legallinks_section = page.locator('[class="LegalLinks-module_legalLinks__5Jdza"]') //sam dół
    this.brandlogo_image = page.locator('#srh-logo') //logo u góry
    this.leftbackground_image = page.locator('[class="BackgroundBanner-module_leftImage__GFWBA"]') //obrazek po lewo
    this.rightbackground_image = page.locator ('[class="BackgroundBanner-module_rightImage__r5yBK"]') //obrazek po prawo
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

  async imagesAreLoaded(){
    const brandLogo = this.brandlogo_image
    const leftBackgroundImage = this.leftbackground_image
    const rightBackgroundImage = this.rightbackground_image
    await expect(brandLogo).toBeVisible
    await expect(leftBackgroundImage).toBeVisible
    await expect(rightBackgroundImage).toBeVisible
  }

  async sectionsAreLoaded(){
    const saleSection = this.sale_section
    const headerSection = this.header_section
    await expect(saleSection).toBeVisible
    await expect(headerSection).toBeVisible
  }

  async searchboxFill(product) {
    await this.searchbox_textbox.fill(product)
    await this.searchbox_button.click()
  }
};
