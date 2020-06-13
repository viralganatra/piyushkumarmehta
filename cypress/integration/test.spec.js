describe('Home page desktop view', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.viewport(1680, 1050);
  });

  it('should have the correct meta title', () => {
    cy.title().should('include', 'Piyushbhai Mehta');
  });
});
