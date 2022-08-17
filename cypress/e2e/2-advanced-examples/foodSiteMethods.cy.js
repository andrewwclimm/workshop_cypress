import popups from './foodSiteHomePopups.cy.js'

const visitFoodSite = (visitationSite) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit(`${visitationSite}`)

    cy.setCookie('fakeCookie1', '123ABC')
   cy.viewport('iphone-6')
   cy.viewport('samsung-note9')

    cy.getCookie('session_id')
      //  .should('have.property', 'value', '189jd09su')
        .then((cookie) => {
    // cookie is an object with "domain", "name" and other properties
    cookie.should('have.value','value')


    cy.getCookies()
    .should('have.length', 4)
    .then((cookies) => {
      expect(cookies[1]).to.have.property('name', '_fbp')
    })

    cy.getCookies()
    .should('have.length', 4)
    .then((cookies) => {
      expect(cookies[2]).to.have.property('name', 'tk_lr')
    })

    cy.getCookies()
    .should('have.length', 4)
    .then((cookies) => {
      expect(cookies[3]).to.have.property('name', 'tk_r3d')
    })

    cy.getCookies()
    .should('have.length', 4)
    .then((cookies) => {
      expect(cookies[4]).to.have.property('name', 'tk_or')
    })
})

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