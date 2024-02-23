import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
Given("I browse Aspen website", () => {
    cy.visit("https://merceradvisors-qa-uatx.unqork.io/")
})

When("I input my username and password", (datatable) => {
    datatable.hashes().forEach(element => {
        cy.get('input[id="username"]').type(element.username);
        cy.get('input[id="password"]').type(element.password);
    });

})

And("Click on Login button", () => {
    cy.get('input[type="submit"]').click();
})

Then("I should land on the home page",  () => {
    cy.contains(/^Good.*Fridavsii$/, { timeout: 10000})
        .should('be.visible')
})