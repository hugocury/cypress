
import Login from '../pages/login'
import Inventory from '../pages/inventory'

describe('Login', () => {

    beforeEach(() => {
        // Arrange
        Login.visitPage()
    })
    
    it ('Login com sucesso', () => {
        // Act
        Login.sucessLogin()        

        // Assert
        Inventory.validationLogin()
    })

    it('Login com falha', () => {
        // Act
        Login.failLogin()
        
        // Assert 
        Login.validationFailLogin()
    })
})