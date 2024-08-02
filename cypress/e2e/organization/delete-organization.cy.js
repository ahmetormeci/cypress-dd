/// <reference types="Cypress" />
const { login } = require("../../utils/login");

describe("organization page", () => {
  const LOGIN = require("../../fixtures/login.json");
  const ORGANIZATION = require("../../fixtures/organization.json");
  beforeEach(() => {
    cy.visit("https://ui-dev.knowyourx.io/");
    login();
  });
});
it("Delete All 'otodeneme' Organizations", () => {
  cy.get('a[href="/organizations"] span').contains("Organizasyonlar").click();
  cy.get('[placeholder="Arama Yap"]').type("otodeneme");
  cy.wait(3000);
  function deleteOrganizations() {
    cy.get('[data-testid="MoreVertIcon"]').click();
    cy.get('[data-tetid="65-delete-button"]').contains("Sil").click();
    cy.get('[data-testid="delete-organization"]').contains("Sil").click();

    // "otodeneme" organizasyonu silinene kadar işlemi tekrarlayın
    cy.get('[data-testid="DeleteIcon"]')
      .eq(0)
      .then(($deleteIcon) => {
        if ($deleteIcon.length > 0) {
          deleteOrganizations(); // Tekrar et
          cy.wait(2000);
        }
      });
  }

  // Fonksiyonu çağırarak organizasyonları silmeye başlayın
  deleteOrganizations();
});

// it("Delete All 'otodeneme' Organizations", () => {
//   cy.get('[placeholder="Arama Yap"]').type("otodeneme");

//   cy.wait("@getOrganizations").then((interception) => {
//     cy.get('[data-testid="DeleteIcon"]').each(($el, index, $list) => {
//       $el.click();
//     });
//   });
// });
