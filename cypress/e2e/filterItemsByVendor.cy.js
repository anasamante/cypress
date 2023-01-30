import loginData from '../fixtures/loginData.json'
import homePage from '../pages/homePage';
import loginPage from "../pages/loginPage";

describe('Filter by vendor', () => {
  
    it('Filter items by Samsung', () => {
        //cy.login(loginData.userName)
        cy.visit("/?signin=true")
      loginPage.waitForPageToFinishLoading()
      
      homePage.verifyCorrectUserIsLogged(loginData.userName)
    })
  })