cy.get('[data-testid="search-organization-input"]').type("otodeneme");
cy.wait(3000);
cy.get('[title="otodeneme"]')
  .eq("0")
  .parent()
  .parent()
  .get('[data-testid="MoreVertIcon"]')
  .click();

const deleteOrg = (orgName) => {
  cy.request({
    method: "DELETE",
    url: `https://ui-dev.knowyourx.io/organizations/${orgName}`,
    headers: {
      authorization: Cypress.env("authToken"),
    },
  });
};
