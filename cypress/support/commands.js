/// <reference types="cypress" />

import assertive from "../Shared/assertive";

const { ASSERTIVE } = assertive.assertive();

Cypress.Commands.add("compareText", (locator, text) => {
  cy.get(locator).should(ASSERTIVE.COMPARE_TEXT, text);
});

Cypress.Commands.add("isVisible", (locator) => {
  cy.get(locator).should(ASSERTIVE.VISIBLE);
});

Cypress.Commands.add("isClickable", (locator) => {
  cy.get(locator).should(ASSERTIVE.VISIBLE);
  cy.get(locator).click();
});

Cypress.Commands.add("verifyUrl", (text) => {
  cy.url().should(ASSERTIVE.INCLUDE_TEXT, text);
});

Cypress.Commands.add("insertText", (locator, text) => {
  cy.get(locator).should(ASSERTIVE.VISIBLE);
  cy.get(locator).type(text);
});

Cypress.Commands.add("quantity", (locator, quantity) => {
  cy.get(locator).should(ASSERTIVE.QUANTITY, quantity);
});

Cypress.Commands.add("getToken", (user, passw) => {
  cy.request({
    method: "POST",
    url: "https://login-i.bmwusa.com/gcdm/oauth/authenticate",
    body: {
      username: user,
      password: passw,
    },
  }).then((token) => {
    console.log("chegou aqui", token);
  });
});
