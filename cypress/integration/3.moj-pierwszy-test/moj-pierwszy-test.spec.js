describe('Log in - with using correct user', () => {
    it('Visits allegro.pl', () => {
        cy.loginAllegro('http://allegro.pl')
    })

    xit('See Regulamin and accept', () => {
        cy.get('button').contains('Ok, zgadzam się').click();
    });

    xit('Checks if span "Karolina" is available', () => {
        const userName = cy.get('h6').contains('Cześć Karolina!');
        //userName.should('be.visible');
    });
})