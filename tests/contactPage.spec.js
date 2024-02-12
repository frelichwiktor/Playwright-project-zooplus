import { test, expect } from '@playwright/test';
import { contactPage } from '../pages/contactPage.js';

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
  await Contact.pageTitleIsCorrect('Pomoc techniczna : zooplus.pl');
});

test('Brand logo image is visible', async ({ page }) => {
  const Contact = new contactPage(page);
  await Contact.brandLogoImageIsVisible();
});

test('Header text is correct', async ({ page }) => {
  const Contact = new contactPage(page);
  await Contact.headerTextIsCorrect('Jak możemy Ci pomóc?');
});

test('Search input is working and the articles are shown', async ({ page }) => {
  const Contact = new contactPage(page);
  await Contact.supportInputAreWorking('Zamówienia');
});

test('Card section is visible', async ({ page }) => {
  const Contact = new contactPage(page);
  await Contact.cardSectionIsVisible('Zamówienia');
});
