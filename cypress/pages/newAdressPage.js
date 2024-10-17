class NewAdress {
    selectorList() {
        const selectors = {
            clickToNewAdress: "[title='Add my first address']",
            nameCompanyField: "[name='company']",
            adress1Field: "[name='address1']",
            adress2Field: "[name='address2']",
            cityField: "[name='city']",
            idStateField: "[name='id_state']",
            zipCodeField: "[name='postcode']",
            idCountryField: "[name='id_country']",
            homePhoneField: "[name='phone']",
            mobilePhoneField: "[name='phone_mobile']",
            additionalInformationField: "[data-validate='isMessage']",
            submitButton: "[name='submitAddress']",
            alertDanger: '.alert-danger',
            adressDeletedValidate: '.alert-warning',
            deleteButton: "[title='Delete']",
        }
        return selectors
    }
    clickToNewAdressFunction() {
        cy.get(this.selectorList().clickToNewAdress).click()
    }
    fillComponents(company, adress1, adress2, city, zipcode, homephone, mobilephone) {
        cy.get(this.selectorList().nameCompanyField).type(company)
        cy.get(this.selectorList().adress1Field).type(adress1)
        cy.get(this.selectorList().adress2Field).type(adress2)
        cy.get(this.selectorList().cityField).type(city)
        cy.get(this.selectorList().idStateField).select(33)
        cy.get(this.selectorList().zipCodeField).type(zipcode)
        cy.get(this.selectorList().idCountryField).select(0)
        cy.get(this.selectorList().homePhoneField).type(homephone)
        cy.get(this.selectorList().mobilePhoneField).type(mobilephone)
    }
    clickToSend() {
        cy.get(this.selectorList().submitButton).click()
    }
    validateAdress() {
        cy.get(':nth-child(1) > .dark').contains('Your addresses are listed below.')
    }
    errorMsg() {
        cy.get(this.selectorList().alertDanger).contains('error')
    }
    deleteAdress() {
        cy.get(this.selectorList().deleteButton).click()
        cy.get('.alert').contains('No addresses are available.')
        
    }

}

export default NewAdress