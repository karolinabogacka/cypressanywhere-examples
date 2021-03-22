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

// Keep localStorage data
let LOCAL_STORAGE_MEMORY = {};

Cypress.Commands.add("saveLocalStorageCache", () => {
  Object.keys(localStorage).forEach((key) => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key];
  });
});

Cypress.Commands.add("restoreLocalStorageCache", () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach((key) => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
  });
});

Cypress.Commands.add("clearLocalStorage", () => {
  Object.keys(localStorage).forEach((key) => {
    localStorage.removeItem(key);
  });
});

// Keep sessionStorage data
let SESSION_STORAGE_MEMORY = {};

Cypress.Commands.add("saveSessionStorageCache", () => {
  Object.keys(sessionStorage).forEach((key) => {
    SESSION_STORAGE_MEMORY[key] = sessionStorage[key];
  });
});

Cypress.Commands.add("restoreSessionStorageCache", () => {
  Object.keys(SESSION_STORAGE_MEMORY).forEach((key) => {
    sessionStorage.setItem(key, SESSION_STORAGE_MEMORY[key]);
  });
});

Cypress.Commands.add("clearSessionStorage", () => {
  Object.keys(sessionStorage).forEach((key) => {
    sessionStorage.removeItem(key);
  });
});

// Keep cookies data
Cypress.Commands.add("preserveCookies", () => {
  Cypress.Cookies.preserveOnce("DOCPLANNER_SESSION");
});

// Additional commands
Cypress.Commands.add("login", () => {
  cy.visit("http://www.reserved.pl");
  cy.get('a[class="cart active"]').contains("Polska / Poland").click();
  const accountButton = cy.get('[data-selen="account-logged-out-button"]');
  accountButton.should("be.visible");
  accountButton.click();
  cy.get('[data-selen="login-email"]').type(Cypress.env("loginReserved"));
  cy.get('[data-selen="login-password"]').type(Cypress.env("passwordReserved"));
  cy.get('[data-selen="login-submit"]').contains("Zaloguj się");
  submitButton.should("be.visible");
  submitButton.click();
});

Cypress.Commands.add("loginAllegro", () => {
  cy.visit("http://allegro.pl");
  const buttonLogin = cy
    .get('button[type="button"]')
    .contains("Ok, zgadzam się");
  buttonLogin.should("be.visible");
  buttonLogin.click();
  const button = cy.get('a[role="button"]').contains("zaloguj się");
  //button.should('be.visible');
  button.click({ force: true });
  cy.get("#login").type(Cypress.env("loginAllegro"));
  cy.get("#password").type(Cypress.env("passwordAllegro"));
  const submitButton = cy.get("button").contains("Zaloguj się");
  submitButton.should("be.visible");
  submitButton.click();
});

Cypress.Commands.add("loginMohito", () => {
  cy.visit("http://www.mohito.pl");
  cy.get('a[class="cart active"]').contains("Polska / Poland").click();
  const button = cy.get(".aside-menu-right-login").eq(1);
  button.should("be.visible");
  button.click();
  cy.get('[data-selen="login-email"]').type(Cypress.env("loginMohito"));
  cy.get('[data-selen="login-password"]').type(Cypress.env("passwordMohito"));
  const submitButton = cy
    .get('[data-selen="login-submit"]')
    .contains("Zaloguj się");
  submitButton.should("be.visible");
  submitButton.click();
});

Cypress.Commands.add("loginZnany", () => {
  cy.visit("https://www.znanylekarz.pl");
  const cookiesButton = cy.get("button").contains("Zaakceptuj");
  cookiesButton.should("be.visible");
  cookiesButton.click();
  const logIn = cy.get('[data-test-id="navbar-login');
  logIn.click();
  cy.get('[data-test-id="input-username"]').type(Cypress.env("loginZnany"));
  cy.get('[data-test-id="input-password"]').type(Cypress.env("passwordZnany"));
  const submitButton = cy
    .get('[data-test-id="btn-login"]')
    .contains("Zaloguj się");
  submitButton.should("be.visible");
  submitButton.click();
});
