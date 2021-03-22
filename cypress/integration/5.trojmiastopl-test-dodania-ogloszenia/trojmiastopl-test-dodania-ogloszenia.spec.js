describe("Process of adding an advertisement", () => {
  it("Visits trojmiasto.pl", () => {
    cy.visit("https://www.trojmiasto.pl/");
  });

  it('Finds "Ogłoszenia" on menu bar and clicks it', () => {
    const advert = cy.get("a").contains("Ogłoszenia");
    advert.should("be.visible");
    advert.click();
  });

  it('Choose category "Praca" and clicks it', () => {
    const categoryWork = cy
      .get('span[class="categoryMain__name"]')
      .contains("Praca");
    categoryWork.should("be.visible");
    categoryWork.click();
  });

  it('Choose subcategory "Szukam pracy" and clicks it', () => {
    const subcategorySearch = cy.get("li").contains("Szukam pracy");
    subcategorySearch.should("be.visible");
    subcategorySearch.click();
  });

  it('Finds "Dodaj ogłoszenie" element and clicks it', () => {
    const add = cy
      .get("a[title='Dodaj ogłoszenie']")
      .eq(2)
      .click({ multiple: true, force: true });
  });

  it('Checks if sees header "Szukam pracy"', () => {
    const header = cy.get("h1").contains("Szukam pracy");
    header.should("be.visible");
  });

  it("Fills the form and adds advertisment", () => {
    const title = cy
      .get('input[name="tytul"]')
      .type("Junior Automation Tester - Cypress");
    const industry = cy.get('input[name="branza_inputModal"]').click();
    const specjalization = cy
      .get('span[class="category-item__toggle-subcategory"]')
      .eq(8)
      .click();
    const subspecjalization = cy.get("label").contains("Testowanie").click();
    const button = cy
      .get('[data-dismiss="modal"]')
      .contains("Zatwierdź")
      .click();
    const contractType = cy
      .get('input[class="select2-search__field"]')
      .eq(0)
      .click({ force: true });
    //const specjalization = cy
    //.get('span[class="category-item__toggle-subcategory"]')
    //.eq(8)
    //.click();
    const chooseType = cy.get("li").contains("Umowa o pracę").click();
    const chooseType1 = cy.get("li").contains("Umowa zlecenie").click();
    const chooseType2 = cy.get("li").contains("Umowa o dzieło").click();
    const chooseType3 = cy.get("li").contains("Kontrakt").click();
    const chooseType4 = cy.get("li").contains("Praktyka / Staż").click();

    const workTimeType = cy
      .get('input[class="select2-search__field"]')
      .eq(2)
      .click({ force: true });
    const timeChoose = cy.get("li").contains("Pełny etat").click();
    const timeChoose1 = cy.get("li").contains("Część etatu").click();
    const timeChoose2 = cy.get("li").contains("Sezonowa /").click();

    const characterOfWork = cy
      .get('input[class="select2-search__field"]')
      .eq(3)
      .click({ force: true });
    const characterChoose = cy.get("li").contains("Stacjonarna").click();
    const characterChoose1 = cy.get("li").contains("Zdalna").click();

    const additionalInf = cy.get("label").contains("Status studenta").click();

    //const myText = cy
      //.get(
        ///'body[class="cke_editable cke_editable_themed cke_contents_ltr cke_show_borders"]'
      //)
      //.type("hhdhdhhd");
  });
});
