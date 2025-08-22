describe('Home page desktop view', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.viewport(1680, 1050);
  });

  it('should have the correct meta title', () => {
    cy.title().should('include', 'Piyushbhai Mehta');
  });

  it('should have the correct heading and title', () => {
    cy.findByText((_, node) => node.textContent === 'ShreePiyushbhai Mehta').should('exist');

    cy.findByText('Hindu Wedding Priest').should('exist');
  });

  it('should fill the intro section so that it is fullscreen', () => {
    cy.findByText('Personalised Hindu wedding ceremonies').should('not.be.inViewport');
  });

  it('should scroll to the about section', () => {
    cy.findByText('Jai Shree Krishna,').should('not.be.inViewport');
    cy.findByText('About').click();
    cy.findByText('Jai Shree Krishna,').should('be.inViewport');
  });

  it('should scroll to the contact section', () => {
    cy.findByText('Contact Me').should('not.be.inViewport');
    cy.findByText('Contact').click();
    cy.findByText('Contact Me').should('be.inViewport');

    cy.scrollTo(0, 0);
    cy.findByText('Get in touch').click();
    cy.findByText('Contact Me').should('be.inViewport');
  });

  it('should display 6 images in the gallery', () => {
    cy.findAllByTestId('gallery-image').should('have.length', 6);
  });

  it('should allow a user to contact via various methods', () => {
    cy.findAllByText('+44 (0) 7960 723 171').should('have.attr', 'href', 'tel:+447960723171');

    cy.findAllByText('piyushbhaishastri@gmail.com').should(
      'have.attr',
      'href',
      'mailto:piyushbhaishastri@gmail.com',
    );

    cy.findByText('fb.com/mehta.piyushkumar').should(
      'have.attr',
      'href',
      'https://www.facebook.com/mehta.piyushkumar',
    );

    cy.findByText('@piyushkumar_mehta').should(
      'have.attr',
      'href',
      'https://www.instagram.com/piyushkumar_mehta/',
    );
  });
});
