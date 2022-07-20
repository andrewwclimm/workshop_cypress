import myWebLoginElementsCy from "./myWebLoginElements.cy.js"
import togglePopup from './myWebActions.cy.js'

const visitExampleSite =() => {
   // cy.setCookie('myCookie','valueCookie')
    cy.visit('https://example.cypress.io/commands/actions')

    //https://fitfoodway.ro/
}

const writeEmail = () => {
    cy.get(myWebLoginElementsCy.inputEmail).type('myEmail@gmail.com').should('not.have.value','myEmail@yahoo.com')
    cy.get(myWebLoginElementsCy.inputEmail).clear().should('not.have.value','myEmail@gmail.com')
}

const verifyPasswordLabel =() => {
    cy.get(myWebLoginElementsCy.labelPassword).contains('Password')
    cy.get(myWebLoginElementsCy.labelPassword).should('contain','Password')
}

const typePassword = () => {
    cy.get(myWebLoginElementsCy.inputPassword).type('123456').should('have.value','123456').should('not.contain','123456')
}

const pressOnTogglePopup = () => {
    // cy.get(togglePopup.togglePopup).click()
    // cy.get(togglePopup.togglePopup).click({force:true})
    cy.get(togglePopup.togglePopup).invoke('click')
}

const goOnUtilities = () => {
    cy.contains('Utilities').click()
    //intercept endpoint after clicking utilities for element watches to be displayed
}

const verifyElementOnUtilities = () => {
 //   cy.intercept('GET','/utilities').as('utilitiesEndpoint')
    cy.contains('Watches').should('be.visible')
 //   cy.wait('@utilitiesEndpoint')
}

const scrollToLastElementOnPage = () => {
    cy.get(togglePopup.cypressPromiseFromUtilites).find('a').scrollIntoView().click()
}

export default {
    visitExampleSite,
    writeEmail,
    verifyPasswordLabel,
    typePassword,
    pressOnTogglePopup,
    goOnUtilities,
    verifyElementOnUtilities,
    scrollToLastElementOnPage,
}