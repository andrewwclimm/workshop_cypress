import foodSite from '../foodSiteMethods.cy.js'
describe('suite of food site tests',()=>{ 

    beforeEach(() => { 
        foodSite.visitFoodSite('/')
        
    })

    it('complete contact request form',()=>{
        foodSite.pressOnContact()
        foodSite.fillInputInformation()
        foodSite.checkAgreement()
    })

    // it('second food site test',()=>{

    // })

    // it('third food site test',()=>{
  
    // })

    // it('4-th food site test',()=>{

    // })

    // it('5-th food site test',()=>{

    // })

})