Cypress.on('window:before:load', (window) => {
  window.ga = cy.stub().as('ga');
});

describe('Google Analytics', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should call google analytics correctly', () => {
    cy.get('@ga').should('be.calledWith', 'create', Cypress.env('GA_TRACKING_ID'));
  });
});
