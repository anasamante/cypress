import example from '../fixtures/example.json'
import homePage from '../pages/homePage';
import loginPage from "../pages/loginPage";


describe('Visit Homepage', () => {
  
  it('login and verify user is logged in on homepage', () => {

    loginPage.typeUsername(`${example.userName}{enter}`)
    loginPage.typePassword(`${example.password}{enter}`)
    
    loginPage.interceptCall()
    loginPage.clickOnLogin()
    loginPage.waitForPageToFinishLoading()
    
    homePage.verifyCorrectUserIsLogged(example.userName)
  })
})