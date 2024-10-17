import userData from '../fixtures/user-data.json'
import HomePage from '../pages/homePage'
import ContactUs from '../pages/contactUsPage'

const homePage = new HomePage()
const contactUs = new ContactUs()

describe('Contact Us', () => {
    it('Contact us confirm', () => {
        cy.viewport(800, 600)
        cy.visit('http://www.automationpractice.pl/index.php')
        homePage.selectContactUs()
        contactUs.fillMessage('teste321@gmail.com', 'ok', 'abcd...')
        contactUs.validateSucessFunction()
    })
})

describe('Contact Us', () => {
    it.skip('Contact us failed', () => {
        cy.viewport(800, 600)
        cy.visit('http://www.automationpractice.pl/index.php')
        homePage.selectContactUs()
        contactUs.fillMessage('teste321', 'ok', 'abcd...')
        contactUs.msgError()
    })
})