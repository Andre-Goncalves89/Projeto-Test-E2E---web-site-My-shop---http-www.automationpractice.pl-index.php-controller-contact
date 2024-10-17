class NewAccount {
    selectorList() {
        const selectors = {
            idGenderMr: "[for='id_gender1']",
            idGenderMrs:"[for='id_gender2']",
            firstNameField: "[name='customer_firstname']",
            lastNameField: "[name='customer_lastname']",
            passwordField: "[name='passwd']",
            dateOfBirthDays: "[name='days']",
            dateOfBirthMonths: "[name='months']",
            dateOfBirthYears: "[name='years']",
            checkNewsLetter: "[name='newsletter']",
            submitAccountButton: "[name='submitAccount']"
        }
        return selectors
    }
    chooseMr() {
        cy.get(this.selectorList().idGenderMr).click()
    }
    chooseMrs() {
        cy.get(this.selectorList().idGenderMrs).click()
    }
    fillNameType(name, lastname) {
        cy.get(this.selectorList().firstNameField).type(name)
        cy.get(this.selectorList().lastNameField).type(lastname)
    }
    fillPassword(password) {
        cy.get(this.selectorList().passwordField).type(password)
    }
    chooseDateOfBirth() {
        cy.get(this.selectorList().dateOfBirthDays).select(10, {force: true})
        cy.get(this.selectorList().dateOfBirthMonths).select(3, {force: true})
        cy.get(this.selectorList().dateOfBirthYears).select(18, {force: true})
    }
    clickCheckNewsLetter() {
        cy.get(this.selectorList().checkNewsLetter).click()
    }
    clickToSubmit() {
        cy.get(this.selectorList().submitAccountButton).click()
    }
    SucessMsg() {
        cy.get('.alert').contains('Your account has been created.')
    }

    sendIncompleteForm() {
        cy.get(this.selectorList().submitAccountButton).click()
        cy.get('.alert').contains('error') 
    }
}

export default NewAccount