/// <reference  types='cypress'/>

describe('Navigate to the web page', function() {
  it('Navigate to landing page', function() {
    cy.visit('https://www.saucedemo.com')
  })
})