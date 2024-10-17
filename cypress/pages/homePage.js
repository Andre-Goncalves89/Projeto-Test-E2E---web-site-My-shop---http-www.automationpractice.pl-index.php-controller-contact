class HomePage {
    selectorList() {
        const selectors = {
            signInButton: "[title='Log in to your customer account']",
            contactUsButton: "[title='Contact us']",
             myAdressButton: "[title='Addresses']"
        }
        return selectors
    }
    
    selectContactUs() {
        cy.get(this.selectorList().contactUsButton).click()
        cy.get('.breadcrumb').contains('Contact')       
    }
    clickToMyAdress() {
        cy.get(this.selectorList().myAdressButton).click()
    }
}

export default HomePage