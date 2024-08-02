// const createOrganizationStep1 = (organization) => {
//   const organizationCode =
//     organization.organizationCode + Math.floor(Math.random() * 100) + 1;

//   cy.get('[data-testid="/organizations-link"]')
//     .contains("Organizasyonlar")
//     .click();

//   cy.get('[data-testid="add-button"]')
//     .contains("Yeni Organizasyon Ekle")
//     .click();

//   if (organization.organizationName) {
//     cy.get('[data-testid="title"]')
//       .type(organization.organizationName)
//       .should("have.value", organization.organizationName);
//   } else {
//     cy.get('[data-testid="title"]').should("have.value", "");
//   }
//   if (organization.organizationCode) {
//     cy.get('[data-testid="code"]')
//       .type(organization.organizationCode)
//       .should("have.value", organization.organizationCode);
//   } else {
//     cy.get('[data-testid="code"]').should("have.value", "");
//   }

//   cy.get('[data-testid="cityId"]').parent().click();
//   cy.get('li[data-value="1"]').click();

//   cy.get('[data-testid="districtId"]').parent().click();
//   cy.get('li[data-value="43"]').click();

//   cy.get('[data-testid="address"]')
//     .type(organization.organizationAddress)
//     .should("have.value", organization.organizationAddress);

//   cy.get('[data-testid="taxOffice"]')
//     .type(organization.organizationTaxoffice)
//     .should("have.value", organization.organizationTaxoffice);

//   cy.get('[data-testid="taxNo"]')
//     .type(organization.organizationTaxnumber)
//     .should("have.attr", "maxLength", "10")
//     .should("have.value", organization.organizationTaxnumber);

//   cy.get('[data-testid="CameraAltIcon"]').eq(0).parent().click();

//   const organizationPhoto = "../../png1.jpg"; // "attachFile" için kütüphane eklemem gerekti, eğer çalışmayan bir fonksiyon görürsen önce bunu araştır.
//   cy.get('input[type="file"]').attachFile(organizationPhoto);

//   cy.get('[data-testid="next-button"]').eq(0).click();
// };

// const createOrganizationStep2 = (organization) => {
//   cy.get('[data-testid="firstName"]')
//     .type(organization.userName)
//     .should("have.value", organization.userName);

//   cy.get('[data-testid="lastName"]')
//     .type(organization.userSurname)
//     .should("have.value", organization.userSurname);

//   cy.get('[data-testid="phoneNumber"]')
//     .type(organization.userPhonenumber)
//     .should("have.value", "0 (500) 000 00 00");

//   cy.get('[data-testid="email"]')
//     .type(organization.userEmail)
//     .should("have.value", organization.userEmail);

//   cy.get('[data-testid="password"]')
//     .type(organization.userPassword)
//     .should("have.value", organization.userPassword);

//   cy.get('[data-testid="CameraAltIcon"]').eq(1).parent().click();

//   const userPhoto = "../../png.png"; // "attachFile" için kütüphane eklemem gerekti, eğer çalışmayan bir fonksiyon görürsen önce bunu araştır.
//   cy.get('input[type="file"]').eq(1).attachFile(userPhoto);

//   // cy.get('input[type="checkbox"][name="roles"][value="2"]').click() // burası tek bir check içindi, altta each'i öğrendik.

//   cy.get('input[type="checkbox"][name="roles"]').each(($el, index, $list) => {
//     if ($el.val() == 3 || $el.val() == 4 || $el.val() == 5 || $el.val() == 6) {
//       $el.click();
//     }
//   });

//   cy.get('[data-testid="next-button"]').eq(1).click();
// };

// const createOrganizationStep3 = (organization) => {
//   cy.get('[data-testid="creditCount"]')
//     .type(organization.licenceCredit)
//     .should("have.value", "01232");

//   cy.get('[data-testid="save-button"]').click();
// };

// module.exports = {
//   createOrganizationStep1,
//   createOrganizationStep2,
//   createOrganizationStep3,
// };

const createOrganizationStep1 = (organization) => {
  const rndNumber = Math.floor(Math.random() * 100) + 1;

  cy.get('[data-testid="/organizations-link"]').click();

  cy.get('[data-testid="add-button"]').click();

  if (organization.organizationName) {
    cy.get('[data-testid="title"]')
      .type(organization.organizationName + rndNumber)
      .should("have.value", organization.organizationName + rndNumber);
  } else {
    cy.get('[data-testid="title"]').should("have.value", "");
  }
  if (organization.organizationCode) {
    cy.get('[data-testid="code"]')
      .type(organization.organizationCode + rndNumber)
      .should("have.value", organization.organizationCode + rndNumber);
  } else {
    cy.get('[data-testid="code"]').should("have.value", "");
  }

  cy.get('[data-testid="cityId"]').parent().click();
  cy.get('li[data-value="1"]').click();

  cy.get('[data-testid="districtId"]').parent().click();
  cy.get('li[data-value="43"]').click();

  cy.get('[data-testid="address"]')
    .type(organization.organizationAddress)
    .should("have.value", organization.organizationAddress);

  cy.get('[data-testid="taxOffice"]')
    .type(organization.organizationTaxoffice)
    .should("have.value", organization.organizationTaxoffice);

  cy.get('[data-testid="taxNo"]')
    .type(organization.organizationTaxnumber)
    .should("have.attr", "maxLength", "10")
    .should("have.value", organization.organizationTaxnumber);

  cy.get('[data-testid="CameraAltIcon"]').eq(0).parent().click();

  const organizationPhoto = "../../png1.jpg"; // You may need to add a library for "attachFile"; if you encounter any issues, investigate this first.
  cy.get('input[type="file"]').attachFile(organizationPhoto);

  cy.get('[data-testid="next-button"]').eq(0).click();
};

const createOrganizationStep2 = (organization) => {
  cy.get('[data-testid="firstName"]')
    .type(organization.userName)
    .should("have.value", organization.userName);

  cy.get('[data-testid="lastName"]')
    .type(organization.userSurname)
    .should("have.value", organization.userSurname);

  cy.get('[data-testid="phoneNumber"]')
    .type(organization.userPhonenumber)
    .should("have.value", "0 (500) 000 00 00");

  cy.get('[data-testid="email"]')
    .type(organization.userEmail)
    .should("have.value", organization.userEmail);

  cy.get('[data-testid="password"]')
    .type(organization.userPassword)
    .should("have.value", organization.userPassword);

  cy.get('[data-testid="CameraAltIcon"]').eq(1).parent().click();

  const userPhoto = "../../png.png"; // You may need to add a library for "attachFile"; if you encounter any issues, investigate this first.
  cy.get('input[type="file"]').eq(1).attachFile(userPhoto);

  cy.get('input[type="checkbox"][name="roles"]').each(($el, index, $list) => {
    if ($el.val() == 3 || $el.val() == 4 || $el.val() == 5 || $el.val() == 6) {
      $el.click();
    }
  });

  cy.get('[data-testid="next-button"]').eq(1).click();
};

const createOrganizationStep3 = (organization) => {
  cy.get('[data-testid="creditCount"]')
    .type(organization.licenceCredit)
    .should("have.value", "01232");

  cy.get('[data-testid="save-button"]').click();
};

module.exports = {
  createOrganizationStep1,
  createOrganizationStep2,
  createOrganizationStep3,
};
