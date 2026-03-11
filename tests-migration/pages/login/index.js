import { expect } from '@playwright/test';
import { elements as el } from './elements';

export default {
    async visitPage(page) {
        await page.goto('https://www.saucedemo.com/');
    },

    async successLogin(page) {
        await page.locator(el.username).fill('standard_user');
        await page.locator(el.password).fill('secret_sauce');
        await page.locator(el.loginBtn).click();
    },

    async failLogin(page) {
        await page.locator(el.username).fill('teste');
        await page.locator(el.password).fill('secret_sauce');
        await page.locator(el.loginBtn).click();
    },

    async validationFailLogin(page) {
        await expect(page.locator(el.errorMessage)).toContainText(
            'Username and password do not match any user in this service'
        );
        await expect(page).toHaveURL('https://www.saucedemo.com/');
        await page.screenshot({ path: 'login-invalido.png' });
    }
};