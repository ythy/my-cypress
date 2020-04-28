 
describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.bing();
    cy.visit('http://127.0.0.1:9081/pop/main.html#/QandA');
    cy.contains('更多').click().should('not.exist');
    cy.pause();
    cy.url().should('include', '/commands/actions');
  })
})