import cypressMethods from './myFirstCypressMethods.cy.js'

context('suite of tests',()=>{

    it('my first cypress test',()=>{
        cypressMethods.visitExampleSite()
        cypressMethods.writeEmail()
        cypressMethods.verifyPasswordLabel()
        cypressMethods.typePassword()
        cypressMethods.pressOnTogglePopup()
        cypressMethods.goOnUtilities()
        cypressMethods.verifyElementOnUtilities()
        cypressMethods.scrollToLastElementOnPage()
    })
})

