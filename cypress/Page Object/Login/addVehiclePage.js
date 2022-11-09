/// <reference types="cypress" />

import locators from "../../Shared/locators";
import texts from "../../Shared/texts";

const { ADD_VEHICLE_LOCATOR } = locators.addVehicle();
const { ADD_VEHICLE_TEXT } = texts.addVehicle();

export class AddVehicle {


  addNewVehicle() {
    cy.isClickable(ADD_VEHICLE_LOCATOR.BUTTON_ADD_VEHICLE);
  }

  addInvalidVin(){
    cy.isClickable(ADD_VEHICLE_LOCATOR.VIN_FIELD).type(ADD_VEHICLE_TEXT.INVALID_VIN);
    cy.isClickable(ADD_VEHICLE_LOCATOR.BUTTON_NEXT);
    cy.compareText(ADD_VEHICLE_LOCATOR.ERRO_INVALID_VIN, ADD_VEHICLE_TEXT.ERRO_INVALID_VIN);

  }

  addNewVin() {
    cy.compareText(ADD_VEHICLE_LOCATOR.TITLE_VIN, ADD_VEHICLE_TEXT.TITLE_VIN);
    cy.compareText(
      ADD_VEHICLE_LOCATOR.SUB_TITLE_VIN,
      ADD_VEHICLE_TEXT.SUB_TITLE_VIN
    );
    cy.compareText(ADD_VEHICLE_LOCATOR.INFO_VIN, ADD_VEHICLE_TEXT.INFO_VIN);
    cy.isVisible(ADD_VEHICLE_LOCATOR.BUTTON_NEXT);
    cy.isVisible(ADD_VEHICLE_LOCATOR.BUTTON_CANCEL);
    cy.isVisible(ADD_VEHICLE_LOCATOR.BUTTON_PRIVACY_POLICY);
    cy.isVisible(ADD_VEHICLE_LOCATOR.BUTTON_TERMS_CONDITIONS);
    cy.isVisible(ADD_VEHICLE_LOCATOR.BUTTON_ACESSIBILITY_STATEMENT);
    cy.isVisible(ADD_VEHICLE_LOCATOR.BUTTON_CONTACT_US);
    cy.isVisible(ADD_VEHICLE_LOCATOR.BUTTON_FAQS);
    cy.compareText(
      ADD_VEHICLE_LOCATOR.BUTTON_NEXT,
      ADD_VEHICLE_TEXT.BUTTON_NEXT
    );
    cy.compareText(
      ADD_VEHICLE_LOCATOR.BUTTON_CANCEL,
      ADD_VEHICLE_TEXT.BUTTON_CANCEL
    );
    cy.compareText(
      ADD_VEHICLE_LOCATOR.BUTTON_PRIVACY_POLICY,
      ADD_VEHICLE_TEXT.BUTTON_PRIVACY_POLICY
    );
    cy.compareText(
      ADD_VEHICLE_LOCATOR.BUTTON_TERMS_CONDITIONS,
      ADD_VEHICLE_TEXT.BUTTON_TERMS_CONDITIONS
    );
    cy.compareText(
      ADD_VEHICLE_LOCATOR.BUTTON_ACESSIBILITY_STATEMENT,
      ADD_VEHICLE_TEXT.BUTTON_ACESSIBILITY_STATEMENT
    );
    cy.compareText(
      ADD_VEHICLE_LOCATOR.BUTTON_CONTACT_US,
      ADD_VEHICLE_TEXT.BUTTON_CONTACT_US
    );
    cy.compareText(
      ADD_VEHICLE_LOCATOR.BUTTON_FAQS,
      ADD_VEHICLE_TEXT.BUTTON_FAQS
    );
    cy.isClickable(ADD_VEHICLE_LOCATOR.VIN_FIELD).type(ADD_VEHICLE_TEXT.VIN);
    cy.isClickable(ADD_VEHICLE_LOCATOR.BUTTON_NEXT);
  }

  confirmVehicle() {
    cy.compareText(
      ADD_VEHICLE_LOCATOR.CONFIRM_VEHICLE_TITLE,
      ADD_VEHICLE_TEXT.CONFIRM_VEHICLE_TITLE
    );
    cy.compareText(
      ADD_VEHICLE_LOCATOR.CONFIRM_VEHICLE_SUB_TITLE,
      ADD_VEHICLE_TEXT.CONFIRM_VEHICLE_SUB_TITLE
    );
    cy.isVisible(ADD_VEHICLE_LOCATOR.BUTTON_NEXT_CONFIRM_VEHICLE);
    cy.isVisible(ADD_VEHICLE_LOCATOR.BUTTON_CANCEL_CONFIRM_VEHICLE);
    cy.compareText(
      ADD_VEHICLE_LOCATOR.BUTTON_NEXT_CONFIRM_VEHICLE,
      ADD_VEHICLE_TEXT.BUTTON_NEXT_CONFIRM_VEHICLE
    );
    cy.compareText(
      ADD_VEHICLE_LOCATOR.BUTTON_CANCEL_CONFIRM_VEHICLE,
      ADD_VEHICLE_TEXT.BUTTON_CANCEL_CONFIRM_VEHICLE
    );
    cy.isClickable(ADD_VEHICLE_LOCATOR.BUTTON_NEXT_CONFIRM_VEHICLE);
  }

