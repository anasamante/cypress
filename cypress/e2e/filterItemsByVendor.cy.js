describe('Filter by vendor', () => {
    it('Filter items by Samsung', () => {
        cy.visit("/")
        cy.get('.filters').contains('Samsung').click()
        cy.get('.spinner').should('not.exist')        
    })
  })