import userData from '../fixtures/user-data.json'
import HomePage from '../pages/homePage'
import ContactUs from '../pages/contactUsPage'
const Chance = require('chance')

const homePage = new HomePage()
const contactUs = new ContactUs()
const chance = new Chance()

describe('Contact Us', () => {
    it('Contact us confirm', () => {
        cy.viewport(800, 600)
        cy.visit('http://www.automationpractice.pl/index.php')
        homePage.selectContactUs()
        contactUs.fillMessage(chance.email(), 'ok', chance.paragraph({ sentences: 1 }))
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