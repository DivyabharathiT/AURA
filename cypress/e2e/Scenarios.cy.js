// <reference types = "cypress"/>

describe('Login Test', () => {
  it.skip('should login with valid credentials', () => {
    // Visit the website
    cy.visit('https://cor2.usecology.com/');

    // Locate username field and enter username
    cy.get('#user').type('manand84');

    // Locate password field and enter password
    cy.get('#passwrd').type('Changeme!@2345');

    // Locate login button and click
    cy.get('#login').click();

    cy.wait(15000)
    // Wait until the dashboard menu loads
    cy.get('.leftmenu').should('be.visible');

    // Validate the dashboard locator is displayed
    cy.get('.leftmenu').should('be.visible');

  });


  it.skip('should register with valid credentials', () => {
    // Visit the website
    cy.visit('https://cor2.usecology.com/');

    // Click the sign up now button
    cy.get('.mt-15 > .fweight600 > .text-underline-hover').click();
    cy.wait(10000)

    // Enter user details
    cy.get('.d-none > :nth-child(1) > :nth-child(1) > .row > .col-xxl-7 > .form-control').type('John');
    cy.get('.d-none > :nth-child(1) > :nth-child(2) > .row > .col-xxl-7 > .form-control').type('Doe');
    cy.get('.d-none > :nth-child(2) > :nth-child(1) > .row > .col-xxl-7 > .form-control').type('asdhj');

    cy.get('.d-none > :nth-child(2) > :nth-child(2) > .row > .col-xxl-7 > .form-control').type('QA');
    cy.get('.d-none > :nth-child(3) > :nth-child(1) > .row > .col-xxl-7 > .form-control').type('123 Main St');

    cy.get('.d-none > :nth-child(3) > :nth-child(2) > :nth-child(1) > .col-xxl-7 > .row > .add1 > .form-control').type('Cityville');

    cy.get('.d-none > :nth-child(3) > :nth-child(2) > :nth-child(1) > .col-xxl-7 > .row > .add3 > .form-control').type('12345');


    //cy.get('select[formcontrolname="state"]').eq(2).select(4);


    // cy.contains(' CA - California ').click();

    cy.get('.d-none > :nth-child(4) > :nth-child(2) > .row > .col-xxl-7 > .form-control').type('Acme Inc');

    cy.get('.d-none > :nth-child(5) > :nth-child(1) > .row > .col-xxl-7 > .input-group > .form-control').type('johndoe@yopmail.com');
    cy.get('.d-none > :nth-child(6) > :nth-child(1) > .row > .col-xxl-7 > .input-group > .form-control').type('johndoe@yopmail.com');
    cy.get('.d-none > :nth-child(5) > :nth-child(2) > .row > .col-xxl-7 > .input-group > .form-control').type('1234567890');

    cy.get('.d-none > :nth-child(6) > :nth-child(2) > .row > .col-xxl-7 > .input-group > .form-control').type('1234567890');

    //  cy.scrollTo('bottom');
    cy.get('.pd-0 > .sectiondbg > .addtb > .SEC-D > tr.ng-untouched > :nth-child(2) > .input-group > .form-control').type('888880');
    cy.get('.pd-0 > .sectiondbg > .addtb > .SEC-D > tr.ng-untouched > :nth-child(2) > .input-group > .input-group-text > a > .fa').click();

    // Agree to the terms and create an account
    cy.get('.d-none > :nth-child(10) > .text-right > #idSubmit').click();

    // Validate the success message
    cy.get('[data-test=success-message]').should('be.visible').contains('Registration successful');
  });
  it.skip('should register with valid credentials', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://cor2.usecology.com/');
    cy.get('#user').clear('manand84');
    cy.get('#user').type('manand84');
    cy.get(':nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
    cy.get('#passwrd').clear();
    cy.get('#passwrd').type('Changeme!@2345');
    cy.get('#login').click();
    cy.wait(15000)
    cy.get('.leftmenu > .fa').click();
    cy.get('.usecleftmenu > :nth-child(3) > a > [translate=""]').click();
    cy.wait(15000)
    cy.get('[accesskey="B"] > .c-p').click();
    cy.get(':nth-child(1) > :nth-child(1) > .col-md-10 > .form-control').should('have.class', 'form-control');
    /* ==== End Cypress Studio ==== */


  });

});
