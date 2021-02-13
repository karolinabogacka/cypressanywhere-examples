describe('Reserve visit to the specjalist - with using correct user', () => {
    it('Visit znanylekarz.pl', () => {
        cy.loginZnany('https://www.znanylekarz.pl');
    })

    it('Check if you are on patient panel', () => {
        const myPanel = cy.url().should('include', '/panel-pacjenta');
    });

    it('Close the window you see, to see the home page', () => {
        const closeCard = cy.get('[data-test-id="settings-close-btn-desktop"]');
        closeCard.should('be.visible');
        closeCard.click();
    });

    it('Accept cookies on the page', () => {
        const cookiesButton = cy.get('button').contains('Zaakceptuj');
        cookiesButton.click();
    });

    it('Find the specialist in your city', () => {
        const specjalist = cy.get('input[placeholder="specjalizacja lub nazwisko"]');
        specjalist.click();
        const specjalistFound = cy.get('[data-test-id="name"]').contains('stomatolog');
        specjalistFound.click();
        const city = cy.get('input[placeholder="miasto lub dzielnica"]');
        city.type('Tor');
        cy.wait(3000);
        const cityFound = cy.get('[data-test-id="location-dropdown"]').contains('Toruń');
        cityFound.click();
        cy.wait(3000);
        const searchButton = cy.get('span[class="ml-0-5"]').contains('Szukaj');
        searchButton.should('be.visible');
        searchButton.click({force: true});
    });

    it('Accept cookies on the page', () => {
        const cookiesButton = cy.get('button').contains('Zaakceptuj');
        cookiesButton.click({force: true});
    });

    it('Check if you see list of specialists', () => {
        const theList = cy.get('h1').contains('Stomatolog, Toruń');
        theList.should('be.visible');
    });

    it('Choose first specialist from the list', () => {
        const chooseButton = cy.get('span[class="mb-1 avatar no-background"]').eq(0);
        chooseButton.click();
    });

    it('Accept cookies on the page', () => {
        const cookiesButton = cy.get('button').contains('Zaakceptuj');
        cookiesButton.click({force: true});
    });

    it('Choose first available slot', () => {
        const slotChoose = cy.get('.calendar-slot-available').eq(0);
        slotChoose.click();
    })

    it('Choose no symptoms covid button', () => {
        const symptomsNo = cy.get('[data-test-id="covid-symptoms-no-radio-button"]').should('have.value', 'false');
        symptomsNo.click();
    })

    it('Accept rules', () => {
        const rulesAccept = cy.get('[data-test-id="form-rules-checkbox"]').should('have.value', 'form-rules');
        rulesAccept.click();
    })

    it('I agree', () => {
        const agree = cy.get('[data-test-id="form-data-processing-checkbox"]').should('have.value', 'form-data-processing');
        agree.click();
    })

    xit('Reserve visit', () => {
        const reserve = cy.get('[data-test-id="booking-next-step-button"]').contains('Umów wizytę');
        reserve.should('be.visible');
        reserve.click();
    })
})