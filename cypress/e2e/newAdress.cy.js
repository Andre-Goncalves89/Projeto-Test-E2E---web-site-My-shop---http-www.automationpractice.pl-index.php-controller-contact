import userData from '../fixtures/user-data.json'
import SignIn from "../pages/signIn"
import Login from '../pages/login'
import NewAdress from '../pages/newAdressPage'
import HomePage from '../pages/homePage'

const signIn = new SignIn()
const login = new Login()
const newAdress = new NewAdress()
const homePage = new HomePage()

describe('New Adress', () => {
    it('Adress included sucess', () => {
        cy.viewport(800, 600)
        login.acessSignInPage()
        signIn.clickToLogin()
        newAdress.clickToNewAdressFunction()
        newAdress.fillComponents('fantasy', 'street 1', 'alameda 10', 'New York', '10010', '25025503', '+1(713) 937250344')
        newAdress.clickToSend()
        newAdress.validateAdress()
    })
})

describe('New Adress', () => {
    it.skip('Adress with invalid credentials', () => {
        cy.viewport(800, 600)
        login.acessSignInPage()
        signIn.clickToLogin()
        newAdress.clickToNewAdressFunction()
        newAdress.fillComponents('fantasy', 'street 1', 'alameda 10', 'New York', '10010', 'abc', '+1(713) 937250344')
        newAdress.clickToSend()
        newAdress.errorMsg()
    })
})

describe('New Adress', () => {
    it('Adress delete', () => {
        cy.viewport(800, 600)
        login.acessSignInPage()
        signIn.clickToLogin()
        homePage.clickToMyAdress()
        newAdress.deleteAdress()
    })
})