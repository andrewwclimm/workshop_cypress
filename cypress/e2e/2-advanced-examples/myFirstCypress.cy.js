import cypressMethods from './myFirstCypressMethods.cy.js'


context('suite of tests',()=>{

    it('my first cypress test',()=>{
        cypressMethods.visitExampleSite()
        cypressMethods.writeEmail()
    })
})

