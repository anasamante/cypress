import loginData from '../fixtures/loginData.json'
describe('POST, Login', () => {
  it('Test Post login from API with valid user', () => {
    cy.loginPOST(loginData.userName)
    cy.get('@respBody').its('status').should('eq', 200)
  })

  it('Test Post login from API with invalid user', () => {         
    cy.loginPOST(loginData.invalidUser)
    cy.get('@respBody').its('status').should('not.eq', 200)
  })

  it('Test Post login from API forEach loop', () => {      
    const userType = [loginData.userName, loginData.invalidUser]
    userType.forEach(user => {
      cy.loginPOST(user)
      if(user == loginData.userName){
        cy.get('@respBody').its('status').should('eq', 200)
      } else {
        cy.get('@respBody').its('status').should('not.eq', 200)
      }
    });
  })
})