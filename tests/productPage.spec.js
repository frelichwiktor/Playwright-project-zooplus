import { test, expect } from "@playwright/test";
import { productPage } from "../pages/productPage.js";

test('test', async ({page}) =>{
    const Landing = new landingPage(page)
    await Landing.goto()
    await page.pause()
})