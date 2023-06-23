import profileLocators from "./locators"

Cypress.Commands.add('login', (email, password) => {
    cy.visit('https://dev.foothunters.com/login')
    cy.get(profileLocators.emailInput)
    .type(email).should('have.value', email)
    cy.get(profileLocators.passwordInput)
    .type(password)
    .type('{enter}')
    cy.wait(2000)
})
Cypress.Commands.add('uploadPhoto', (imgSrc, options={}) => {
    cy.contains('Change')
    .click()
    cy.get('input[type=file]')
    .selectFile(imgSrc, {force:true})
    cy.wait(2000)
    if(options.cropAfterUpload){
        cy.get(profileLocators.profileCroptopright).first()
        .trigger('mousedown', {button: 0, clientX: 250, clientY: 250})
        .trigger('mousemove', {clientX: 350, clientY: 350})
        cy.contains('.block', 'Upload')
        .click()
    }
})

Cypress.Commands.add('verifyPhoto', (imgSrc, options={}) => {
    cy.get(profileLocators.profilePhoto)
    .find(profileLocators.profilePhotoImage)
    .should('have.attr', 'src')
    .and('include', imgSrc)
    if(options.deleteAfterUpload) {
        cy.contains('.block', 'Delete')
        .click()
        cy.get(profileLocators.cardDeleteDialog)
        .find(profileLocators.dialogHeader)
        .should('have.text', 'Delete Photo')
        cy.get(profileLocators.cardDeleteDialog)
        .find(profileLocators.dialogBody)
        .should('have.text', 'Are you sure you want to delete your photo?')
        cy.contains('.block', 'OK')
        .click()
    }
})

// change name, verify banner text and check if name is disabled.
Cypress.Commands.add('changeName', (nameBefore, nameFirst, nameLast) => {
    cy.get(profileLocators.profileSettingsItem).eq(1)
    .find(profileLocators.fullNameLabel)
    .should('have.text', `Full name${nameBefore}`)
    cy.get(profileLocators.profileSettingsItem).eq(1)
    .find(profileLocators.fullNameEdit)
    .click()
    cy.get(profileLocators.firstNameInput)
    .clear()
    .type(nameFirst)
    .should('have.value', nameFirst)
    cy.get(profileLocators.lastNameInput)
    .clear()
    .type(nameLast)
    .should('have.value', nameLast)
    cy.get(profileLocators.bannerContent)
    .should('have.text', 'Please Note!After your profile is approved you will not be able to change your name, surname during 60 days period.')
    cy.contains('.block', 'Save')
    .click()
    cy.contains('.q-item__label', "Full name")
    .parent()
    .parent()
    .should('have.class', 'disabled')
})

Cypress.Commands.add('verifyUsername', (unameOld, unameNew, unameFormat) => {
    cy.get(profileLocators.profileSettingsItem).eq(2)
    .find(profileLocators.fullNameLabel)
    .should('contain.text', `Username${unameOld}`);
    cy.get(profileLocators.profileSettingsItem).eq(2)
    .find(profileLocators.fullNameEdit)
    .click();
    cy.get(profileLocators.usernameInput)
    .clear()
    .type(unameNew)
    .should('have.value', unameNew);
    cy.get('.block:visible')
    .contains('Save')
    .click()
    cy.get(profileLocators.profileSettingsItem).eq(2)
    .find(profileLocators.fullNameLabel)
    .should('contain.text', unameFormat);
})

Cypress.Commands.add('verifyCountry', (country, province, address, zip, options={})=> {
    cy.get(profileLocators.profileSettingsItem).eq(3)
    .find(profileLocators.fullNameLabel)
    .should('contain.text', 'Country');
    cy.get(profileLocators.profileSettingsItem).eq(3)
    .find(profileLocators.fullNameEdit)
    .click();
    if(options.verifyError) {        
        cy.get('.block:visible')
        .contains('Save')
        .click()
        cy.contains(profileLocators.countryError, 'The Country field is required.')
        .should('be.visible')
        cy.contains(profileLocators.countryError, 'The Province field is required.')
        .should('be.visible')
    }
    cy.contains(profileLocators.countryPicker, 'Country')
    .click({force:true})
    cy.get(profileLocators.countrySelector)
    .scrollIntoView()
    .contains(country)
    .click()
    if(options.verifyError){
        cy.get('.block:visible')
        .contains('Save')
        .click()
        cy.contains(profileLocators.countryError, 'The Province field is required.')
        .should('be.visible')
    }
    cy.get(profileLocators.provinceInput)
    .clear()
    .type(province)
    cy.get(profileLocators.addressInput)
    .clear()
    .type(address)
    .should('have.value', address)
    cy.get(profileLocators.zipInput)
    .clear()
    .type(zip)
    .should('have.value', zip)
    cy.get('.block:visible')
    .contains('Save')
    .click()
})

Cypress.Commands.add('verifyEducation', (institution, school, agent)=> {
    cy.get(profileLocators.profileSettingsItem).eq(4)
    .find(profileLocators.fullNameLabel)
    .should('contain.text', 'Education');
    cy.get(profileLocators.profileSettingsItem).eq(4)
    .find(profileLocators.fullNameEdit)
    .click();
    cy.get(profileLocators.educationInput)
    .click({force:true})
    cy.get(profileLocators.countrySelector)
    .contains(institution)
    .click()
    cy.get(profileLocators.schoolInput)
    .clear()
    .type(school)
    .should('have.value', school);
    cy.get(profileLocators.agentInput)
    .clear()
    .type(agent)
    .should('have.value', agent);
    cy.get('.block:visible')
    .contains('Save')
    .click();
})