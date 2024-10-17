import userData from '../fixtures/user-data.json'
import Login from '../pages/login'

const login = new Login()

describe('Login', () => {
  it.skip('Login Sucess', () => {
    cy.viewport(800,600)
    login.acessSignInPage()
    login.loginFunction(userData.userLoginSucess.userName, userData.userLoginSucess.passwordSucess)
    login.loginSucess()
  })
})

describe('Login', () => {
  it('Login Fail', () => {
    cy.viewport(800,600)
    login.acessSignInPage()
    login.loginFunction(userData.userLoginFail.userNameFail, userData.userLoginFail.passwordFail)
    login.loginMsgError()
  })
})