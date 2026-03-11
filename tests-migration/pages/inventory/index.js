import { expect } from '@playwright/test';
import { elements as el } from './elements';

export default {
    async validationLogin(page) {
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        await page.screenshot({ path: 'acessou-pagina-itens.png' });
    },

    async addItem(page, itemName) {
        await page.locator(el.addToCart(itemName)).click();
    },

    async removeItem(page, itemName) {
        await page.locator(el.removeFromCart(itemName)).click();
    }
};