import { test, expect } from "@playwright/test";
import exp from "constants";

exports.loginPage = class loginPage {

  constructor(page) {
    this.page = page;
    this.popup_accept_button = page.locator('#onetrust-accept-btn-handler')
    this.logo_image = page.locator('[class="logo"]')
    this.form_login = page.locator('[class="form-login"')
    this.active_tab_item = page.locator('[class="tab-item-active"]')
    this.form_header = page.locator('[class="form-title"]')
    this.username_input = page.locator('#username')
    this.password_input = page.locator('#password')
    this.passwordVisibilityEnable_button = page.locator ('#password-visibility-enable')
    this.passwordVisibilityDisable_button = page.locator ('#password-visibility-disable')
    this.login_button = page.locator('#login-btn')
    this.forgotPassword_button = page.locator('#forgot-password-link')
    this.invalidLoginData = page.locator('[class="message-box message-box--error"]')

    //register form
    this.form_register = page.locator('[class="form-register"')
    this.firstName_input = page.locator('#firstName')
    this.lastName_input = page.locator('#lastName')
    this.email_input = page.locator('#email')
  }

  async goToPage() {
    await this.page.goto("https://login.zooplus.pl/auth/realms/zooplus/protocol/openid-connect/auth?response_type=code&client_id=shop-myzooplus-prod-zooplus&redirect_uri=https://www.zooplus.pl/web/sso-myzooplus/login&state=18f790f8-704a-41b1-8e2c-d3dafd27b4bf&login=true&ui_locales=pl-PL&scope=openid")
  }

  async acceptCookies() {
    const popupAcceptButton = this.popup_accept_button;
    await expect(popupAcceptButton).toBeVisible()
    await popupAcceptButton.click()
  }

  async pageTitleIsCorrect(){
    await expect(this.page).toHaveTitle("Zaloguj się do zooplus")
  }

  async pageHeaderTextIsCorrect(){
    await expect(this.form_header).toHaveText("Obecny Klient")
  }

  async loginFormIsCorrect(){
    await expect(this.login_form).toBeVisible
    await expect(this.active_tab_item).toHaveText("Login")
  }

  async switchToRegisterForm(){
    await this.page.getByRole('link', { name: 'Rejestracja' }).click()
    await expect(this.active_tab_item).toHaveText("Rejestracja")
  }

  async registerCustomer(firstname, lastname, email, password){
    await this.firstName_input.fill(firstname)
    await this.lastName_input.fill(lastname)
    await this.email_input.fill(email)
    await this.password_input.fill(password)
    await this.login_button.click()
    // zooplus has some bot-blocker tool which is showing a "there's an error message, but i found a way to go through it :)"
    await this.page.getByRole('link', { name: 'Zooplus' }).click()
    await this.page.locator('#shop-header').getByRole('link', { name: 'Mój zooplus' }).click()
    await expect(this.page.locator('[data-zta="welcome-section-title"]')).toHaveText(`Cześć, ${firstname}!`);
  }

  async invalidDataLogin(login, password){
    await this.username_input.fill(login)
    await this.password_input.fill(password)
    await this.page.pause()
    await this.login_button.click()
    await expect(this.invalidLoginData).toBeVisible()
  }

  async validDataLogin(login, password){
    await this.username_input.fill(login)
    await this.password_input.fill(password)
    await this.login_button.click()
    //zooplus has some bot-blocker tool which is showing a "there's an error message, but i found a way to go through it :)"
    await this.page.getByRole('link', { name: 'Zooplus' }).click()
    await this.page.locator('#shop-header').getByRole('link', { name: 'Mój zooplus' }).click()
    await expect(this.page.locator('[data-zta="welcome-section-title"]')).toHaveText('Cześć, test!')
  }
}