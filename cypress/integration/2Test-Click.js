/// <reference types = "cypress"/>

describe("E2E - Click Action", () =>{
    it("Cliking on an item", () =>{
        cy.visit("/")
        cy.contains('[href="https://skleptest.pl/test-contact-blablabla/"]', "Contact").click()
        cy.get('[itemprop="title"]').click();
    })
})