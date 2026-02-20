describe('Confirmar adoção', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('[name="email"]').type('luana@gmail.com')
    cy.get('[name="password"]').type('Copo_123')
    cy.get('.sc-a06d05ba-0').click()
    cy.get('.sc-368028a3-5 > .sc-b85c88e3-0 > [href="/area_logada/meus_animais"] > .sc-b85c88e3-1').click()
    cy.contains("Confirmar adoção").first().click()
    cy.get('.sc-98af18ee-2').should('not.contain.text', 'Nico')
  })
})