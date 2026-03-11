import { expect } from '@playwright/test';

export default {
    async haveItemInCart(page, name) {
        await expect(page.getByText(name)).toBeVisible();
        await page.screenshot({ path: 'item-adicionado.png' });
    }
};