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
    await Contact.pageTitleIsCorrect("Pomoc techniczna : zooplus.pl");
  });

  test('Brand logo image is visible', async ({ page }) => {
    const Contact = new contactPage(page);
    await Contact.brandLogoImageIsVisible();
  });