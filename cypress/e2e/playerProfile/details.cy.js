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
    
})