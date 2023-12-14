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
    await Landing.imagesAreLoaded()
})

test("Sections are loaded", async ({ page }) => {
    const Landing = new landingPage(page)
    await Landing.goto()
    await Landing.acceptCookies()
    await Landing.sectionsAreLoaded()
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




