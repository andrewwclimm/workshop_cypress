import { Given,Then } from "cypress-cucumber-preprocessor/steps";

Given('I navigate to the site', () => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit('/')
  })


Then('I see the contact information', () => {
    cy.contains('Contact')
  })


  //https://httpbin.org/post
  //https://httpbin.org/get
  //https://httpbin.org/put
  //https://httpbin.org/delete