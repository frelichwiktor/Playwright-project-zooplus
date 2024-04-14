import { test, expect } from '@playwright/test';
import { contactPage } from '../pages/contact.page.js';

test.describe('Contact page details', () => {
  test.beforeEach(
    'Setup - entering a page and accepting a cookies before every test',
    async ({ page }) => {
      const Contact = new contactPage(page);
      await Contact.goToPage();
      await Contact.acceptCookies();
    },
  );

  test('Page title is correct', async ({ page }) => {
    const Contact = new contactPage(page);
    const pageTitle = 'Pomoc techniczna : zooplus.pl';
    await Contact.pageTitleIsCorrect(pageTitle);
  });

  test('Brand logo image is visible', async ({ page }) => {
    const Contact = new contactPage(page);
    await Contact.brandLogoImageIsVisible();
  });

  test('Header text is correct', async ({ page }) => {
    const Contact = new contactPage(page);
    const headerText = 'Jak możemy Ci pomóc?';
    await Contact.headerTextIsCorrect(headerText);
  });

  test('Search input is working and the articles are shown', async ({
    page,
  }) => {
    const Contact = new contactPage(page);
    const supportInputText = 'Zamówienia';
    await Contact.supportInputAreWorking(supportInputText);
  });

  test('Article section is visible', async ({ page }) => {
    const Contact = new contactPage(page);
    await Contact.articleSectionIsVisible();
  });

  test('Article header is correct', async ({ page }) => {
    const Contact = new contactPage(page);
    const articleHeader = 'Zamówienia';
    await Contact.articleHeaderIsCorrect(articleHeader);
  });

  test('Footer section is visible', async ({ page }) => {
    const Contact = new contactPage(page);
    await Contact.footerSectionIsVisible();
  });

  test('Link section is visible', async ({ page }) => {
    const Contact = new contactPage(page);
    await Contact.linkSectionIsVisible();
  });

  test('Article contains correct content', async ({ page }) => {
    const Contact = new contactPage(page);
    const articleConent = 'Zamówienia';
    await Contact.articleContainsCorrectContent(articleConent);
  });
});
