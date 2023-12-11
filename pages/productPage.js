import { test, expect } from "@playwright/test";

exports.productPage = class productPage {

  constructor(page) {
    this.page = page;
    this.productName = page.locator('[data-zta="productTitle"')
    
  }
}