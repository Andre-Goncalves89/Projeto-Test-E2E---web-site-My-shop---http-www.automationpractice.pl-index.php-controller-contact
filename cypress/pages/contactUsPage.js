class ContactUs {
    selectorList() {
        const selectors = {
            idContactType : "[name='id_contact']",
            emailAdressField: "[data-validate='isEmail']",
            orderReferenceField: "[name='id_order']",
            messageField: "[name='message']",
            submitButtonSend: "[name='submitMessage']",
            validateSucess: '.alert-success',
            msgErrorAlert: '.alert-danger'
        }
        return selectors
    }
    fillMessage(email, order, msg ) {
        cy.get(this.selectorList().idContactType).select(1)
        cy.get(this.selectorList().emailAdressField).type(email)
        cy.get(this.selectorList().orderReferenceField).type(order)
        cy.get(this.selectorList().messageField).type(msg)
        cy.get(this.selectorList().submitButtonSend).click()
    }
    validateSucessFunction() {
        cy.get(this.selectorList().validateSucess).contains('Your message has been successfully sent to our team.')
    }
    msgError() {
        cy.get(this.selectorList().msgErrorAlert).contains('There is 1 error')
    }
}

export default ContactUs