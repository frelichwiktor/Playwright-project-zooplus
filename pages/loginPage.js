import { test, expect } from "@playwright/test";

exports.loginPage = class loginPage {

  constructor(page) {
    this.page = page;
    this.popup_accept_button = page.locator('#onetrust-accept-btn-handler')
    this.logo_image = page.locator('[class="logo"')
    this.username_input = page.locator('#username')
    this.password_input = page.locator('#password')
    this.passwordVisibilityEnable_button = page.locator ('#password-visibility-enable')
    this.passwordVisibilityDisable_button = page.locator ('#password-visibility-disable')
    this.login_button = page.locaator('#login-btn')
    this.forgotpassword_button = page.locator('#forgot-password-link')


  }

  async goto() {
    await this.page.goto("https://login.zooplus.pl/auth/realms/zooplus/protocol/openid-connect/auth?response_type=code&client_id=shop-myzooplus-prod-zooplus&redirect_uri=https://www.zooplus.pl/web/sso-myzooplus/login&state=18f790f8-704a-41b1-8e2c-d3dafd27b4bf&login=true&ui_locales=pl-PL&scope=openid")
  }

  async acceptCookies() {
    const popupAcceptButton = this.popup_accept_button;
    await expect(popupAcceptButton).toBeVisible()
    await popupAcceptButton.click()
  }

  async pageTitleIsCorrect(){
    await expect(this.page).toHaveTitle('Zaloguj się do zooplus')
  }

}