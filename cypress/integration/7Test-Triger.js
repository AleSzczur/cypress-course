/// <reference types = "cypress"/>

describe("E2E - Scrolling/Focus", () => {
    it("Focus", () => {
        cy.visit("/");
        cy.get(".dropdown-toggle").trigger("focus", {force:true});
        cy.get('[title="Shirts"]').click({force:true});
    })

    it("Scrolling to the e-mail Subcribes", () => {
        cy.visit("/");
        cy.get("#email-subscribers-2").first().scrollIntoView({delay:400})
    })

})