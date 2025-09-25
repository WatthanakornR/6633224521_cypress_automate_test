
describe('Write first test', () => {
  // ----- Hooks -----
  before(() => {
    cy.log('This is before');
  });

  beforeEach(() => {
    cy.log('This is beforeEach');
  });

  after(() => {
    cy.log('This is after');
  });

  afterEach(() => {
    cy.log('This is afterEach');
  });

  // ----- Tests -----
  it('verifying true should be true (expect)', () => {
    expect(true).to.be.true;
  });

  it('verifying 5 equals 3+2 (assert)', () => {
    assert.equal(5, 3 + 2);
  });

  it("verifying 'hello world' equals 'hello world' (should)", () => {
    cy.wrap('hello world').should('eq', 'hello world');
  });
});
