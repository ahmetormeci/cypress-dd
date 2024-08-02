/// <reference types="Cypress" />

const LOGIN = require("../fixtures/login.json");

export const login = () => {
  cy.get('[data-testid="organizationCode"]')
    .type("{selectall}{backspace}" + LOGIN.organizationCode)
    .should("have.value", "DDTECH");

  cy.get('[data-testid="email"]')
    .type(LOGIN.email)
    .should("have.value", "rootadmin@ddtech.com.tr");

  cy.get('[data-testid="password"]')
    .type(LOGIN.password)
    .should("have.value", "RootAdmin123.!");

  cy.wait(2000);

  const btn = cy.get('[data-testid="login-button"]');

  if (btn) {
    btn.click();
  }
  cy.location().should((location) => {
    expect(location.href).to.eq("https://ui-dev.knowyourx.io/");
  });
};
