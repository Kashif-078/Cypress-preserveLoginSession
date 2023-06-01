/// <reference types="cypress" />

describe('Preserve Login Session', () => 
{

    before(() => 
    {
        cy.session('My loginSession', () => 
        {
            cy.intercept('https://hcloud.pk/a/login').as('loginPage')
            cy.visit('https://hcloud.pk/a/login')
            cy.wait('@loginPage')

            // To demonstrate the concept of preserving a login session, sample credentials have been provided in the code
            cy.get('input[name="user[email]"]').type('username')     
            cy.get('input[name="user[password]"]').type('password')  
            cy.get('input[type="submit"][value="Login"]')
            .click() 

            // Add your assertions to check that you logged In successfully
            cy.url().should('include', '/dashboard')
            cy.get('.alert-icon').should('exist').then(() =>
            {
                cy.get('.alert').should('contain', 'Welcome back.')
                cy.get('.pull-right > .fa').click()
            }) 
        }) 
        cy.log('before hook Executed')
    })

    // Now start writing your test cases from here 
    // You can also add context blocks to group relevant test cases
    it('1st Test Case', ()=>
    {

    })

})