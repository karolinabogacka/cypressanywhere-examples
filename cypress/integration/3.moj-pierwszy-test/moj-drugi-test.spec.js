describe('Log in - with using correct user', () => {
    it('Visits mohito.pl', () => {
        cy.loginMohito('http://www.mohito.pl');    
    })

    it('Checks if you see Log out option', () => {
        const userIcon = cy.get('p[class="user-name"]').click({multiple: true,force: true });
        const logOut = cy.get('li').contains('Wyloguj');
        logOut.should('be.visible');
        logOut.click();
    });
})