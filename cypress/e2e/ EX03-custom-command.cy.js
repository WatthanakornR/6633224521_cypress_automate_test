describe('CURA demo - Custom Command', () => {
  beforeEach(() => {
    cy.visit('https://katalon-demo-cura.herokuapp.com/');
    cy.get('#btn-make-appointment').click(); // ไปหน้า Login
  });

  it('Verify login pass with valid user', () => {
    cy.login('John Doe', 'ThisIsNotAPassword');  // ใช้ custom command
    cy.url().should('include', '#appointment');  // ถึงหน้า Make Appointment
  });

  it('Verify login fail with invalid password', () => {
    cy.login('John Doe', 'ThisIsAPassword');     // ผิดรหัส
    cy.get('.text-danger').should('be.visible').and('contain.text', 'Login failed');
  });

  it('Verify login fail with invalid username', () => {
    cy.login('Jane Doe', 'ThisIsNotAPassword');  // ผิดผู้ใช้
    cy.get('.text-danger').should('be.visible').and('contain.text', 'Login failed');
  });
});