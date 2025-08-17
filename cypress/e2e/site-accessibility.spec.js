function terminalLog(violations) {
  cy.task(
    'log',
    `${violations.length} accessibility violation${violations.length === 1 ? '' : 's'} ${
      violations.length === 1 ? 'was' : 'were'
    } detected`,
  );
  // pluck specific keys to keep the table readable
  const violationData = violations.map(({ id, impact, description, nodes }) => ({
    id,
    impact,
    description,
    nodes: nodes.length,
  }));

  cy.task('table', violationData);
}

describe('Accessibility tests', () => {
  beforeEach(() => {
    cy.visit('/').injectAxe();
  });

  it('should have no accessibility violations', () => {
    cy.checkA11y(
      {
        // Exclude the tag line since it has an acceptable contrast ratio imo
        exclude: [['[data-testid="tagline"]']],
      },
      null,
      terminalLog,
    );
  });
});
