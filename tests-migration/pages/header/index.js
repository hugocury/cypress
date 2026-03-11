import { expect } from '@playwright/test';
import { elements as el } from './elements';

export default {
    async validationCartItens(page, amount) {
        const badge = page.locator(el.cartBadge);
        await expect(badge).toBeVisible();
        await expect(badge).toHaveText(amount.toString());
    },

    async cartPage(page) {
        await page.locator(el.cartPage).click();
    },

    async emptyCart(page) {
        await expect(page.locator(el.cartBadge)).toHaveCount(0);
        await page.screenshot({ path: 'item-removido.png' });
    }
};