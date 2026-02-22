
import { elements as el } from "./elements"

class Login {

    visitPage() {
        cy.visit('https://www.saucedemo.com/')
    }

    sucessLogin() {
        cy.get(el.username).type('standard_user')
        cy.get(el.password).type('secret_sauce')
        cy.get(el.loginBtn).click()
    }

    failLogin() {
        cy.get(el.username).type('teste')
        cy.get(el.password).type('secret_sauce')
        cy.get(el.loginBtn).click()
    }

    validationFailLogin() {
        cy.get(el.errorMessage)
        .should(
            'contain.text', 
            'Username and password do not match any user in this service')
        cy.url().should('eq', 'https://www.saucedemo.com/')
        cy.screenshot('login inválido')
    }
}

export default new Login()