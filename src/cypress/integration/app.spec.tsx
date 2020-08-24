export { };
it('should work', () => {
  cy.visit('http://localhost:3000');
  cy.get('a').should('have.text', 'Learn React');
});
