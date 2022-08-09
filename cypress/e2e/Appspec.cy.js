// When a user visits the page, they can view the page title and the existing shortened URLs
// When a user visits the page, they can view the Form with the proper inputs
// When a user fills out the form, the information is reflected in the input fields

describe('empty spec', () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000")
    cy.intercept("GET", "http://localhost:3001", {fixture:"example.json"})
  })

  it('should display the ui', () => {
    cy.get("main").should("have.class", "App")
  })

  it('should display the page title', () => {
    cy.get('h1').contains("URL Shortener")
  })

  it('should display the form', () => {
    cy.get('form')
  })

})