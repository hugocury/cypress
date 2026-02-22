
import Login from '../pages/login'
import Inventory from '../pages/inventory'
import Header from '../pages/header'
import Cart from '../pages/cart'

describe ('Carrinho', () => {

    beforeEach(() => {
        // Arrange
        Login.visitPage()
        Login.sucessLogin()
    })

    it('Add item no carrinho com sucesso', () => {
        // Act
        Inventory.addItem('Sauce Labs Backpack')

        //Assert
        const amountCartItens = 1
        Header.validationCartItens(amountCartItens)
        Header.cartPage()
        Cart.haveItenInCart('Sauce Labs Backpack')
    })

    it('Remover item do carrinho com sucesso', () => {
        // Arrange
        Inventory.addItem('Sauce Labs Backpack')

        //Act
        Inventory.removeItem('Sauce Labs Backpack')

        // Assert
        Header.emptyCart()

    })

})