describe('Cadastro Animal', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('[name="email"]').type("charliemagri2702@gmail.com");
    cy.get('[name="password"]').type("12345678");
    cy.get('.sc-a06d05ba-0').click();
    cy.get('.sc-368028a3-5 > .sc-b85c88e3-0 > [href="/area_logada/disponibilizar_animal"] > .sc-b85c88e3-1 > span').click();
    cy.get('[name="name"]').type("Luana");
    cy.contains('Selecione um tipo').parent().click(); 
    cy.get('[role="option"]').contains('Cachorro').click();
    cy.contains('Selecione um gênero').parent().click(); 
    cy.get('[role="option"]').contains('Fêmea').click();
    cy.get('[name="race"]').type("Vira lata");
    cy.get('[name="description"]').type("Muito fedorenta, tem bafinho de esgoto e pulgas. Porém boa cachorrinha, muito amavel")
    cy.get('input[type="file"]').selectFile('cypress/fixtures/cadela.jpg', { force: true });
    cy.get('.sc-a06d05ba-0').click();

  })
})