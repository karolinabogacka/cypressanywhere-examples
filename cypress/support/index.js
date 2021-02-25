// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on("uncaught:exception", () => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

Cypress.config("defaultCommandTimeout", 10000);

before(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.clearSessionStorage();
});

beforeEach(() => {
  cy.preserveCookies();
  cy.restoreSessionStorageCache();
  cy.restoreLocalStorageCache();
});

afterEach(() => {
  cy.saveSessionStorageCache();
  cy.saveLocalStorageCache();
});
