/// <reference types="cypress" />

import locators from "../../Shared/locators";
import texts from "../../Shared/texts";

const { LOGIN_LOCATOR } = locators.login();
const { LOGIN_TEXT } = texts.login();

export class LoginPage {
  checkUrlPage() {
    cy.verifyUrl(LOGIN_TEXT.URL_LOGIN);
  }

  checkTexts() {
    cy.compareText(LOGIN_LOCATOR.BMW_ID_LOGIN, LOGIN_TEXT.BMW_ID_LOGIN);
    cy.compareText(LOGIN_LOCATOR.REGISTER_HERE, LOGIN_TEXT.REGISTER_HERE);
    cy.compareText(LOGIN_LOCATOR.TITLE_BMW_ID, LOGIN_TEXT.TITLE_BMW_ID);
    cy.compareText(LOGIN_LOCATOR.TITLE_PASSWORD, LOGIN_TEXT.TITLE_PASSWORD);
  }

  checkButton() {
    cy.isVisible(LOGIN_LOCATOR.BUTTON_HERE);
    cy.isVisible(LOGIN_LOCATOR.BUTTON_FOGOT_PASSWORD);
    cy.isVisible(LOGIN_LOCATOR.BUTTON_LOGIN);
    cy.isVisible(LOGIN_LOCATOR.BUTTON_REGISTER_NOW);
    cy.isVisible(LOGIN_LOCATOR.BUTTON_LEGAL_NOTICE);
  }

  checkTextButton() {
    cy.compareText(LOGIN_LOCATOR.BUTTON_HERE, LOGIN_TEXT.BUTTON_HERE);
    cy.compareText(
      LOGIN_LOCATOR.BUTTON_FOGOT_PASSWORD,
      LOGIN_TEXT.BUTTON_FOGOT_PASSWORD
    );
    cy.compareText(LOGIN_LOCATOR.BUTTON_LOGIN, LOGIN_TEXT.BUTTON_LOGIN);
    cy.compareText(
      LOGIN_LOCATOR.BUTTON_REGISTER_NOW,
      LOGIN_TEXT.BUTTON_REGISTER_NOW
    );
    cy.compareText(
      LOGIN_LOCATOR.BUTTON_LEGAL_NOTICE,
      LOGIN_TEXT.BUTTON_LEGAL_NOTICE
    );
    cy.compareText(
      LOGIN_LOCATOR.BUTTON_DATA_PRIVACY,
      LOGIN_TEXT.BUTTON_DATA_PRIVACY
    );
  }

  makeLogin() {
    cy.isVisible(LOGIN_LOCATOR.BMW_ID_FIELD).type(LOGIN_TEXT.USER);
    cy.isVisible(LOGIN_LOCATOR.PASSWORD_FIELD).type(LOGIN_TEXT.PASSWORD_KEY);
    cy.isClickable(LOGIN_LOCATOR.BUTTON_LOGIN);
  }
}

const loginPage = new LoginPage();
export default loginPage;
