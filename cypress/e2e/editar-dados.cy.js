describe('Editar nome de usuario', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('[name="email"]').type("charliemagri2702@gmail.com");
    cy.get('[name="password"]').type("12345678");
    cy.get('.sc-a06d05ba-0').click();
    cy.get('.sc-368028a3-5 > .sc-b85c88e3-0 > [href="/area_logada/editar_dados"] > .sc-b85c88e3-1').click();
    cy.get('[name="name"]').clear();
    cy.get('[name="name"]').type("magri");
    cy.get('.sc-b8d6d357-3 > .sc-a06d05ba-0').click();
  })
})