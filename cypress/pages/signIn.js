import userData from '../fixtures/user-data.json'
const Chance = require('chance')

const chance = new Chance()

class SignIn {
    selectorList() {
        const selectors = {
            preOrderEmail: "[name='email_create']",
            submitCreateAccountButton: '#SubmitCreate',
            signInEmail: '#email',
            signInPassword: "[data-validate='isPasswd']",
            submitLogin: "[name='SubmitLogin']",
             myAdressButton: "[title='Addresses']"
        }
        return selectors
    }
    clickToNewAcc() {
        cy.get(this.selectorList().preOrderEmail).type(chance.email())
        cy.get(this.selectorList().submitCreateAccountButton).click()
    }
    clickToLogin() {
        cy.get(this.selectorList().signInEmail).type(userData.userLoginSucess.userName)
        cy.get(this.selectorList().signInPassword).type(userData.userLoginSucess.passwordSucess)
        cy.get(this.selectorList().submitLogin).click()
    }
}

export default SignIn