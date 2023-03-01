/// <reference types = "cypress"/>

describe("E2E - Custom Commands", () => {
    it("Exemple of the command applying", () => {
        cy.visit("/");
        cy.searchPhrase("Coś napisane", 700);
        cy.clearPhrase()
    })
})