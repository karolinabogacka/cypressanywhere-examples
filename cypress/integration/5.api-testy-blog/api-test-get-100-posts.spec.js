describe("Testing API - GET method for endpoint /posts", () => {
  it("Api endpoint to get 100 posts", () => {
    cy.request(`https://jsonplaceholder.typicode.com/posts`).as("apiRequest");

    const response = cy.get("@apiRequest");

    response.should((res) => {
      expect(res.headers["content-type"]).to.include("application/json");
      expect(res.status).to.eq(200);
      const body = res.body;
      expect(body.length).to.eq(100);

      body.forEach((item) => {
        expect(item.userId).to.be.a("number");
        expect(item.userId).to.be.greaterThan(0);
        expect(item.id).to.be.a("number");
        expect(item.id).to.be.greaterThan(0);
        expect(item.title).to.be.a("string");
        expect(item.title).to.have.length.of.at.least(5);
        expect(item.body).to.be.a("string");
        expect(item.body).to.have.length.of.at.least(50);
      });
    });
  });
});
