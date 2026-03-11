import { test, expect } from '@playwright/test';
import Login from '../pages/login';
import Inventory from '../pages/inventory';

// testes de autenticação na aplicação SauceDemo
// o describe agrupa comportamentos relacionados ao login

test.describe('Login', () => {

    test.beforeEach(async ({ page }) => {
        // Arrange: sempre iniciar na página de login
        await Login.visitPage(page);
    });

    test('deve fazer login com sucesso', async ({ page }) => {
        // Act
        await Login.successLogin(page);

        // Assert
        await Inventory.validationLogin(page);
    });

    test('deve exibir erro ao tentar logar com credenciais inválidas', async ({ page }) => {
        // Act
        await Login.failLogin(page);

        // Assert
        await Login.validationFailLogin(page);
    });
});