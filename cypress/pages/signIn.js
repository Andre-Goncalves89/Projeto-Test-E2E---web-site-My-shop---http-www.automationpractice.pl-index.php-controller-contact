import userData from '../fixtures/user-data.json'

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
        cy.get(this.selectorList().preOrderEmail).type('teste424@gmail.com')
        cy.get(this.selectorList().submitCreateAccountButton).click()
    }
    clickToLogin() {
        cy.get(this.selectorList().signInEmail).type(userData.userLoginSucess.userName)
        cy.get(this.selectorList().signInPassword).type(userData.userLoginSucess.passwordSucess)
        cy.get(this.selectorList().submitLogin).click()
    }
}

export default SignIn