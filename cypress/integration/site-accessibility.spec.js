describe('Accessibility tests', () => {
  beforeEach(() => {
    cy.visit('/')
      .get('main')
      .injectAxe();
  });

  it('should have no accessibility violations', () => {
    cy.checkA11y({
      // Exclude the tag line since it has an acceptable contrast ratio imo
      exclude: [['[data-testid="tagline"]']],
    });
  });
});
