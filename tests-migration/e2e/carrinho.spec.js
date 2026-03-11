import { test, expect } from '@playwright/test';
import Login from '../pages/login';
import Inventory from '../pages/inventory';
import Header from '../pages/header';
import Cart from '../pages/cart';

// fluxo de adição e remoção de itens no carrinho

test.describe('Carrinho', () => {

    test.beforeEach(async ({ page }) => {
        // Arrange: usuário autenticado para começar cada cenário
        await Login.visitPage(page);
        await Login.successLogin(page);
    });

    test('deve adicionar item no carrinho com sucesso', async ({ page }) => {
        // Act
        await Inventory.addItem(page, 'Sauce Labs Backpack');

        // Assert: badge, página de carrinho e item existente
        const amountCartItems = 1;
        await Header.validationCartItens(page, amountCartItems);
        await Header.cartPage(page);
        await Cart.haveItemInCart(page, 'Sauce Labs Backpack');
    });

    test('deve remover item do carrinho com sucesso', async ({ page }) => {
        // Arrange: já há um produto no carrinho
        await Inventory.addItem(page, 'Sauce Labs Backpack');

        // Act
        await Inventory.removeItem(page, 'Sauce Labs Backpack');

        // Assert: não existe badge de itens
        await Header.emptyCart(page);
    });
});