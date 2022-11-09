/// <reference types="cypress" />

import texts from "../Shared/texts";
import homeScreen from "../Page Object/Login/homePage";
import loginPage from "../Page Object/Login/loginPage";
import addVehicle from "../Page Object/Login/addVehiclePage";

const { HOME_TEXT } = texts.home();
const { LOGIN_TEXT } = texts.login();
const { ADD_VEHICLE_TEXT } = texts.addVehicle();

describe.skip("Home page", () => {
  before(() => {
    cy.visit(HOME_TEXT.URL_HOME);
  });

  beforeEach(() => {
    cy.viewport(1280, 720);
  });

  it("Check URL", () => {
    homeScreen.checkUrlPage();
  });

  it("Check texts", () => {
    homeScreen.checkTexts();
  });

  it("Check buttons", () => {
    homeScreen.checkButton();
  });

  it("Check buttons text", () => {
    homeScreen.checkTextButton();
  });
});

describe("Login page", () => {
  before(() => {
    cy.visit(LOGIN_TEXT.URL_LOGIN);
  });

  beforeEach(() => {
    cy.viewport(1280, 720);
  });

  it("Check URL", () => {
    loginPage.checkUrlPage();
  });

  it("Check texts", () => {
    loginPage.checkTexts();
  });

  it("Check buttons", () => {
    loginPage.checkButton();
  });

  it("Check buttons text", () => {
    loginPage.checkTextButton();
  });

  it("Login", () => {
    loginPage.makeLogin();
    cy.wait(5000);
  });
});

describe("Add Vehicle Page", () => {
  before(() => {});

  beforeEach(() => {
    cy.viewport(1280, 720);
  });

  it("Add new vehicle", () => {
    addVehicle.addNewVehicle();
  });

  // // it("Add invalid vehicle", () => {
  // //   addVehicle.addInvalidVin();
  // // });

  // it("Add new VIN", () => {
  //   addVehicle.addNewVin();
  // });

  // it("Confirm vehicle", () => {
  //   addVehicle.confirmVehicle();
  // });

  // it("Accept Terms", () => {
  //   addVehicle.acceptTerms();
  // });

  // it("Select user role", () => {
  //   addVehicle.selectUserRole();
  // });
});
