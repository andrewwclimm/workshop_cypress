import myWebLoginElementsCy from "./myWebLoginElements.cy.js"

const visitExampleSite =() => {
    cy.visit('https://example.cypress.io/commands/actions')
}

const writeEmail = () => {
   // cy.get('[type="email"]').type('myEmail@gmail.com').should('not.have.value','myEmail@yahoo.com')
    cy.get(myWebLoginElementsCy.inputEmail).type('myEmail@gmail.com').should('not.have.value','myEmail@yahoo.com')

    // let identification = cy.get('[type="email"]')
    // identification.type('myEmail@gmail.com')
}

export default {
    visitExampleSite,
    writeEmail
}