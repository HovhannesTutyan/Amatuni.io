/// <reference types="cypress" />

import { should } from 'chai';
import './commands';
import profileLocators from './locators'
const apiUrl = Cypress.env('API_URL') 
context('Actions', () => {
    beforeEach(() => {
        cy.login('player1@gmail.com', 'password')
        cy.viewport(1200, 800)
    })
    it('Verify profile menu', () => {
        cy.get(profileLocators.profileAvatar).click()
        cy.get(profileLocators.profileCard)
        .find(profileLocators.cardName)
        .should('have.text', 'player1 p.')
        cy.get(profileLocators.profileCard)
        .find(profileLocators.cardRole)
        .should('have.text', 'Player')
        cy.get(profileLocators.profileCard)
        .find(profileLocators.cardBonus)
        .should('have.text', "50help_outline")
        cy.get(profileLocators.cardBonusLink)
        .should('have.attr', 'href', '/bonus')
        cy.get(profileLocators.cardMenuWrapper)
        .children()
        .first()
        .should('have.text', 'person_outlineMy Profile')
        .should('have.attr', 'href')
        .and('include', '/profile/player1')
        cy.get(profileLocators.cardMenuWrapper)
        .children()
        .eq(1)
        .should('have.text', 'settingsSettings')
        .should('have.attr', 'href')
        .and('include', '/settings')
        cy.get(profileLocators.cardMenuWrapper)
        .children()
        .eq(2)
        .should('have.text', 'logoutLogout')
    })
    it('Fill the profile from settings', () => {
        cy.visit(`${apiUrl}/settings`)
        cy.get(profileLocators.settingsMenu)
        .children('a')
        .first()
        .should('have.attr', 'href', '/settings')
        .should('have.text', 'settingsGeneral')
        .should('have.attr', 'aria-selected', 'true')
        .next()
        .should('have.attr', 'href', '/settings/details')
        .should('have.text', 'manage_accountsDetails')
        .next()
        .should('have.attr', 'href', '/settings/security')
        .should('have.text', 'securitySecurity')
        .next()
        .should('have.attr', 'href', '/settings/followings')
        .should('have.text', 'supervisor_accountMy Followings')
        .next()
        .should('have.attr', 'href', '/settings/payment/invoices')
        .should('have.text', 'order_approveInvoices')
        .next()
        .should('have.attr', 'href', '/settings/packages')
        .should('have.text', 'monetization_onPackages')
    })
    it('Check header', () => {
        cy.visit(`${apiUrl}/settings`)
        cy.get(profileLocators.settingsHeader)
        .should('have.text', 'General')
        cy.get(profileLocators.settingsPoints)
        .children()
        .first()
        .should('have.class', profileLocators.pointsClass)
        cy.get(profileLocators.pointsCount)
        .should('have.text', '50')
    })
    it('Verify Genereal Tab', () => {       
        cy.visit(`${apiUrl}/settings`);
        cy.get(profileLocators.profilePhoto)
        .children()
        .first()
        .should('have.attr', 'style', 'font-size: 38px;')
        .should('have.class', profileLocators.profilePhotoClass);
        cy.verifyPhoto(profileLocators.profilePhotoDefault);
        cy.get(profileLocators.profilePhotoEdit)
        .should('have.attr', 'type', 'button')
        .should('have.attr', 'style', 'font-size: 12px;')
        cy.uploadPhoto('cypress/fixtures/img2.png', {cropAfterUpload:true});
        cy.verifyPhoto(profileLocators.profilePhotoPng, {deleteAfterUpload:true});
        cy.uploadPhoto('cypress/fixtures/img3.jpeg', {cropAfterUpload:true});
        cy.verifyPhoto(profileLocators.profilePhotoJpg);
        cy.uploadPhoto('cypress/fixtures/img4.webp');
        cy.get(profileLocators.allowedFormat)
        .should('have.text', 'The file must be a file of type: jpeg, png, jpg, gif.')
        cy.contains('.block', 'Cancel')
        .click()
        cy.verifyPhoto(profileLocators.profilePhotoJpg)
        cy.changeName('player1 player1', 'playerFirst', 'playerLast')
        cy.verifyUsername('player1', 'playerFirst', 'first')
        cy.verifyCountry("Brazil", "San Paolo", "Address", "123456");
        cy.verifyEducation('High School', 'University', 'Agent')
    })


})