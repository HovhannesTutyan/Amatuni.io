import clubLocators from "../clubsCoach/locators";

Cypress.Commands.add('login', (email, password) => {
    cy.visit('https://dev.foothunters.com/login')
    cy.get(clubLocators.emailInput)
    .type(email).should('have.value', email)
    cy.get(clubLocators.passwordInput)
    .type(password)
    .type('{enter}')
    cy.wait(3000)
})

Cypress.Commands.add('addStaff', (index, email, text) => {
  cy.get(clubLocators.clubAddPlayersSection).eq(index)
  .find(clubLocators.clubPlayerAdd)
  .click()
  cy.get(clubLocators.playerAddPopup)
  .should('exist')
  cy.get(clubLocators.playerAddTitle)
  .should('have.text', 'Add Staff')
  .next()
  .should('have.text', 'To add staff please start typing and select from our suggestions.')
  // cy.get(clubLocators.playerAddBottom) BUG after popup close the Add staff button is still active.
  // .contains('button', 'Add to Page')
  // .should('have.attr', 'aria-disabled', 'true')
  cy.get(clubLocators.playerAddInput)
  .click()
  .type(text, { delay: 100 })
  .should('have.value', text)
    cy.wait(2000)
    cy.get(clubLocators.playerAddSuggestion)
    .should('exist')
    .find(clubLocators.playerAddRow)        
    .each(($child) => {
        const childTexts = [...$child].map((child) => child.innerText)
        cy.wrap(childTexts).each((child) => {
            expect(child).to.match(new RegExp(text, 'i'))
            if(child.includes(email)){
              cy.wrap($child).click();  
              cy.get(clubLocators.playerAddBottom) 
              .contains('button', 'Add to Page')
              .should('not.have.attr', 'aria-disabled', 'true')
              .click()
            } else {
              cy.log('User already exists.')
            }                  
        });        
    });
})

Cypress.Commands.add('checkStaff', (row, text, role) => {
  cy.get(clubLocators.clubAddPlayersSection).eq(row)
  .find(clubLocators.staffPendingRow)
  .should('be.visible')
  .should('have.text', text);
  cy.get(clubLocators.clubAddPlayersSection).eq(row).
  find(clubLocators.staffPendingRowBottom).eq(0)
  .should('have.text', role);
})

Cypress.Commands.add('checkTeam', (index, text) => {
  cy.get(clubLocators.teamCard).eq(index)
  .children()
  .first()
  .should('have.class', clubLocators.teamCardAvatar)
  .should('have.css', 'font-size', '160px')
  cy.get(clubLocators.teamCard).eq(index)
  .children()
  .eq(1)
  .should('have.class', clubLocators.teamCardBottom)
  .should('have.text', text)
})

Cypress.Commands.add('notificationClick', (text) => {
  cy.get('div[class="flex-shrink q-gutter-x-sm"] button:nth-child(2)')
  .click()
  cy.contains('div.q-item__label.overflow-hidden', text)
  .first()
  .click()
})