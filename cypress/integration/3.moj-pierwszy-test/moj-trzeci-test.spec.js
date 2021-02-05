describe('Log in - with using correct user', () => {
    it('Visits reserved.pl', () => {
        cy.login();
    })

    it('Checks if button "Karolina" is available', () => {
        const userName = cy.get('[data-selen="account-logged-in-button"]');
        userName.should('be.visible');
        userName.click();
    });

    it('Checks if button "Wyloguj się" is available and clicks it', () => {
        const logOut = cy.get('[data-selen="logout"]');
        logOut.should('be.visible');
        logOut.click({multiple: true, force: true});
    });
})