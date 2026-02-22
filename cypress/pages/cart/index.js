class Cart{
    haveItenInCart(name) {
        cy.contains(name).should('be.visible')
        cy.screenshot('item adicionado')
    }
}

export default new Cart