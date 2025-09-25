// Arrange - Act - Assert
// Verify login pass with valid user
describe('CURA demo', () => {
    beforeEach(() => {
        cy.visit('https://katalon-demo-cura.herokuapp.com/');
    // arrange - act - assert 
        cy.get('#btn-make-appointment').click();
   });
    it('Verify login pass with valid user', () => {
    cy.get('#txt-username').type('John Doe');
    cy.get('#txt-password').type('ThisIsNotAPassword');
    cy.get('#btn-login').click();

  });

    it('Verify login fail with invalid password', () => {
   
    cy.get('#txt-username').type('John Doe');
    cy.get('#txt-password').type('ThisIsAPassword');
    cy.get('#btn-login').click();
    cy.get('.text-danger').should('be.visible');
  });


    it('Verify login fail with invalid username', () => {
    cy.get('#txt-username').type('Jane Doe');
    cy.get('#txt-password').type('ThisIsNotAPassword');
    cy.get('#btn-login').click();
    cy.get('.text-danger').should('be.visible');
  });


  
});



