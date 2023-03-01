/// <reference types = "cypress"/>

describe("E2E - Assertions", () => {
    it("The expect and should assertions", () => {
        cy.visit("/");

        // Text verification
        cy.get('a[title="Contact"]').should("contain", "Contact");
        cy.get('a[title="Contact"]').then(tab => {
            expect(tab).to.contain("Contact")
        })

        // Checking to not contain a text
        cy.get('a[title="Contact"]').should("not.contain", "Contacts");
        cy.get('a[title="Contact"]').then(tab => {
            expect(tab).not.to.contain("Contacts")
        })
        
        // Verification if marker to contain the class
        cy.get("#search-field-top-bar").should("have.class", "search-field-top-bar");
        cy.get("#search-field-top-bar").then(searchEngine => {
            expect(searchEngine).to.have.class("search-field-top-bar")
        })

        // Verification if component is visible
        cy.get("#search-field-top-bar").should("be.visible");
        cy.get("#search-field-top-bar").then(searchEngine => {
            expect(searchEngine).to.be.visible;
    })
        // How many components did download
        cy.get("ul.sf-menu").find("li").should("have.length", 16)
        cy.get("ul.sf-menu").find("li").then(tabs => {
            expect(tabs).to.have.length(16);
        })

        // Verification css value of the element
        cy.get("#search-field-top-bar").should("have.css", "height", "30px");
        cy.get("#search-field-top-bar").then(searchEngine =>{
            expect(searchEngine).to.have.css("height", "30px")

        })
    })
})