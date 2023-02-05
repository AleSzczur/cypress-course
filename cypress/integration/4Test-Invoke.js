/// <reference types = "cypress"/>

describe("E2E - Invoke Methode", () => {
    it("Invoke", () => {
        cy.visit("/")

        // Pobieranie wartości z danego elementu (w tym przypadku przez wywołanie funkcji "text")
        cy.get('[title="Contact"]').invoke("text").then(text => {
            cy.log(text)
        })

        // Uzyskanie dostępu do wartości atrybutu
        cy.get('[title="Contact"]').invoke("attr", "title").then(title => {
            cy.log(title)
        })

        cy.get('[title="Contact"]').invoke("attr", "href").then(link => {
            cy.log(link)
        })

        cy.get('[title="Contact"]').invoke("attr", "title").then(title => {
            cy.log(title)
        })

        // Pobieranie wartości value
        cy.get("#search-field-top-bar").type("Black Shirt").invoke("prop", "disabled").then(value => {
            cy.log(value)
        })
    })
})