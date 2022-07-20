import popups from './foodSiteHomePopups.cy.js'

const visitFoodSite = (visitationSite) => {
    cy.intercept('POST', '/fitfoodway/popup').as('fitfoodWaySubPopup')

    cy.visit(`${visitationSite}`)
  //  cy.visit('https://fitfoodway.ro/')
    cy.wait('@fitfoodWaySubPopup')
}

const cancelSubscriptionPopup = () =>{
    cy.get(popups.subscriptionPopup).click()
}

export default {
    visitFoodSite,
    cancelSubscriptionPopup,
}