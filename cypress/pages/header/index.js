
import { elements as el } from "./elements"

class Header {

    validationCartItens (amount) {
        cy.get(el.cartBadge)
        .should('be.visible').and('have.text', amount.toString())
    }

    cartPage() {
        cy.get(el.cartPage).click()
    }

    emptyCart() {
        cy.get(el.cartBadge).should('not.exist')
        cy.screenshot('item removido')
    }
}

export default new Header()