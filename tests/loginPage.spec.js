import { test, expect } from "@playwright/test";
import { loginPage } from "../pages/loginPage.js";

test ('Page title is correct', async ({page}) =>{
    const Login = new loginPage(page)
    await Login.goto()
    await Login.pageTitleIsCorrect();
})

test ('Login with incorrect data', async ({page}) =>{
    const Login = new loginPage(page)
    await Login.goto()
    await Login.acceptCookies()
    await Login.invalidDataLogin('login@test.com', 'test123!');
})

  //correct login:
  //test.wiktor.email@gmail.com
  //Qwerty123!

test ('Login with correct data', async ({page}) =>{
    const Login = new loginPage(page)
    await Login.goto()
    await Login.acceptCookies()
    await Login.validDataLogin('test.wiktor.email@gmail.com', 'Qwerty123!')
})





