/// <reference types="cypress" />

describe('LogIn', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.url().should('contain', 'https://partsunlimitedme.azurewebsites.net/');

    })

    //write a test to check if the login button is visible
    it('should have a login button', () => {
        cy.get('#login-link').should('be.visible');
    })

    //write a test case to check if the login button is clickable and the user is able to login
    it('should be able to login', () => {
        cy.get('#login-link').click();
        cy.url().should('contain', 'https://partsunlimitedme.azurewebsites.net/Account/Login');
        cy.get('#Email').type('admin@test.com');
        cy.get('#Password').type('P@ssword123');
        cy.get('.btn').click();
        cy.url().should('contain', 'https://partsunlimitedme.azurewebsites.net/');
    })
})
