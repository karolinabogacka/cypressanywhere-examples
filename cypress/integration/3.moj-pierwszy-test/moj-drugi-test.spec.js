describe("Log in - with using correct user", () => {
  it("Visit mohito.pl", () => {
    cy.loginMohito("http://www.mohito.pl");
  });

  it("Check if you see Log out option", () => {
    cy.get('p[class="user-name"]').click({ multiple: true, force: true });
    const logOut = cy.get("li").contains("Wyloguj");
    logOut.should("be.visible");
    logOut.click();
  });
});
