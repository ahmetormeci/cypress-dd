/// <reference types="Cypress" />
// import app from "../fixtures/app";
import { login } from "../utils/login";

describe("login", () => {
  const LOGIN = require("../fixtures/login.json");
  beforeEach(() => {
    cy.visit("https://ui-dev.knowyourx.io/");
  });

  it("Başarılı giriş", login);

  it("code alanı yanlış girildiğinde hata mesajı görüntülenir", () => {
    cy.get('[data-testid="organizationCode"]')
      .type("{selectall}{backspace}" + LOGIN.organizationCode)
      .should("have.value", "DDTECH");

    cy.get('[data-testid="email"]')
      .type(LOGIN.email)
      .should("have.value", "rootadmin@ddtech.com.tr");

    cy.get('[data-testid="password"]')
      .type(LOGIN.password)
      .should("have.value", "RootAdmin123.!");

    cy.get('[data-testid="login-button"]').click();

    cy.get('[data-testid="code-error"]').should(
      "contain",
      "No valid record found by organization code"
    );
  });

  it("Email alanı boş bırakıldığında hata mesajı görüntülenir", () => {
    cy.get('[data-testid="organizationCode"]')
      .type("{selectall}{backspace}" + LOGIN.organizationCode)
      .should("have.value", "DDTECH");

    cy.get('[data-testid="email"]').should("have.value", "");

    cy.get('[data-testid="password"]')
      .type(LOGIN.password)
      .should("have.value", "RootAdmin123.!");

    cy.get('[data-testid="login-button"]').click();

    cy.get('[data-testid="email-error"]').should(
      "contain",
      "email is a required field"
    );
  });

  it("Şifre alanı boş bırakıldığında hata mesajı görüntülenir", () => {
    cy.get('[data-testid="organizationCode"]')
      .type("{selectall}{backspace}" + LOGIN.organizationCode)
      .should("have.value", "DDTECH");

    cy.get('[data-testid="email"]')
      .type(LOGIN.email)
      .should("have.value", "rootadmin@ddtech.com.tr");

    cy.get('[data-testid="password"]').should("have.value", "");

    cy.get('[data-testid="login-button"]').click();

    cy.get('[data-testid="password-error"]').should(
      "contain",
      "password is a required field"
    );
  });

  it("Email alanına geçersiz değer girildiğinde hata mesajı görüntülenir", () => {
    cy.get('[data-testid="organizationCode"]')
      .type("{selectall}{backspace}" + LOGIN.organizationCode)
      .should("have.value", "DDTECH");

    cy.get('[data-testid="email"]')
      .type("rootadmin")
      .should("have.value", "rootadmin");

    cy.get('[data-testid="password"]')
      .type(LOGIN.password)
      .should("have.value", "RootAdmin123.!");

    cy.get('[data-testid="login-button"]').click();

    cy.get('[data-testid="email-error"]').should(
      "contain",
      "email must be a valid email"
    );
  });

  it("Şifre alanında bulunan göz simgesine tıklandığında şifre görüntülenir", () => {
    cy.get('[data-testid="organizationCode"]')
      .type("{selectall}{backspace}" + LOGIN.organizationCode)
      .should("have.value", LOGIN.organizationCode);

    cy.get('[data-testid="password"]')
      .type(LOGIN.password)
      .should("have.value", "RootAdmin123.!");

    cy.get('[data-testid="password-eye-icon"]').click();
    cy.get('[data-testid="password"]').should("have.attr", "type", "text");

    cy.get('[data-testid="password-eye-icon"]').click();
    cy.get('[data-testid="password"]').should("have.attr", "type", "password");
  });
});
