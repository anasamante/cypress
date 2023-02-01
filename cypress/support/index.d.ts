/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Login post call
       * @example
       * cy.loginPOST(user)
       */
      loginPOST(user: String): Chainable<any>

      /**
       * Intercepts call /api/products 
       * which is made when homepage loads 
       * @example
       * cy.interceptProductsGETcall()
       */
      interceptProductsGETcall(): Chainable<any>

      /**
       * Verifies 200 status code of 
       * call /api/products
       * @example
       * cy.waitProductsPageFinished()
       */
      waitProductsPageFinished(): Chainable<any>
    }
  }