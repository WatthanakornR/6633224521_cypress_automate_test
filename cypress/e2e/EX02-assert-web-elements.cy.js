// Arrange - Act - Assert
// Verify login pass with valid user
describe('CURA demo', () => {
    beforeEach(() => {
        cy.visit('https://katalon-demo-cura.herokuapp.com/');
    // arrange - act - assert 
        cy.get('#btn-make-appointment').click();
        cy.get('#txt-username').type('John Doe');
    cy.get('#txt-password').type('ThisIsNotAPassword');
    cy.get('#btn-login').click();

    cy.wait(2000);
   });
      it('Verify that make appointment page display “Make Appointment” title', () => {
    cy.get('h2').should('have.text', 'Make Appointment');
  });

  


  it('Verify that can select all facility combo boxes', () => {
    cy.get('#combo_facility').select('Hongkong CURA Healthcare Center').should('have.value', 'Hongkong CURA Healthcare Center');
    cy.get('#combo_facility').select('Tokyo CURA Healthcare Center').should('have.value', 'Tokyo CURA Healthcare Center');
    cy.get('#combo_facility').select('Seoul CURA Healthcare Center').should('have.value', 'Seoul CURA Healthcare Center');
  });

    it('Verify that can select apply for hospital readmission checkbox', () => {
        cy.get('#chk_hospotal_readmission').check().should('be.checked');
    });

    it('Verify that can select health care program radio button', () => {
        cy.get('#radio_program_medicaid').check().should('be.checked');
        cy.get('#radio_program_medicare').check().should('be.checked');
        cy.get('#radio_program_none').check().should('be.checked');
    });

    it('Verify that can input current date on Visit Date', () => {
        const date = new Date();
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        const currentDate = `${month}/${day}/${year}`;
        cy.get('#txt_visit_date').type(currentDate).should('have.value', currentDate);
    });

    it('Verify that can input comment on Comment', () => {
        const comment = 'This is a comment';
        cy.get('#txt_comment').type(comment).should('have.value', comment);
    });

    it('Verify that book appointment button is displayed and enabled.', () => {
        cy.get('#btn-book-appointment').should('be.visible').and('be.enabled');
    });
 
    


 

  });



  
