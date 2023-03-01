import 'cypress-file-upload'


// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add("login", (email, password) =>{
    cy.get('[placeholder="Email"]').clear();
    cy.get('[placeholder="Password"]').clear();
    cy.get('[placeholder="Email"]').type(email);
    cy.get('[placeholder="Password"]').type(password);
    cy.get(".btn-lg").click();
})
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })

Cypress.Commands.add("openMostWantedTab", () => {
    cy.visit("https://skleptest.pl/product-category/most-wanted/")
})

Cypress.Commands.add("searchPhrase", (text, { delay: delayValue }) => {
    cy.get("#search-field-top-bar").type(text, { delay: delayValue });
})

Cypress.Commands.add("clearPhrase", () => {
    cy.get("#search-field-top-bar").clear();
})
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
