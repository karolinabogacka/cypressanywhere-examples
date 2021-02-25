describe("Log in - with using correct user", () => {
  it("Visit reserved.pl", () => {
    cy.login();
  });

  it("Check if user is log-in", () => {
    const userName = cy.get('[data-selen="account-logged-in-button"]');
    userName.should("be.visible");
    userName.click();
  });

  it('Check if button "Wyloguj się" is available and click it', () => {
    const logOut = cy.get('[data-selen="logout"]');
    logOut.should("be.visible");
    logOut.click({ multiple: true, force: true });
  });
});
