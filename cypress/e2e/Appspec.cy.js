describe('empty spec', () => {

  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {statusCode: 200,
      fixture: 'example'
    })
    cy.intercept('POST', 'http://localhost:3001/api/v1/urls', {
      statusCode: 201,
      body: {
        id: 5,
        long_url: 'www.twitter.com',
        short_url: 'http://localhost:3001/useshorturl/5',
        title: 'Twitter'
      }
    })
    cy.visit("http://localhost:3000")
  })

  it('should display the ui', () => {
    cy.get("main").should("have.class", "App")
  })

  it('should display the page title', () => {
    cy.get('h1').contains("URL Shortener")
  })

  it('should display the form', () => {
    cy.get('form')
    cy.get('#input-title')
    cy.get('#input-url')
  })

  it('should have input fields which accurately reflect user input', () => {
    cy.get('#input-title').click().type("Google").should("have.value", "Google")
    cy.get('#input-url').click().type("https://www.google.com/").should("have.value", "https://www.google.com/")
    
  })

  it('should submit user data on click', () => {
    cy.intercept("POST", "http://localhost:3001", {fixture:"example.json"})
    cy.get('#input-title').click().type("Google").should("have.value", "Google")
    cy.get('#input-url').click().type("https://www.google.com/").should("have.value", "https://www.google.com/")
    cy.get("button").click()
  })
})