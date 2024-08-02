/// <reference types="cypress-xpath" />
// role page test cases

import { login } from "../utils/login";

describe("role page", () => {
  beforeEach(() => {
    cy.visit("https://ui-dev.knowyourx.io/");
    login();
    cy.get('a[href="/role"] span').contains("Roller").click();
  });

  it("role page add role", () => {
    cy.get('[data-testid="add-role"]').click();
    cy.get('[data-testid="name"]').type("test role");
    cy.get('[data-testid="role-save-button"]').click();
  });

  it("role page edit role", () => {
    var listItems = cy.get('[title="test role"]');
    listItems.each((item) => {
      cy.get(item).should("contain", "test role");
      // cy.get('[data-testid="-edit-role"]').click();
    });

    cy.get('[data-testid="name"]').type(" edited");
    cy.get('[data-testid="role-update"]').click();
    cy.get('[title="test role edited"]').should("contain", "test role edited");

    // cy.get('[title="test role"]'.).should("contain", "test role");
    // cy.xpath
    // cy.get('[data-testid="role-edit"]').click();

    // cy.get('[data-testid="role-name"]').type(" edited");
    // cy.get('[data-testid="role-description"]').type(" edited");
    // cy.get('[data-testid="role-save"]').click();
    // cy.get('[title="test role"]').should("contain", "test role edited");
  });

  // it("role page delete role", () => {
  //   cy.get('[title="test role"]').should("contain", "test role edited");
  //   cy.get('[data-testid="role-delete"]').click();
  //   cy.get('[title="test role"]').should("not.contain", "test role edited");
  // });
});

// TODO: aynı isimde bir organizasyon eklemeyi denemek
