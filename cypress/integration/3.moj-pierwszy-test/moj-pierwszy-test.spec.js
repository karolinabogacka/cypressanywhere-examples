describe("Log in - with using correct user", () => {
  it("Visit allegro.pl", () => {
    cy.loginAllegro("http://allegro.pl");
  });

  xit("See Regulamin and accept", () => {
    cy.get("button").contains("Ok, zgadzam się").click();
  });

  xit("Check if user is log-in", () => {
    cy.get("h6").contains("Cześć");
    //userName.should('be.visible');
  });
});
