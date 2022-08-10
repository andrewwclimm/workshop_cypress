import popups from './foodSiteHomePopups.cy.js'

const visitFoodSite = (visitationSite) => {
    cy.visit(`${visitationSite}`)
}

const cancelSubscriptionPopup = () =>{
    cy.get(popups.subscriptionPopup).click()
}

const pressOnContact = () => {
    cy.contains('Contact').click()
}

const fillInputInformation = () =>{
    cy.get('[name="zn_form_field_numele_dvs_1_0"]').type('Andrei Clim').should('contain.value','Andrei Clim')
    cy.get('[name="zn_form_field_telefon1_1"]').type('+40799001001').should('contain.value','+40799001001')
    cy.get('[name="zn_form_field_email1_2"]').type('andrew@gmail.com').should('contain.value','andrew@gmail.com')
    cy.get('[name="zn_form_field_subiect1_3"]').type('request').should('contain.value','request')
    cy.get('[name="zn_form_field_mesaj1_4"]').type('please make the pho soup spicier').should('contain.value','please make the pho soup spicier')
}

const checkAgreement = () => {
    cy.get('[name=zn_form_field_sunt_de_acord_cu_preluarea_si_prelucrarea_datelor_furnizate_in_acest_formular_conform_a_href_https_iasi_littlehanoi_ro_termeni_si_conditii_termenii_si_conditiile_a_gdpr_1_5]').check().should('be.checked')
}

export default {
    visitFoodSite,
    cancelSubscriptionPopup,
    pressOnContact,
    fillInputInformation,
    checkAgreement,
}