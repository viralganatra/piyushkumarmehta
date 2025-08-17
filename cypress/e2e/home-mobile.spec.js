describe('Home page desktop view', () => {
  beforeEach(() => {
    cy.viewport('iphone-5');
    cy.visit('/');
  });

  it('should not have a horizontal scollbar', () => {
    cy.window().then(($window) => {
      expect($window.scrollX).to.equal(0);
    });
  });

  it('should have the about section visible', () => {
    cy.findByText('Personalised Hindu wedding ceremonies').should('be.inViewport');
  });

  it('should scroll to the contact section', () => {
    cy.findByText('Get in touch').click();
    cy.findByText('Contact Me').should('be.inViewport');
  });

  it('should load all gallery images', () => {
    cy.findAllByTestId('gallery-image').should('have.length', 6);
  });
});
