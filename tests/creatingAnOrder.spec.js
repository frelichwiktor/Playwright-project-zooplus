import { test, expect } from "@playwright/test";
import { loginPage } from "../pages/loginPage.js";
import { productPage } from "../pages/productPage.js";

test.beforeEach('Setup - entering a page and accepting a cookies before every test', async ({page}) => {
    const Login = new loginPage(page)
    await Login.goToPage()
    await Login.acceptCookies()
  });

test ('Creating an order and checkout', async ({page}) =>{
    const Login = new loginPage(page)
    const Product = new productPage(page)
    await Login.validDataLogin('test.wiktor.email@gmail.com', 'Qwerty123!')
    await Product.goToPage()
    await Product.addingAnItemToCart()
    await page.getByTestId('MiniCartLink').click();
    await page.getByRole('button', { name: 'Do kasy' }).click();
    await page.getByRole('link', { name: 'Nie, dziękuję' }).click();
    //the final step is creating an order by " send an order button"
    //getByRole('button', { name: 'Wyślij zamówienie' })
})