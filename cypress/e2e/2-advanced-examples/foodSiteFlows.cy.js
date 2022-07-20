import foodSite from './foodSiteMethods.cy.js'
describe('suite of food site tests',()=>{ 

    beforeEach(() => { 
        foodSite.visitFoodSite('/')
        
    })

    it('first food site test',()=>{
        foodSite.cancelSubscriptionPopup()
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