import { test, expect } from "@playwright/test";
import { loginPage } from "../pages/loginPage.js";

test.beforeEach('Setup - entering a page and accepting a cookies before every test', async ({page}) => {
    const Login = new loginPage(page)
    await Login.goToPage()
    await Login.acceptCookies()
  });

test ('Page title is correct', async ({page}) =>{
    const Login = new loginPage(page)
    await Login.pageTitleIsCorrect();
})

test ('Login page header text is correct', async ({page}) =>{
    const Login = new loginPage(page)
    await Login.pageHeaderTextIsCorrect();
})

test ('Login form is visible', async ({page}) =>{
    const Login = new loginPage(page)
    await Login.loginFormIsCorrect();
})

test ('Login with incorrect data', async ({page}) =>{
    const Login = new loginPage(page)
    await Login.invalidDataLogin('login@test.com', 'test123!');
})

  //correct login:
  //test.wiktor.email@gmail.com
  //Qwerty123!

test ('Login with correct data', async ({page}) =>{
    const Login = new loginPage(page)
    await Login.validDataLogin('test.wiktor.email@gmail.com', 'Qwerty123!')
})

test ('Register form is visible', async ({page}) =>{
    const Login = new loginPage(page)
    await Login.switchToRegisterForm();
})

//with every single test u have to change an email
test ('Register a new customer', async ({page}) =>{
    const Login = new loginPage(page)
    await Login.switchToRegisterForm();
    await Login.registerCustomer('firstname', 'lastname', 'testingemail2024@test.com', 'password1234!');
})
