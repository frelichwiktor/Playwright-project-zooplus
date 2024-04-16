import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/login.page.js';
import { loginData, userID } from '../test-data/login.data';

test.describe('Login', () => {
  test.beforeEach(
    'Setup - entering a page and accepting a cookies',
    async ({ page }) => {
      const Login = new loginPage(page);
      await Login.goToPage();
      await Login.acceptCookies();
    },
  );

  test('Page title is correct', async ({ page }) => {
    const Login = new loginPage(page);
    const pageTitle = 'Zaloguj się do zooplus';
    await Login.pageTitleIsCorrect(pageTitle);
  });

  test('Page header text is correct', async ({ page }) => {
    const Login = new loginPage(page);
    await Login.pageHeaderTextIsCorrect();
  });

  test('Login form is visible', async ({ page }) => {
    const Login = new loginPage(page);
    await Login.loginFormIsCorrect();
  });

  test('Login with correct data', async ({ page }) => {
    const Login = new loginPage(page);
    const userID = loginData.userId;
    const password = loginData.userPassword;
    await Login.validDataLogin(userId, userPassword);
  });

  test('Login with incorrect data', async ({ page }) => {
    const Login = new loginPage(page);
    const invalidLogin = 'invalid@test.com';
    const invalidPassword = 'test123!';
    await Login.invalidDataLogin(invalidLogin, invalidPassword);
  });

  test('Register form is visible', async ({ page }) => {
    const Login = new loginPage(page);
    await Login.switchToRegisterForm();
  });

  test('Register a new customer', async ({ page }) => {
    const Login = new loginPage(page);
    await Login.switchToRegisterForm();
    await Login.registerCustomer(
      'firstname',
      'lastname',
      'testingemail2024@test.com',
      'password1234!',
    );
  });
});
