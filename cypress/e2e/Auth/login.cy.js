// /// <reference types="cypress" />

import './commands';
import {should} from 'chai';
import generalActions from './actions';
import locators from './locators';
const urlHome = Cypress.env('API_URL');
const actions = new generalActions();

Cypress.on('uncaught:exception', (err, runnable) => {
    cy.log(err);
    return false;
})

context ('Actions', () => {
    it('Valid login', () => {
            cy.visit(`${urlHome}`);
            actions.clickByLocator(locators.buttonSidebar);
            actions.clickByLocator(locators.signInButton);
            actions.typeText(locators.emailInput, 'email')
            actions.typeText(locators.passwordInput, 'password')
    })
})