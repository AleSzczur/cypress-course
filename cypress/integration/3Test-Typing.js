/// <reference types = "cypress"/>

describe("E2E - Typing Action", () => {
    it("Entering a value into an input", () => {
        cy.visit("/")
        cy.get("#search-field-top-bar").type("Dany produkt{backspace}", { delay: 200 });
    })



    it("Deleting a few values from the input", () => {
        const deleteSigns = (n) => {
            for (let i = 0; i < n; i++) {
              cy.get("#search-field-top-bar").type("{backspace}");
            }
          };
          
          deleteSigns(7);
    })
})