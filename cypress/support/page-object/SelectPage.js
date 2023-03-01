class SelectPage {
    get select() {
        return cy.get('[name="orderby"]')
    }
    SelectAllOption() {
        this.select.then(select => {
            cy.wrap(select).find("option").each(item => {
                cy.wrap(select).wait(4000).select(item.text())
            })

        })
    }
}

export default new SelectPage();