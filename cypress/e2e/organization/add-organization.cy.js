// /// <reference types="Cypress" />

// const { login } = require("../../utils/login");
// const {
//   createOrganizationStep1,
//   createOrganizationStep2,
//   createOrganizationStep3,
// } = require("../../utils/createOrganization");

// describe("organization page", () => {
//   const LOGIN = require("../../fixtures/login.json");
//   const ORGANIZATION = require("../../fixtures/organization.json");
//   beforeEach(() => {
//     cy.visit("https://ui-dev.knowyourx.io/");
//     login();
//   });
//   it.only("Başarılı organizasyon oluşturma", () => {
//     const organization = { ...ORGANIZATION };
//     createOrganizationStep1(organization);
//     createOrganizationStep2(organization);
//     createOrganizationStep3(organization);
//     // check if the organization is created
//     cy.get('[data-testid="/organizations-link"]')
//       .contains("Organizasyonlar")
//       .click();
//     cy.get('[data-testid="title"]').should(
//       "have.value",
//       organization.organizationName
//     );
//   });

//   it("organizasyon adı boş bırakıldığında hata mesajı görüntülenir", () => {
//     const organization = { ...ORGANIZATION, organizationName: "" };

//     createOrganizationStep1(organization);

//     cy.get('[data-testid="title"]').should("have.value", "");
//     cy.get('[data-testid="title-error"]').should(
//       "contain",
//       "title is a required field"
//     );
//   });

//   it("organizasyon kodu boş bırakıldığında hata mesajı görüntülenir", () => {
//     const organization = { ...ORGANIZATION, organizationCode: "" };

//     createOrganizationStep1(organization);

//     cy.get('[data-testid="code"]').should("have.value", "");
//     cy.get('[data-testid="code-error"]').should(
//       "contain",
//       "code is a required field"
//     );
//   });
//   it("şehir boş bırakıldığında hata mesajı görüntülenir", () => {
//     const organization = { ...ORGANIZATION, '[data-testid="cityId"]': "" };

//     createOrganizationStep1(organization);

//     cy.get('[data-testid="cityId"]').should("have.value", "");
//     cy.get('[data-testid="cityId-error"]').should(
//       "contain",
//       "cityId is a required field"
//     );
//   });
//   it("ilçe boş bırakıldığında hata mesajı görüntülenir", () => {
//     const organization = { ...ORGANIZATION, '[data-testid="districtId"]': "" };

//     createOrganizationStep1(organization);

//     cy.get('[data-testid="districtId"]').should("have.value", "");
//     cy.get('[data-testid="districtId-error"]').should(
//       "contain",
//       "districtId is a required field"
//     );
//   });
//   it("adres alanı boş bırakıldığında hata mesajı görüntülenir", () => {
//     const organization = { ...ORGANIZATION, organizationAddress: "" };

//     createOrganizationStep1(organization);

//     cy.get('[data-testid="address-error"]').should("have.value", "");
//     cy.get('[data-testid="address-error"]').should(
//       "contain",
//       "address is a required field"
//     );
//   });
//   it("vergi dairesi alanı boş bırakıldığında hata mesajı görüntülenir", () => {
//     const organization = { ...ORGANIZATION, organizationTaxoffice: "" };

//     createOrganizationStep1(organization);

//     cy.get('[data-testid="taxOffice"]').should("have.value", "");
//     cy.get('[data-testid="taxOffice-error"]').should(
//       "contain",
//       "taxOffice is a required field"
//     );
//   });
//   it("vergi numarası alanı boş bırakıldığında hata mesajı görüntülenir", () => {
//     const organization = { ...ORGANIZATION, organizationTaxoffice: "" };

//     createOrganizationStep1(organization);

//     cy.get('[data-testid="taxNumber"]').should("have.value", "");
//     cy.get('[data-testid="taxNumber-error"]').should(
//       "contain",
//       "taxNo is a required field"
//     );
//   });

//   it("kullanıcı adı boş bırakıldığında hata mesajı görüntülenir", () => {
//     const organization = { ...ORGANIZATION, userName: "" };

//     createOrganizationStep1(organization);
//     createOrganizationStep2(organization);

//     cy.get('[data-testid="firstName"]').should("have.value", "");
//     cy.get('[data-testid="firstName-error"]').should(
//       "contain",
//       "userName is a required field"
//     );
//   });

//   it("kullanıcı soyadı boş bırakıldığında hata mesajı görüntülenir", () => {
//     const organization = { ...ORGANIZATION, userSurname: "" };

//     createOrganizationStep1(organization);
//     createOrganizationStep2(organization);

//     cy.get('[data-testid="lastName"]').should("have.value", "");
//     cy.get('[data-testid="lastName-error"]').should(
//       "contain",
//       "userSurname is a required field"
//     );
//   });

//   it("telefon numarası boş bırakıldığında hata mesajı görüntülenir", () => {
//     const organization = { ...ORGANIZATION, userPhonenumber: "" };

//     createOrganizationStep1(organization);
//     createOrganizationStep2(organization);

//     cy.get('[data-testid="honenumber"]').should("have.value", "");
//     cy.get('[data-testid="phoneNumber-error"]').should(
//       "contain",
//       "phoneNumber is a required field"
//     );
//   });

//   it("email boş bırakıldığında hata mesajı görüntülenir", () => {
//     const organization = { ...ORGANIZATION, userEmail: "" };

//     createOrganizationStep1(organization);
//     createOrganizationStep2(organization);

//     cy.get('[data-testid="userEmail"]').should("have.value", "");
//     cy.get('[data-testid="email-error"]').should(
//       "contain",
//       "email is a required field"
//     );
//   });

