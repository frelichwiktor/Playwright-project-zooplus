import { test, expect } from "@playwright/test";
import { landingPage } from "../pages/landingPage.js";

test ('Page title is correct', async ({page}) =>{
    const Landing = new landingPage(page)
    await Landing.goto()
    await Landing.pageTitleIsCorrect();
})

test ('Images are loaded correct', async ({page}) =>{
    const Landing = new landingPage(page)
    await Landing.goto()
    await Landing.acceptCookies()
    await Landing.imagesAreLoadedAndVisible()
})

test("Sections are visible", async ({ page }) => {
    const Landing = new landingPage(page)
    await Landing.goto()
    await Landing.acceptCookies()
    await Landing.sectionsAreLoadedAndVisible()
  })

  test("Searchbox is working", async ({ page }) => {
    const Landing = new landingPage(page)
    await Landing.goto()
    await Landing.acceptCookies()
    await Landing.searchboxFill('Purizon')
  })

// test('test', async ({page}) =>{
//     const Landing = new landingPage(page)
//     await Landing.goto()
//     await page.pause()
// })




