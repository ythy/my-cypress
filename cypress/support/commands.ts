declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable<Subject> {
      bing(): Chainable<Window>;
      navigate(pageName: string): void;
      log(input:any): void;
    }
  }
}

/**
 * Goes to google site
 */
Cypress.Commands.add('bing', () => cy.visit('https://bing.com'))

/**
 * Navigates to page with pageName
 */
Cypress.Commands.add('navigate', (pageName) => {
  // Find navigation menu item
  // Click on it
  cy.visit(`/${pageName}`)
});

// custom defined
Cypress.Commands.add('log', (input) => console.log('cypress log: ', input))

// Convert this to a module instead of script (allows import/export)
export { }
