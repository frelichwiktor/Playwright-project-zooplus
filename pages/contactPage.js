import { test, expect } from '@playwright/test';

exports.contactPage = class contactPage {
  constructor(page) {
    this.page = page;
    this.popup_accept_button = page.locator('#onetrust-accept-btn-handler');
    this.portallogo_image = page.locator('[class="portal-logo"]');
    this.header_text = page.locator('[class="hc-search-c"]');
    this.search_field_input = page.locator('#support-search-input');
    this.search_field_button = page.locator('[class="hc-search-button"]');
    this.card_section = page.locator(
      '[class="card card--shadow card--animated center articleSection"]',
    );
    this.card_header = page.locator('[class="articleSection__header"]');
    this.articleContent_section = page.locator(
      '[class="articleSection__content"]',
    );
    this.footer_section = page.locator('#main-footer');
    this.link_section = page.locator('[class="link-list"]');
  }

  async goToPage() {
    await this.page.goto('https://support.zooplus.pl/pl/support/home');
  }

  async acceptCookies() {
    await expect(this.popup_accept_button).toBeVisible();
    await this.popup_accept_button.click();
  }

  async pageTitleIsCorrect(text) {
    await expect(this.page).toHaveTitle(text);
  }

  async brandLogoImageIsVisible() {
    await expect(this.portallogo_image).toBeVisible();
  }

  async headerTextIsCorrect(text) {
    await expect(this.header_text).toContainText(text);
  }

  async supportInputAreWorking(text) {
    await this.search_field_input.fill(text);
    await this.search_field_button.click();
    await expect(
      this.page.locator('[class="search-results-list"]'),
    ).toBeVisible();
  }

  async cardSectionIsVisible(text) {
    await expect(this.card_section.first()).toBeVisible();
    await expect(this.card_section.first()).toContainText(text);
  }
};
