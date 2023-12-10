import { test, expect } from "@playwright/test";
import { landingPage } from "../pages/mainPage.js";

test("Searchbox is working", async ({ page }) => {
    const Landing = new landingPage(page)
    await Landing.goto()
    await Landing.acceptCookies()
    await Landing.searchboxFill('Purizon')
  })
;