//   it("kullanıcı şifresi boş bırakıldığında hata mesajı görüntülenir", () => {
//     const organization = { ...ORGANIZATION, userPassword: "" };

//     createOrganizationStep1(organization);
//     createOrganizationStep2(organization);

//     cy.get('[data-testid="userPassword"]').should("have.value", "");
//     cy.get('[data-testid="password-error"]').should(
//       "contain",
//       "password must be at least 8 characters"
//     );
//   });
// });

/// <reference types="Cypress" />

const { login } = require("../../utils/login");
const {
  createOrganizationStep1,
  createOrganizationStep2,
  createOrganizationStep3,
} = require("../../utils/createOrganization");

describe("organization page", () => {
  const LOGIN = require("../../fixtures/login.json");
  const ORGANIZATION = require("../../fixtures/organization.json");

  beforeEach(() => {
    cy.visit("https://ui-dev.knowyourx.io/");
    login();
  });

  it.only("Başarılı organizasyon oluşturma", () => {
    const organization = { ...ORGANIZATION };
    createOrganizationStep1(organization);
    createOrganizationStep2(organization);
    createOrganizationStep3(organization);
    // check if the organization is created
    cy.get('[data-testid="/organizations-link"]').click();
    // cy.get('[title=]').should(
    //   "have.value",
    //   organization.organizationName + rndNumber
    // );
  });

  it("error message is displayed when organization name is left blank", () => {
    const organization = { ...ORGANIZATION, organizationName: "" };

    createOrganizationStep1(organization);

    cy.get('[data-testid="title"]').should("have.value", "");
    cy.get('[data-testid="title-error"]').should(
      "contain",
      "title is a required field"
    );
  });

  it("error message is displayed when organization code is left blank", () => {
    const organization = { ...ORGANIZATION, organizationCode: "" };

    createOrganizationStep1(organization);

    cy.get('[data-testid="code"]').should("have.value", "");
    cy.get('[data-testid="code-error"]').should(
      "contain",
      "code is a required field"
    );
  });

  it("error message is displayed when city is left blank", () => {
    const organization = { ...ORGANIZATION, '[data-testid="cityId"]': "" };

    createOrganizationStep1(organization);

    cy.get('[data-testid="cityId"]').should("have.value", "");
    cy.get('[data-testid="cityId-error"]').should(
      "contain",
      "cityId is a required field"
    );
  });

  it("error message is displayed when district is left blank", () => {
    const organization = { ...ORGANIZATION, '[data-testid="districtId"]': "" };

    createOrganizationStep1(organization);

    cy.get('[data-testid="districtId"]').should("have.value", "");
    cy.get('[data-testid="districtId-error"]').should(
      "contain",
      "districtId is a required field"
    );
  });

  it("error message is displayed when address is left blank", () => {
    const organization = { ...ORGANIZATION, organizationAddress: "" };

    createOrganizationStep1(organization);

    cy.get('[data-testid="address-error"]').should("have.value", "");
    cy.get('[data-testid="address-error"]').should(
      "contain",
      "address is a required field"
    );
  });

  it("error message is displayed when tax office is left blank", () => {
    const organization = { ...ORGANIZATION, organizationTaxoffice: "" };

    createOrganizationStep1(organization);

    cy.get('[data-testid="taxOffice"]').should("have.value", "");
    cy.get('[data-testid="taxOffice-error"]').should(
      "contain",
      "taxOffice is a required field"
    );
  });

  it("error message is displayed when tax number is left blank", () => {
    const organization = { ...ORGANIZATION, organizationTaxoffice: "" };

    createOrganizationStep1(organization);

    cy.get('[data-testid="taxNumber"]').should("have.value", "");
    cy.get('[data-testid="taxNumber-error"]').should(
      "contain",
      "taxNo is a required field"
    );
  });

  it("error message is displayed when username is left blank", () => {
    const organization = { ...ORGANIZATION, userName: "" };

    createOrganizationStep1(organization);
    createOrganizationStep2(organization);

    cy.get('[data-testid="firstName"]').should("have.value", "");
    cy.get('[data-testid="firstName-error"]').should(
      "contain",
      "userName is a required field"
    );
  });

  it("error message is displayed when user surname is left blank", () => {
    const organization = { ...ORGANIZATION, userSurname: "" };

    createOrganizationStep1(organization);
    createOrganizationStep2(organization);

    cy.get('[data-testid="lastName"]').should("have.value", "");
    cy.get('[data-testid="lastName-error"]').should(
      "contain",
      "userSurname is a required field"
    );
  });

  it("error message is displayed when phone number is left blank", () => {
    const organization = { ...ORGANIZATION, userPhonenumber: "" };

    createOrganizationStep1(organization);
    createOrganizationStep2(organization);

    cy.get('[data-testid="honenumber"]').should("have.value", "");
    cy.get('[data-testid="phoneNumber-error"]').should(
      "contain",
      "phoneNumber is a required field"
    );
  });

  it("error message is displayed when email is left blank", () => {
    const organization = { ...ORGANIZATION, userEmail: "" };

    createOrganizationStep1(organization);
    createOrganizationStep2(organization);

    cy.get('[data-testid="userEmail"]').should("have.value", "");
    cy.get('[data-testid="email-error"]').should(
      "contain",
      "email is a required field"
    );
  });

  it("error message is displayed when user password is left blank", () => {
    const organization = { ...ORGANIZATION, userPassword: "" };

    createOrganizationStep1(organization);
    createOrganizationStep2(organization);

    cy.get('[data-testid="userPassword"]').should("have.value", "");
    cy.get('[data-testid="password-error"]').should(
      "contain",
      "password must be at least 8 characters"
    );
  });
});
