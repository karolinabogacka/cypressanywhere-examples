describe("Testing API - GET method for endpoint /posts/{id}", () => {
  const testData = Array.from({ length: 20 }, (_, i) => i + 1);

  testData.forEach((item) => {
    it("Gets single post from API", () => {
      cy.request(`https://jsonplaceholder.typicode.com/posts/${item}`).as(
        "apiRequest"
      );

      const response = cy.get("@apiRequest");

      response.should((res) => {
        expect(res.headers["content-type"]).to.include("application/json");
        expect(res.status).to.eq(200);

        const responseBody = res.body;
        expect(responseBody.userId).to.be.a("number");
        expect(responseBody.userId).to.be.greaterThan(0);
        expect(responseBody.id).to.be.a("number");
        expect(responseBody.id).to.be.greaterThan(0);
        expect(responseBody.title).to.be.a("string");
        expect(responseBody.title).to.have.length.of.at.least(5);
        expect(responseBody.body).to.be.a("string");
        expect(responseBody.body).to.have.length.of.at.least(5);
      });
    });
  });
});
