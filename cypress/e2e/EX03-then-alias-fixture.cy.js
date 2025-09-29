// EX03-then-alias-fixture.cy.js
describe('CURA demo - Then / Alias / Fixture', () => {
  beforeEach(() => {
    cy.visit('https://katalon-demo-cura.herokuapp.com/');
    cy.get('#btn-make-appointment').click(); 
    cy.fixture('users.json').as('users');    
  });

  it('Login success using fixture data', function () {
   
    const { username, password } = this.users.valid;

    cy.get('#txt-username').as('user');
    cy.get('#txt-password').as('pass');
    cy.get('#btn-login').as('loginBtn');

    // Act
    cy.get('@user').clear().type(username);
    cy.get('@pass').clear().type(password);
    cy.get('@loginBtn').click();

    // Assert
    cy.url().should('include', '#appointment');
    cy.contains('h2', 'Make Appointment').should('be.visible');
  });

  it('Login fail (invalid password) using fixture + then', function () {
    cy.then(() => this.users.badPass) 
      .then(({ username, password }) => {
        cy.login(username, password);
      });

    cy.get('.text-danger').should('be.visible').and('contain.text', 'Login failed');
  });

  it('Login fail (invalid username) using fixture', function () {
    const { username, password } = this.users.badUser;
    cy.login(username, password);
    cy.get('.text-danger').should('be.visible').and('contain.text', 'Login failed');
  });
});
