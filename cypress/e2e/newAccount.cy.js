import userData from '../fixtures/user-data.json'
import SignIn from "../pages/signIn"
import NewAccount from "../pages/newAccount"
import Login from '../pages/login'

const signIn = new SignIn()
const newAccount = new NewAccount()
const login = new Login()

describe('New Account', () => {
    it('Sucess Created', () => {
      cy.viewport(800,600)
      login.acessSignInPage()
      signIn.clickToNewAcc()
      newAccount.chooseMr()
      newAccount.fillNameType('Andre', 'Araujo')
      newAccount.fillPassword('teste123')
      newAccount.chooseDateOfBirth()
      newAccount.clickCheckNewsLetter()
      newAccount.clickToSubmit()
      newAccount.SucessMsg()
    })
})

describe('New Account', () => {
    it.skip('Error- WhiteForm Detected', () => {
      cy.viewport(800,600)
      login.acessSignInPage()
      signIn.clickToNewAcc()
      newAccount.sendIncompleteForm()
    })
})

describe('New Account', () => {
    it.skip('Error- Incomplete form send', () => {
      cy.viewport(800,600)
      login.acessSignInPage()
      signIn.clickToNewAcc()
      newAccount.chooseMrs()
      newAccount.fillNameType('Jonh','Phinerb')
      newAccount.chooseDateOfBirth()
      newAccount.clickCheckNewsLetter()
      newAccount.sendIncompleteForm()

    })
})

describe('New Account', () => {
    it.skip('Error- Invalid informations', () => {
      cy.viewport(800,600)
      login.acessSignInPage()
      signIn.clickToNewAcc()
      newAccount.ChooseMrs()
      newAccount.fillNameType(4321,1234)
      newAccount.fillPassword('1')
      newAccount.chooseDateOfBirth()
      newAccount.clickCheckNewsLetter()
      newAccount.sendIncompleteForm()

    })
})

describe('New Account', () => {
    it.skip('Error- date of birthday empty', () => {
      cy.viewport(800,600)
      login.acessSignInPage()
      signIn.clickToNewAcc()
      newAccount.ChooseMrs()
      newAccount.fillNameType('Jupiter','Notebook')
      newAccount.fillPassword('12345')
      //newAccount.chooseDateOfBirth()
      newAccount.clickCheckNewsLetter()
      newAccount.clickToSubmit()
      newAccount.SucessMsg()

    })
})


  

 
  