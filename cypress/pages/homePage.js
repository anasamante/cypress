
class HomePage {
    //Elements
    getUsername(){
        return cy.get('.username')
    }
   
    //Methods
    verifyCorrectUserIsLogged(username){
        this.getUsername().should('have.text', username)
    }

}

module.exports = new HomePage();