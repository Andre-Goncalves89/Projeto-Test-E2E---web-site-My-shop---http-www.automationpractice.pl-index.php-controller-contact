class Login {
    selectorList() {
        const selectors = {
            emailLogin: '#email',
            passwordLogin: '#passwd',
            submitLoginButton: '#SubmitLogin',
            validateLogin: '.breadcrumb'
        }
        return selectors
    }

    acessSignInPage() {
        cy.visit('?controller=authentication&back=my-account')
    }

    loginFunction(email, password) {
        cy.get(this.selectorList().emailLogin).type(email)
        cy.get(this.selectorList().passwordLogin).type(password)
        cy.get(this.selectorList().submitLoginButton).click()
    }

    loginSucess() {
        cy.get(this.selectorList().validateLogin).contains('My account')
    }

    loginMsgError() {
        cy.get('ol > li').contains('Invalid email address.')
    }
}

export default Login