// profile settings

<reference types="Cypress" />;

const { login } = require("../../utils/login");

describe("organization page", () => {
  const LOGIN = require("../../fixtures/login.json");
  const ORGANIZATION = require("../../fixtures/organization.json");
  beforeEach(() => {
    cy.visit("https://ui-dev.knowyourx.io/");
    login();
  });

  cy.get('[data-testid="firstname"]')
    .should("have.value", "RootAdmin")
    .type("RootAdmin")
    .should("have.value", "RootAdmin");

  cy.get('[data-testid="lastname"]')
    .should("have.value", "User")
    .type("Userr")
    .should("have.value", "Userr");

  cy.get('[data-testid="phoneNumber"]')
    .should("have.value", "50011122330")
    .type("05555555555")
    .should("have.value", "05555555555");

  // TODO: BURAYA BİR XPATH EKLEMEYİ DENİYORDUM EN SON
});

it("profile settings", () => {
  cy.get('[data-testid="profile-settings"]').click();
});
