import loginData from '../fixtures/loginData.json'

describe('POST, Login', () => {
  
    it('Test Post login from API', () => {
      cy.login(loginData.userName)
      cy.get('@respBody').its('status').should('eq', 200)
      
      cy.login(loginData.invalidUser)
      cy.get('@respBody').its('status').should('not.eq', 200)
    })
})