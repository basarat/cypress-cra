export { };
it('should work', () => {
  cy.visit('/');
  cy.get('a').should('have.text', 'Learn React');
});
