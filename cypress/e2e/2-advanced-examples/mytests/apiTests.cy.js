import { GETForMyApp,POSTForMyApp } from './listsOfApiRequests.cy'
describe('suite of food site tests',()=>{ 

    it('complete contact request form',()=>{
       cy.request('GET',GETForMyApp).its('status').should('eq',200) 
       cy.request('POST',POSTForMyApp).its('status').should('eq',200)
       cy.request('POST',POSTForMyApp).then((response)=>{
           expect(response).to.have.property('headers')
       })
    })
})