  acceptTerms() {
    cy.compareText(
      ADD_VEHICLE_LOCATOR.ACCEPT_TERMS_TITLE,
      ADD_VEHICLE_TEXT.ACCEPT_TERMS_TITLE
    );
    cy.compareText(
      ADD_VEHICLE_LOCATOR.ACCEPT_TERMS_SUB_TITLE,
      ADD_VEHICLE_TEXT.ACCEPT_TERMS_SUB_TITLE
    );
    cy.compareText(
      ADD_VEHICLE_LOCATOR.CHECK_BOX_TEXT,
      ADD_VEHICLE_TEXT.CHECK_BOX_TEXT
    );
    cy.isVisible(ADD_VEHICLE_LOCATOR.CHECK_BOX);
    cy.isVisible(ADD_VEHICLE_LOCATOR.BUTTON_NEXT_ACCEPT_TERMS);
    cy.isVisible(ADD_VEHICLE_LOCATOR.BUTTON_CANCEL_ACCEPT_TERMS);
    cy.compareText(
      ADD_VEHICLE_LOCATOR.BUTTON_NEXT_ACCEPT_TERMS,
      ADD_VEHICLE_TEXT.BUTTON_NEXT_ACCEPT_TERMS
    );
    cy.compareText(
      ADD_VEHICLE_LOCATOR.BUTTON_CANCEL_ACCEPT_TERMS,
      ADD_VEHICLE_TEXT.BUTTON_CANCEL_ACCEPT_TERMS
    );
    cy.isClickable(ADD_VEHICLE_LOCATOR.CHECK_BOX);
    cy.isClickable(ADD_VEHICLE_LOCATOR.BUTTON_NEXT_ACCEPT_TERMS);
  }

  selectUserRole() {
    cy.compareText(
      ADD_VEHICLE_LOCATOR.SELECT_USER_ROLE_TITLE,
      ADD_VEHICLE_TEXT.SELECT_USER_ROLE_TITLE
    );
    cy.compareText(
      ADD_VEHICLE_LOCATOR.SELECT_USER_ROLE_SUB_TITLE,
      ADD_VEHICLE_TEXT.SELECT_USER_ROLE_SUB_TITLE
    );
    cy.compareText(
      ADD_VEHICLE_LOCATOR.PRIMARY_USER_TEXT,
      ADD_VEHICLE_TEXT.PRIMARY_USER_TEXT
    );
    cy.compareText(
      ADD_VEHICLE_LOCATOR.SECUNDARY_USER_TEXT,
      ADD_VEHICLE_TEXT.SECUNDARY_USER_TEXT
    );
    cy.isVisible(ADD_VEHICLE_LOCATOR.BUTTON_PRIMARY_USER);
    cy.isVisible(ADD_VEHICLE_LOCATOR.BUTTON_SECUNDARY_USER);
    cy.isVisible(ADD_VEHICLE_LOCATOR.BUTTON_NEXT_USER_ROLE);
    cy.isVisible(ADD_VEHICLE_LOCATOR.BUTTON_CANCEL_USER_ROLE);
    cy.compareText(
      ADD_VEHICLE_LOCATOR.BUTTON_PRIMARY_USER,
      ADD_VEHICLE_TEXT.BUTTON_PRIMARY_USER
    );
    cy.compareText(
      ADD_VEHICLE_LOCATOR.BUTTON_SECUNDARY_USER,
      ADD_VEHICLE_TEXT.BUTTON_SECUNDARY_USER
    );
    cy.compareText(
      ADD_VEHICLE_LOCATOR.BUTTON_NEXT_USER_ROLE,
      ADD_VEHICLE_TEXT.BUTTON_NEXT_USER_ROLE
    );
    cy.compareText(
      ADD_VEHICLE_LOCATOR.BUTTON_CANCEL_USER_ROLE,
      ADD_VEHICLE_TEXT.BUTTON_CANCEL_USER_ROLE
    );
    cy.isClickable(ADD_VEHICLE_LOCATOR.BUTTON_SECUNDARY_USER);
    cy.isClickable(ADD_VEHICLE_LOCATOR.BUTTON_NEXT_USER_ROLE);
  }
}

const addVehicle = new AddVehicle();
export default addVehicle;