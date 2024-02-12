import { test, expect } from '@playwright/test';
import { landingPage } from '../pages/landingPage.js';

test.beforeEach(
  'Setup - entering a page and accepting a cookies before every test',
  async ({ page }) => {
    const Landing = new landingPage(page);
    await Landing.goToPage();
    await Landing.acceptCookies();
  },
);

test('Page title is correct', async ({ page }) => {
  const Landing = new landingPage(page);
  await Landing.pageTitleIsCorrect(
    'Internetowy sklep zoologiczny: karma i akcesoria dla zwierząt w zooplus',
  );
});

test('Brand logo image is visible', async ({ page }) => {
  const Landing = new landingPage(page);
  await Landing.brandLogoImageIsVisible();
});

test('Background images are visible', async ({ page }) => {
  const Landing = new landingPage(page);
  await Landing.backgroundImagesAreVisible();
});

test('Header module is visible', async ({ page }) => {
  const Landing = new landingPage(page);
  await Landing.headerModuleIsVisible();
});

test('Sale section is visible', async ({ page }) => {
  const Landing = new landingPage(page);
  await Landing.saleSectionIsVisible();
});

test('Sidebanner section is visible', async ({ page }) => {
  const Landing = new landingPage(page);
  await Landing.sidebannerSectionIsVisible();
});

test('Newsletter section is visible', async ({ page }) => {
  const Landing = new landingPage(page);
  await Landing.newsletterSectionIsVisible();
});

test('Info list section is visible', async ({ page }) => {
  const Landing = new landingPage(page);
  await Landing.infolistSectionIsVisible();
});

test('Social and app section section is visible', async ({ page }) => {
  const Landing = new landingPage(page);
  await Landing.socialAndAppSectionIsVisible();
});

test('Purchase details section is visible', async ({ page }) => {
  const Landing = new landingPage(page);
  await Landing.purchaseDetailsSectionIsVisible();
});

test('Legal link section is visible', async ({ page }) => {
  const Landing = new landingPage(page);
  await Landing.legalLinkSectionIsVisible();
});

test('Searchbox is working', async ({ page }) => {
  const Landing = new landingPage(page);
  await Landing.searchboxFill('Purizon');
});

// test('test', async ({page}) =>{
//     const Landing = new landingPage(page)
//     await Landing.goto()
//     await page.pause()
// })
