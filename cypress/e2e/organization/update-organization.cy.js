/// <reference types="Cypress" />

describe("add organization", () => {
  it("login & organization add", () => {
    cy.visit("https://ui-dev.knowyourx.io/");

    cy.get('[data-testid="email"]')
      .type("rootadmin@ddtech.com.tr")
      .should("have.value", "rootadmin@ddtech.com.tr");
    cy.get('[data-testid="password"]')
      .type("RootAdmin123.!")
      .should("have.value", "RootAdmin123.!");
    cy.get('[data-testid="login-button"]').click();

    cy.location().should((location) => {
      expect(location.href).to.eq("https://ui-dev.knowyourx.io/");
    });

    cy.get('a[href="/organizations"] span').contains("Organizasyonlar").click();
    cy.get('[data-testid="ArrowDropDownIcon"]').parent().click();
    cy.get('[role="option"]').contains("50").click();

    cy.get('[aria-rowindex="20"]')
      .children()
      .children()
      .children()
      .children()
      .children()
      .click();

    cy.get('[role="menuitem"]').contains("Düzenle").click();

    cy.get('[data-testid="address"]')
      .clear()
      .type("adres alanı")
      .should("have.value", "adres alanı");

    cy.get('[type="submit"]').contains("Kaydet").click();
  });
});
