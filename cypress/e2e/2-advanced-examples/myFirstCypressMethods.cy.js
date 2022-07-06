import myWebLoginElementsCy from "./myWebLoginElements.cy.js"

const visitExampleSite =() => {
    cy.visit('https://example.cypress.io/commands/actions')
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

export default {
    visitExampleSite,
    writeEmail,
    verifyPasswordLabel,
    typePassword
}