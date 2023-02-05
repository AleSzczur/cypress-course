/// <reference types = "cypress"/>

describe("E2E - FirstLesson", () => {
    it("Locator", () => {
        cy.visit("/")

        // Marker (znacznik)
        cy.get("a");

        // ID 
        cy.get("#search-field-top-bar");

        // Class
        cy.get(".search-field-top-bar");

        // atributte
        cy.get('[placeholder="Search ..."]');

        // deatiled atributte with marker (input below)
        cy.get('input[name="es_txt_name"]');

        // Items with few atributtes
        cy.get('[src="https://skleptest.pl/wp-content/uploads/2017/06/hero-3.jpg"][width="1600"]')

        // Good practice to downlading items
        // cy.get('[data-cy="wyszukiwarka"]') 
        // będzie widoczne w testach automatycznych po nadaniu atrybutu dla danego elementu w DevTools
    })

    it.only("Locator part 2", () => {
        cy.visit("/"),
        cy.contains(" SAVE UP TO ");
        cy.contains('[href="skleptest.pl/?s="]', "BUY NOW");

        cy.get("li").parents(".main-slider-info").find("li").contains("OUR LOCATION")
    })
})