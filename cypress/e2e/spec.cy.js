/// <reference types="Cypress" />

describe("template spec", () => {
  it("passes", () => {
    const ORGANIZATION = require("../fixtures/organization");
    const organizationCode =
      ORGANIZATION.organizationCode + Math.floor(Math.random() * 1000) + 1;
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

    cy.get('[type="button"]').contains("Yeni Organizasyon Ekle").click();

    cy.get('[name="title"]')
      .type("otodeneme")
      .should("have.value", "otodeneme");
    cy.get('[name="code"]')
      .type(organizationCode)
      .should("have.value", organizationCode);

    cy.get('[data-testid="cityId"]').parent().click(); // bunun parent'ının alınması gerekiyor.
    cy.get('li[data-value="1"]').click(); // neyi seçeceğime karar verirken value'yu öğrenmem gerekiyor.

    cy.get('[name="districtId"]').parent().click();
    cy.get('li[data-value="43"]').click();

    cy.get('[data-testid="address"]')
      .type("adres alanı")
      .should("have.value", "adres alanı");

    cy.get('[data-testid="taxOffice"]')
      .type("tax no alanı")
      .should("have.value", "tax no alanı");

    cy.get('[data-testid="taxNo"]')
      .type("1231231231")
      .should("have.attr", "maxLength", "10");

    cy.get('[data-testid="CameraAltIcon"]').eq(0).parent().click();

    const organizasyonfoto = "../../png1.jpg"; // "attachFile" için kütüphane eklemem gerekti, eğer çalışmayan bir fonksiyon görürsen önce bunu araştır.
    cy.get('input[type="file"]').attachFile(organizasyonfoto);

    cy.get('[data-testid="user.firstName"]').type("ali");

    cy.get('[data-testid="user.lastName"]').type("veli");

    cy.get('[data-testid="user.phoneNumber"]')
      .type("01234567890")
      .should("have.attr", "maxLength", "11");

    cy.get('[data-testid="user.email"]').type("aliveli@otomasyon.com.tr");

    cy.get('[data-testid="user.password"]').type("RootAdmin123.!");

    cy.get('[data-testid="CameraAltIcon"]').eq(1).parent().click();

    const kullanicifoto = "../../png.png"; // "attachFile" için kütüphane eklemem gerekti, eğer çalışmayan bir fonksiyon görürsen önce bunu araştır.
    cy.get('input[type="file"]').attachFile(kullanicifoto);

    // cy.get('input[type="checkbox"][name="roles"][value="2"]').click() // burası tek bir check içindi, altta each'i öğrendik.

    cy.get('input[type="checkbox"][name="roles"]').each(($el, index, $list) => {
      if ($el.val() == 2 || $el.val() == 3) {
        $el.click();
      }
    });

    cy.get('[name="licence.startDate"]').type("20122024");

    cy.get('[name="licence.endDate"]').type("20122025");

    cy.get('[data-testid="licence.creditCount"]').type("30");

    cy.get('[name="licence.status"]').parent().click(); // kardeşim bunun parent'ını alıyorsun işte.
    cy.get('li[data-value="2"]').click();

    cy.get('[type="submit"]').contains("Kaydet").click();
    cy.wait(2000);

    cy.location().should((location) => {
      expect(location.href).to.eq("https://ui-dev.knowyourx.io/organizations");
    });
    cy.get('[data-testid="MoreVertIcon"]').eq(0).parent().click();
    cy.get('[role = "menuitem"]').contains("Düzenle").click();

    cy.get('[name="code"]').should("have.value", organizationCode);

    cy.get('[data-testid="ExpandMoreIcon"]').eq(1).parent().click();

    cy.get('[data-testid="MoreVertIcon"]').eq(0).parent().click();
    cy.get('[role = "menuitem"]').contains("Düzenle").click();

    cy.get('[name="firstName"]')
      .type("{del}{selectall}{backspace}")
      .type("aslan");

    cy.get('[name="lastName"]')
      .type("{del}{selectall}{backspace}")
      .type("parçası");

    cy.get('[data-testid="phoneNumber"]')
      .type("{del}{selectall}{backspace}")
      .type("05551234567");

    cy.get('input[type="checkbox"][name="roles"]').each(($el, index, $list) => {
      if ($el.val() == 3 || $el.val() == 4) {
        $el.click();
      }
    });

    cy.get('[data-testid="email"]')
      .invoke("val")
      .then((copiedText) => {
        cy.get('[type="submit"]').eq(1).contains("Save").click();

        cy.get('[aria-haspopup="true"]').click();
        cy.get('[data-testid="LogoutIcon"]').click();
        cy.location().should((location) => {
          expect(location.href).to.eq("https://ui-dev.knowyourx.io/login");
        });

        cy.get("[name=organizationCode]")
          .type("{del}{selectall}{backspace}")
          .type(organizationCode);
        cy.get('[data-testid="email"]')
          .type(copiedText)
          .should("have.value", copiedText);
      });
    cy.get('[data-testid="password"]')
      .type("RootAdmin123.!")
      .should("have.value", "RootAdmin123.!");
    cy.get('[data-testid="login-button"]').click();
    cy.location().should((location) => {
      expect(location.href).to.eq("https://ui-dev.knowyourx.io/");
    });

    cy.get('a[href="/settings"] span').contains("Ayarlar").click();
    cy.get('[data-testid="phoneNumber"]')
      .type("05555555555")
      .should("have.attr", "maxLength", "11");

    cy.get('[type="submit"]').contains("Kaydet").click();
  });
});
