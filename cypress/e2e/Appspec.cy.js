describe('empty spec', () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000")
    cy.intercept("GET", "http://localhost:3001", {fixture:"example.json"})
  })

  it('should display the ui', () => {
    cy.get("main").should("have.class", "App")
  })
})