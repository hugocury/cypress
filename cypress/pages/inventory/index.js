
import { elements as el } from "./elements" 

class Inventory {

    validationLogin() {
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
        cy.screenshot('acessou página de itens')
    }

    addItem(itemName) {
       cy.get(el.addToCart(itemName)).click() 
    }

    removeItem(itemName) {
        cy.get(el.removeFromCart(itemName)).click()
    }
}

export default new Inventory()