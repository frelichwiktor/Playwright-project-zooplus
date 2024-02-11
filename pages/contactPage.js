import { test, expect } from '@playwright/test';

exports.contactPage = class contactPage {
    constructor(page) {
        this.page = page;
        this.portallogo_image = page.locator('[class="portal-logo"]')
        this.header_text = page.locator('[class="hc-search-c"]')
        this.support_input = page.locator('#support-serach-input')
        this.submit_button = page.locator('[class="submit"]')
        this.card_section = page.locator('[class="card"]')
        this.card_header = page.locator('[class="articleSection__header"]')
        this.articleContent_section = page.locator('[class="articleSection__content"]')
        this.footer_section = page.locator('#main-footer')
    }
}