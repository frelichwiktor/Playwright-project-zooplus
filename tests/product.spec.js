import { test, expect } from '@playwright/test';
import { productPage } from '../pages/product.page.js';

test.describe('Product page details', () => {
  test.beforeEach(
    'Setup - entering a page and accepting a cookies before every test',
    async ({ page }) => {
      const Product = new productPage(page);
      await Product.goToPage();
      await Product.acceptCookies();
    },
  );

  test('Product name is correct', async ({ page }) => {
    const Product = new productPage(page);
    const productName = 'Purizon Adult, 6 x 200 g, bez zbóż';
    await Product.productNameIsCorrect(productName);
  });

  test('Product summary have text', async ({ page }) => {
    const Product = new productPage(page);
    const productSummary = 'Czysta przyjemność';
    await Product.productSummaryHaveText(productSummary);
  });

  test('Specific product ingredients are visible after clicking the ingredients button', async ({
    page,
  }) => {
    const Product = new productPage(page);
    const productIngredient = 'Filet z kurczaka';
    await Product.specificProductIngredientsAreVisible(productIngredient);
  });

  test('Specific feeding recommendations are visible after clicking the ingredients button', async ({
    page,
  }) => {
    const Product = new productPage(page);
    const productFeedingRecommendation = 'Zalecenia żywieniowe';
    await Product.productFeedingRecommendationsAreVisible(
      productFeedingRecommendation,
    );
  });

  test('Rating stars are visible.', async ({ page }) => {
    const Product = new productPage(page);
    await Product.ratingStarsAreVisible();
  });

  test('Zooplus abo banner is visible.', async ({ page }) => {
    const Product = new productPage(page);
    await Product.zooplusAboBannerIsVisible();
  });

  test('Quantity counter button is working', async ({ page }) => {
    const Product = new productPage(page);
    await Product.quantityCounterIsWorking();
  });

  test('Quantity decrease button is disabled as default', async ({ page }) => {
    const Product = new productPage(page);
    await Product.quantityDecreaseButtonIsDisabledAsDefault();
  });

  test('Quantity decrease button is enabled when product is added', async ({
    page,
  }) => {
    const Product = new productPage(page);
    await Product.quantityDecreaseButtonIsEnabled();
  });

  test('Adding an item to cart', async ({ page }) => {
    const Product = new productPage(page);
    await Product.addingAnItemToCart();
  });

  test('Removing a product to cart', async ({ page }) => {
    const Product = new productPage(page);
    await Product.addingAnItemToCart();
    await Product.removingAnItemFromCart();
  });

  test('Food sets are visible', async ({ page }) => {
    const Product = new productPage(page);
    await Product.foodSetsAreVisible();
  });
});
