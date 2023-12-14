import { test, expect } from "@playwright/test";
import { productPage } from "../pages/productPage.js";

test('test', async ({page}) =>{
    const Product = new productPage(page)
    await Product.goto()
    await Product.clickIngridients()
    await page.pause()
})