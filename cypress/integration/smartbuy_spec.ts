
describe('SmartBuy Login', () => {

  before(function() {

  });

  it('login fail', () => {
    cy.visit('http://109.14.20.45:66/mall/gbmall/mgmt/app/index.html#/');
    cy.get('input').first().type('C08027');
    cy.get('input').last().type('imc');
    cy.contains('Sign in').click();
    cy.contains('密码密码不小于10位');
  })

  it('login success', () => {
    cy.visit('http://109.14.20.45:66/mall/gbmall/mgmt/app/index.html#/');
    cy.get('input').first().type('C08027');
    cy.get('input').last().type('imc1680011');
    cy.contains('Sign in').click();
    cy.url().should('include', 'orderMgmt')
  })


})