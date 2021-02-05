// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('login', () => {
    cy.visit('http://www.reserved.pl')
    const countryChoose = cy.get('a[class="cart active"]').contains('Polska / Poland').click();
    const accountButton = cy.get('[data-selen="account-logged-out-button"]');
    accountButton.should('be.visible');
    accountButton.click();
    const loginUser = cy.get('[data-selen="login-email"]').type(Cypress.env('loginReserved'));
    const passwordUser = cy.get('[data-selen="login-password"]').type(Cypress.env('passwordReserved'));
    const submitButton = cy.get('[data-selen="login-submit"]').contains("Zaloguj się");
    submitButton.should('be.visible');
    submitButton.click();
});

Cypress.Commands.add('loginAllegro', () => {
    cy.visit('http://allegro.pl')
    const buttonLogin = cy.get('button[type="button"]').contains('Ok, zgadzam się');
    buttonLogin.should('be.visible');
    buttonLogin.click();
    const button = cy.get('a[role="button"]').contains('zaloguj się');
    //button.should('be.visible');
    button.click({force: true});
    const loginUser = cy.get('#login').type(Cypress.env('loginAllegro'));
    const passwordUser = cy.get('#password').type(Cypress.env('passwordAllegro'));
    const submitButton = cy.get('button').contains("Zaloguj się");
    submitButton.should('be.visible');
    submitButton.click();
});

Cypress.Commands.add('loginMohito', () => {
    cy.visit('http://www.mohito.pl')
    const countryChoose = cy.get('a[class="cart active"]').contains('Polska / Poland').click();
    const button = cy.get('.aside-menu-right-login').eq(1);
    button.should('be.visible');
    button.click();
    const loginUser = cy.get('[data-selen="login-email"]').type(Cypress.env('loginMohito'));
    const passwordUser = cy.get('[data-selen="login-password"]').type(Cypress.env('passwordMohito'));
    const submitButton = cy.get('[data-selen="login-submit"]').contains("Zaloguj się");
    submitButton.should('be.visible');
    submitButton.click();
});




