export class Locators {
  home() {
    return {
      HOME_LOCATOR: {
        TITLE_HOME: ".text-container > .headline-5",
        SUB_TITLE_HOME: ".text-container > :nth-child(3)",
        SUB_TITLE_HOME_2: ".text-container > :nth-child(4)",
        HOW_IT_WORKS:
          ".container--grey > .container__84 > .grid__2col > :nth-child(2) > .headline-5",
        SUB_TITLE_HOW_WORKS:
          ".container--grey > .container__84 > .grid__2col > :nth-child(2) > .content-2",
        QUESTIONS_BMW:
          ":nth-child(4) > .container__84 > .grid__2col > :nth-child(2) > .headline-5",
        SUB_TITLE_HELP:
          ":nth-child(4) > .container__84 > .grid__2col > :nth-child(2) > .content-2",
        TITLE_BMW_CANADA: ".copyright > :nth-child(2)",
        SUB_TITLE_BMW_CANADA: ".copyright > :nth-child(3)",
        LOGO: ".logo__supra-connect",
        BUTTON_LOGIN_PRIMARY: "#headerLogin",
        BUTTON_REGISTER: "#register",
        BUTTON_LOGIN_SECUNDARY: "#login",
        BUTTON_FORGOR_PASSWORD: "#forgotPwd",
        BUTTON_FEQUENTLY_QUESTIONS:
          ".container--grey > .container__84 > .grid__2col > :nth-child(2) > .link",
        BUTTON_CONTACT_US:
          ":nth-child(4) > .container__84 > .grid__2col > :nth-child(2) > .link",
        BUTTON_PRIVACY_POLICY: ":nth-child(1) > .menu__link",
        BUTTON_TERMS_CONDITIONS: ":nth-child(2) > .menu__link",
        BUTTON_ACESSIBILITY_STATEMENT: ":nth-child(3) > .menu__link",
        BUTTON_CONTACT_US_FOOTER: ":nth-child(4) > .menu__link",
        BUTTON_FAQS: ":nth-child(5) > .menu__link",
      },
    };
  }

  login() {
    return {
      LOGIN_LOCATOR: {
        URL_LOGIN:
          "https://login-i.bmwusa.com/oneid/#/login?client=cdca&brand=bmw&country=CA&language=en&scope=authenticate_user%20remote_services%20fupo&response_type=token&state=test&redirect_uri=https%3A%2F%2Ftest.bmw-connecteddrive.ca%2Fen%2Fonelogin.html",
        BMW_ID_LOGIN: ".custom-header-title",
        REGISTER_HERE: ".custom-header-subtitle",
        BUTTON_HERE: ".custom-header-subtitle > a",
        TITLE_BMW_ID: ":nth-child(1) > .custom-field--valid > .custom-label",
        BMW_ID_FIELD: "#email",
        TITLE_PASSWORD: ":nth-child(2) > .custom-field--valid > .custom-label",
        PASSWORD_FIELD: "#password",
        BUTTON_FOGOT_PASSWORD: ".forgot-password > a",
        BUTTON_LOGIN: ".buttons-container > .custom-button",
        BUTTON_REGISTER_NOW: ".secondary",
        BUTTON_LEGAL_NOTICE: ":nth-child(3) > a",
        BUTTON_DATA_PRIVACY: ":nth-child(4) > a",
      },
    };
  }

  addVehicle() {
    return {
      ADD_VEHICLE_LOCATOR: {
        BUTTON_ADD_VEHICLE: ".a-cta__primary m-0 ml-a -sm",
        VIN_FIELD: "#vin",
        ERRO_INVALID_VIN:".js-error-message",
        BUTTON_NEXT: "#confirmVehicle",
        BUTTON_CANCEL: ".form-group > .btn-group > .link",
        TITLE_VIN: "#add-vehicle-1 > :nth-child(1) > .headline-5",
        SUB_TITLE_VIN: "#add-vehicle-1 > :nth-child(1) > .content-2",
        INFO_VIN: ".label",
        BUTTON_PRIVACY_POLICY: ":nth-child(1) > .menu__link",
        BUTTON_TERMS_CONDITIONS: ":nth-child(2) > .menu__link",
        BUTTON_ACESSIBILITY_STATEMENT: ":nth-child(3) > .menu__link",
        BUTTON_CONTACT_US: ":nth-child(4) > .menu__link",
        BUTTON_FAQS: ":nth-child(5) > .menu__link",
        CONFIRM_VEHICLE_TITLE: "#add-vehicle-2-1 > .headline-5",
        CONFIRM_VEHICLE_SUB_TITLE: ".content-2 > .link",
        BUTTON_NEXT_CONFIRM_VEHICLE: "#add-vehicle-2-1 > .btn-group > .cta",
        BUTTON_CANCEL_CONFIRM_VEHICLE: "#add-vehicle-2-1 > .btn-group > .link",
        ACCEPT_TERMS_TITLE: "#add-vehicle-2-2 > .headline-5",
        ACCEPT_TERMS_SUB_TITLE: "#add-vehicle-2-2 > p.content-2",
        CHECK_BOX_TEXT: ".checkbox-btn__custom > .link",
        CHECK_BOX: ".checkmark",
        BUTTON_NEXT_ACCEPT_TERMS: "#activate-services",
        BUTTON_CANCEL_ACCEPT_TERMS: "#add-vehicle-2-2 > .btn-group > .link",
        SELECT_USER_ROLE_TITLE: "#add-vehicle-2-3 > .headline-5",
        SELECT_USER_ROLE_SUB_TITLE:"#add-vehicle-2-3 > :nth-child(3)",
        BUTTON_PRIMARY_USER:":nth-child(5) > .radio-btn__custom",
        PRIMARY_USER_TEXT:"#add-vehicle-2-3 > :nth-child(6)",
        BUTTON_SECUNDARY_USER:":nth-child(8) > .radio-btn__custom",
        SECUNDARY_USER_TEXT:"#add-vehicle-2-3 > :nth-child(9)",
        BUTTON_NEXT_USER_ROLE:"#add-vehicle-2-3 > .btn-group > .cta",
        BUTTON_CANCEL_USER_ROLE:"#add-vehicle-2-3 > .btn-group > .link",
      },
    };
  }
}

const locators = new Locators();
export default locators;
