// <reference types = "cypress"/>

Cypress.config('defaultCommandTimeout', 10000); // Set timeout to 10 seconds

describe('Login Test', () => {
    it('should login with valid credentials', () => {

        cy.visit('https://cor2.usecology.com/');
        cy.get('#user').type('manand84');
        cy.get('#passwrd').type('Changeme!@2345');
        cy.get('#login').click();
        cy.wait(15000);
        cy.get('.leftmenu').should('be.visible');
        cy.get('.leftmenu').should('be.visible');
        cy.screenshot('passing_test');
        cy.get('.left-top-icon').should('contain', ' Waste Disposal');
        cy.request('https://cor2.usecology.com/version.json?t=1707826669772').then((response) => {
            // Verify the response status code
            expect(response.status).to.eq(200);
        });
    });
    it('Should handle exceptions using Cypress commands', { retries: 2 }, () => {
        cy.visit('https://cor2.usecology.com/');
        cy.get('#user').type('manand84');
        cy.get('#passwrd').type('Changeme!@2345');
        cy.get('#login').click();
        // cy.wait(15000);
        cy.get('.leftmenu').should('be.visible');
    })



});