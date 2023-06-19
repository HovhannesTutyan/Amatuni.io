/// <reference types="cypress" />

import { should } from 'chai';
import '../clubsCoach/commands';
import clubLocators from '../clubsCoach/locators'

context('Actions', () => {
    let email;
    let password;
    beforeEach(() => {
        cy.viewport(1200, 900);
        const currentTestCase = Cypress.mocha.getRunner().suite.ctx.currentTest.title;
        if(currentTestCase === 'Login with player account'){
            email = 'player5@gmail.com';
            password = 'password'
        } else if(currentTestCase === 'Login with Coach account'){
            email = 'rapegor642@otanhome.com';
            password = 'password';
        } else {
            email = 'coach1@gmail.com';
            password = 'password';
        }
        cy.login(email, password);
    });
    //   it('login as coach, go to clubs page', () => {
    //         cy.visit('https://dev.foothunters.com/clubs')
    //         cy.get(clubLocators.clubTabsLong)
    //         .find('a')
    //         .should('have.length', 3)
    //         cy.get(clubLocators.clubTab)
    //         .first()
    //         .should('have.attr', 'aria-selected', 'true')
    //         .should('have.text', 'appsAll Clubs')
    //         .next()
    //         .should('have.attr', 'aria-selected', 'false')
    //         .should('have.text', 'done_outlineMy Clubs')
    //         .next()
    //         .should('have.attr', 'aria-selected', 'false')
    //         .should('have.text', 'how_to_regFollowing')
    //   })
  
    //    it('Create a club', () => {
    //         cy.visit('https://dev.foothunters.com/clubs')
    //         cy.contains('span', 'Create a Page')
    //         .should('exist')
    //         .parent()
    //         .parent()
    //         .should('have.attr', 'href', '/club/create')
    //         .click()
    //         cy.contains('span', 'Upload logo')
    //         .click()
    //         cy.get(clubLocators.clubLogoUpload)
    //         .should('exist')
    //         const fileName = "img1.jpg"
    //         cy.get('input[type=file]')
    //         .selectFile('cypress/fixtures/img1.jpg', {force:true})
    //         cy.get(clubLocators.clubCardImage)
    //         .should('exist')
    //         cy.get('span.block')
    //         .contains('Upload')
    //         .click()
    //         cy.get(clubLocators.clubCreateName)
    //         .type('Club By Coach1')
    //         cy.get(clubLocators.clubCreateTitle)
    //         .should('have.text', 'Club By Coach1')
    //         cy.get(clubLocators.clubCreateEmail)
    //         .type('club1@gmail.com')
    //         cy.get(clubLocators.clubCreateFlag)
    //         .click()
    //         cy.contains('div', 'Argentina')
    //         .click()
    //         cy.get(clubLocators.clubCountryCode)
    //         .should('have.text', '+54')
    //         cy.get(clubLocators.clubCreatePhone)
    //         .type('123456789')
    //         .should('have.value', '123456789')
    //         cy.get(clubLocators.clubCreateSite)
    //         .type('https://coach1@gmail.com')
    //         .should('have.value', 'https://coach1@gmail.com')
    //         cy.get(clubLocators.clubCreateContent)
    //         .type('Lorem ipsum dolor sit amet consictatur adipiscing elit. Lorem ipsum dolor sit amet consictatur adipiscing elit.')
    //         cy.contains('span', 'Create')
    //         .parent()
    //         .parent()
    //         .should('have.attr', 'type', 'button')
    //         .click()
    //     })
  
    // it('Check if new club is visible only in My Clubs', () => {
    //     cy.visit('https://dev.foothunters.com/clubs')
    //     cy.contains('Coach1')
    //     .should('not.exist')
    //     cy.visit('https://dev.foothunters.com/clubs/my')
    //     cy.get(clubLocators.clubPageTabs)
    //     .should('have.attr', 'aria-selected', 'true')
    //     .should('have.attr', 'href', '/clubs/my')
    //     cy.get(clubLocators.clubCard)
    //     .should('have.attr', 'href')
    //     .and('include', 'coach1')
    //     cy.get(clubLocators.clubCardImage)
    //     .should('have.css', 'object-fit', 'cover')
    //     .should('have.css', 'object-position', '50% 50%');
    //     cy.get(clubLocators.clubCardTitle)
    //     .first()
    //     .should('have.text', 'Club By Coach1 ')
    //     cy.get(clubLocators.clubCardFollowers)
    //     .first()
    //     .should('have.text', '0 Followers')
    //     cy.get(clubLocators.clubFollowButton)
    //     .should('have.text', 'Follow')
    //     .parent()
    //     .parent()
    //     .should('have.attr', 'type', 'button')
    //     .should('have.css', 'font-size', '12px')
    // })
  
    // it('Check if coach deos not have a plan, can not create more than one club.', () => {
    //     cy.visit('https://dev.foothunters.com/clubs')
    //     cy.contains('span', 'Create a Page')
    //     .should('exist')
    //     .parent()
    //     .parent()
    //     .should('have.attr', 'href', '/club/create')
    //     .click()
    //     cy.get(clubLocators.clubLimitOff)
    //     .should('exist')
    //     cy.get(clubLocators.clubChangePlan)
    //     .should('have.attr', 'href', '/pricing')
    // })
  
    // it('Verify not moderated Club single page header.', () => {
    //     cy.visit('https://dev.foothunters.com/clubs/my')
    //     cy.contains('span', 'Club By Coach1 ')
    //     .click()
    //     cy.get(clubLocators.clubSingleLogo)
    //     .should('have.css', 'object-fit', 'contain')
    //     .should('have.css', 'object-position', '50% 50%')
    //     cy.contains('span', 'Club By Coach1')
    //     .should('exist')
    //     cy.get(clubLocators.clubSingleFollow)
    //     .should('have.text', 'Follow')
    //     .click()
    //     cy.get(clubLocators.clubFollowCount)
    //     .should('have.text', '1 Following' )
    //     cy.get(clubLocators.clubFollowLabel)
    //     .should('have.text', 'Following')
    //     .click()
    //     cy.get(clubLocators.clubFollowCount)
    //     .should('have.text', '0 Following')
    //     cy.get(clubLocators.clubSocialLinks)
    //     .children()
    //     .should('have.length', 3)
    //     .first()
    //     .should('have.attr', 'href', 'tel:(+54) 123456789')
    //     .next()
    //     .should('have.attr', 'href', 'mailTo:club1@gmail.com')
    //     .next()
    //     .should('have.attr', 'href', 'https://coach1@gmail.com')
    //     cy.get('div[role="status"]')
    //     .should('have.text', '1')
    //     .click()
    //     cy.get('.q-list.q-list--separator')
    //     .children()
    //     .first()
    //     .should('have.attr', 'href')
    //     .and('include', '/statistics')
    //     cy.contains('i', 'notifications_none')
    //     .should('exist')
    //     .click()
    // })
  
    // it('Verify not moderated Club sinle page tabs', () => {
    //     cy.visit('https://dev.foothunters.com/clubs/my')
    //     cy.contains('span', 'Club By Coach1 ')
    //     .click()
    //     cy.get(clubLocators.clubSingleTabsWrapper)
    //     .children('a')
    //     .first()
    //     .should('have.attr', 'aria-selected', 'true')
    //     .should('have.attr', 'href')
    //     .and('include', '/club/')
    //     cy.get(clubLocators.clubPageTab)
    //     .should('have.text', 'Page')
    //     cy.get(clubLocators.clubSingleTabsWrapper)
    //     .children('a')
    //     .eq(1)
    //     .find(clubLocators.clubTabs)
    //     .should('have.text', 'Team')
    //     .parent()
    //     .parent()
    //     .should('have.attr', 'href')
    //     .and('include', '/team')
    //     cy.get(clubLocators.clubSingleTabsWrapper)
    //     .children('a')
    //     .eq(2)
    //     .find('.q-tab__label')
    //     .should('have.text', 'Tryouts')
    //     .parent()
    //     .parent()
    //     .should('have.attr', 'href')
    //     .and('include', '/tryouts')
    //     cy.get(clubLocators.clubSingleTabsWrapper)
    //     .children('a')
    //     .eq(3)
    //     .find('.q-tab__label')
    //     .should('have.text', 'Camps')
    //     .parent()
    //     .parent()
    //     .should('have.attr', 'href')
    //     .and('include', '/camps')
    //     cy.get(clubLocators.clubSingleTabsWrapper)
    //     .children('a')
    //     .eq(4)
    //     .find('.q-tab__label')
    //     .should('have.text', 'Photos')
    //     .parent()
    //     .parent()
    //     .should('have.attr', 'href')
    //     .and('include', '/photos')
    //     cy.get(clubLocators.clubSingleTabsWrapper)
    //     .children('a')
    //     .eq(5)
    //     .find('.q-tab__label')
    //     .should('have.text', 'Videos')
    //     .parent()
    //     .parent()
    //     .should('have.attr', 'href')
    //     .and('include', '/videos')
    //     cy.get(clubLocators.clubSingleTabsWrapper)
    //     .children('a')
    //     .eq(6)
    //     .find('.q-tab__label')
    //     .should('have.text', 'Statistics')
    //     .parent()
    //     .parent()
    //     .should('have.attr', 'href')
    //     .and('include', '/statistics')
    // })
  
    // it('Add a Player and a Coach to the club, check their pending status', () => {
    //   cy.visit('https://dev.foothunters.com/clubs/my');
    //   cy.contains('span', 'Club By Coach1').click();
    //   cy.get(clubLocators.clubEditSection).find('span.block').should('have.text', 'Edit page').parent().parent().should('have.attr', 'href').and('include', '/edit');
    //   cy.get(clubLocators.clubWaitModeration).eq(1).should('have.text', 'Your club will be published after moderation').next().should('have.text', 'deleteDelete');
    //   cy.get(clubLocators.clubDescription).should('exist').children().first().then($firstChild => {
    //     cy.wrap($firstChild).should('have.text', 'Description');
    //     cy.wrap($firstChild).next().then($secondChild => {
    //       const text = $secondChild.text();
    //       cy.wrap(text).should('contain', 'Lorem ipsum');
    //     });
    //   });
    //   cy.get(clubLocators.clubAddPlayersSection)
    //   .eq(0)
    //   .should('exist')
    //   .children()
    //   .children()
    //   .first()
    //   .then($firstChild => {
    //     cy.wrap($firstChild)
    //     .should('have.text', 'PlayersAdd')
    //     .should('have.class', clubLocators.clubSectionTitle);
    //     });
    //   cy.addStaff(0, 'player5@gmail.com', 'player');
    //   cy.checkStaff(0, 'player5 player5Pendingclose', 'Player')
    //   cy.addStaff(0, 'rapegor642@otanhome.com', 'Coach');
    //   cy.checkStaff(1, 'Coach CoachPendingclose', 'Coach')
    //   cy.get('.q-card.q-card--shadowed.club__members')
    //   .should('exist').children().children().first().then($firstChild => {
    //     cy.wrap($firstChild).should('have.class', clubLocators.clubSectionTitle)
    //     .should('have.text', 'Page adminsAdd');
    //     cy.wrap($firstChild).next().then($secondChild => {
    //       cy.wrap($secondChild).find(clubLocators.adminLogo).should('exist');
    //       cy.wrap($secondChild).find(clubLocators.clubCardImage).should('have.css', 'object-fit', 'cover');
    //       cy.wrap($secondChild).find(clubLocators.adminName).should('have.text', 'coach1 coach1');
    //       cy.wrap($secondChild).find(clubLocators.staffPendingRowBottom).should('have.text', 'Page owner');
    //     });
    //   });
    // });
    // it('Check if same player can not be added for the second time', () => {
    //     cy.visit('https://dev.foothunters.com/clubs/my');
    //     cy.contains('span', 'Club By Coach1').click();
    //     cy.get(clubLocators.clubAddPlayersSection).eq(1)
    //     .find(clubLocators.clubPlayerAdd)
    //     .click()
    //     cy.get(clubLocators.playerAddInput)
    //     .click()
    //     .type('player5@gmail.com', { delay: 100 })
    //     .should('have.value', 'player5@gmail.com')
    //     cy.wait(2000)
    //     cy.get('div[role="menu"]').children()
    //     .should('not.be.visible')
    // });
    //  // accept invite and check the card
    // it('Login with player account', () => { 
    //     cy.visit('https://dev.foothunters.com/clubs');
    //     cy.notificationClick('Club By Coach1')
    //     cy.contains('.q-btn__content.text-center.col.items-center.q-anchor--skip.justify-center.row', 'Accept')
    //     .click()
    //     cy.checkStaff(0, 'player5 player5', 'Player') 
    // })
    // it('Login with Coach account', () => {
    //     cy.visit('https://dev.foothunters.com/clubs');
    //     cy.notificationClick('Club By Coach1')
    //     cy.contains('.q-btn__content.text-center.col.items-center.q-anchor--skip.justify-center.row', 'Accept')
    //     .click()
    //     cy.checkStaff(1, 'Coach Coach', 'Coach')
    // })
    // it('Verify that new staff is added to Team', () => {
    //   cy.visit('https://dev.foothunters.com/clubs/my');
    //   cy.contains('span', 'Club By Coach1').click();
    //   cy.contains('div.q-tab__label', 'Team').click()
    //   cy.checkTeam(0, 'player5 player5Player0 Followers');
    //   cy.checkTeam(1, 'Coach CoachCoach0 Followers')
    // })    
  });