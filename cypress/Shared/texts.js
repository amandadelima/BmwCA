export class Texts {
  home() {
    return {
      HOME_TEXT: {
        URL_HOME: "https://test.bmw-connecteddrive.ca/",
        URL_PARTIAL: "connecteddrive.ca",
        TITLE_HOME: "BMW ConnectedDrive",
        SUB_TITLE_HOME: "Log in to BMW ConnectedDrive with your BMW ID.",
        SUB_TITLE_HOME_2: "If you do not have a BMW ID, register now.",
        HOW_IT_WORKS: "How it works",
        SUB_TITLE_HOW_WORKS: "A guide to using BMW Digital Services.",
        QUESTIONS_BMW: "Questions about BMW ConnectedDrive?",
        SUB_TITLE_HELP: "Let us help you.",
        TITLE_BMW_CANADA: "BMW Canada Inc.",
        SUB_TITLE_BMW_CANADA:
          "The BMW name, BMW logo, model names, and other trademarks are trademarks of BMW AG.",
        BUTTON_REGISTER: "Register",
        BUTTON_LOGIN_SECUNDARY: "Login",
        BUTTON_FORGOR_PASSWORD: "Forgot password?",
        BUTTON_FEQUENTLY_QUESTIONS: "Frequently Asked Questions",
        BUTTON_CONTACT_US: "Contact Us",
        BUTTON_PRIVACY_POLICY: "Privacy Policy",
        BUTTON_TERMS_CONDITIONS: "Terms & Conditions",
        BUTTON_ACESSIBILITY_STATEMENT: "Accessibility Statement",
        BUTTON_CONTACT_US_FOOTER: "Contact Us",
        BUTTON_FAQS: "FAQs",
      },
    };
  }

  login() {
    return {
      LOGIN_TEXT: {
        URL_LOGIN:
          "https://login-i.bmwusa.com/oneid/#/login?client=cdca&brand=bmw&country=CA&language=en&scope=authenticate_user%20remote_services%20fupo&response_type=token&state=test&redirect_uri=https%3A%2F%2Ftest.bmw-connecteddrive.ca%2Fen%2Fonelogin.html",
        BMW_ID_LOGIN: "BMW ID Login",
        REGISTER_HERE: "Don’t have a BMW ID? Register here.",
        BUTTON_HERE: "here.",
        TITLE_BMW_ID: "BMW ID (email address)",
        TITLE_PASSWORD: "Password",
        BUTTON_FOGOT_PASSWORD: "Forgot Password?",
        BUTTON_LOGIN: "Login",
        BUTTON_REGISTER_NOW: "Register now",
        BUTTON_LEGAL_NOTICE: "Legal Notice",
        BUTTON_DATA_PRIVACY: "Data Privacy",
        USER: "bmwca.esa12@mailinator.com",
        PASSWORD_KEY: "Test#12345",
      },
    };
  }

  addVehicle() {
    return {
      ADD_VEHICLE_TEXT: {
        URL_ADD_VEHICLE: "https://test.bmw-connecteddrive.ca/en/home.html",
        BUTTON_ADD_VEHICLE: "Add Vehicle",
        BUTTON_NEXT: "Next",
        BUTTON_CANCEL: "Cancel",
        TITLE_VIN: "Enter VIN",
        SUB_TITLE_VIN: "Add your vehicle and activate BMW ConnectedDrive.",
        INFO_VIN: "Enter your 17-digit Vehicle Identification Number (VIN) i",
        VIN: "WBACR63030HY23697",
        INVALID_VIN:"WBACR63080",
        ERRO_INVALID_VIN:"Please enter a valid VIN.",
        BUTTON_PRIVACY_POLICY: "Privacy Policy",
        BUTTON_TERMS_CONDITIONS: "Terms & Conditions",
        BUTTON_ACESSIBILITY_STATEMENT: "Accessibility Statement",
        BUTTON_CONTACT_US: "Contact Us",
        BUTTON_FAQS: "FAQs",
        CONFIRM_VEHICLE_TITLE: "Confirm Vehicle",
        CONFIRM_VEHICLE_SUB_TITLE: "Not sure this is your vehicle?",
        BUTTON_NEXT_CONFIRM_VEHICLE: "Next",
        BUTTON_CANCEL_CONFIRM_VEHICLE: "Cancel",
        ACCEPT_TERMS_TITLE: "Accept Terms",
        ACCEPT_TERMS_SUB_TITLE:
          "You must accept the BMW ConnectedDrive Terms and Conditions to activate BMW Digital Services.",
        CHECK_BOX_TEXT: " BMW ConnectedDrive Terms and Conditions ",
        BUTTON_NEXT_ACCEPT_TERMS: "Next",
        BUTTON_CANCEL_ACCEPT_TERMS: "Cancel",
        SELECT_USER_ROLE_TITLE: "Select User Role",
        SELECT_USER_ROLE_SUB_TITLE:"Select your user role to take advantage of the digital services offered by BMW ConnectedDrive in your vehicle, online and on your smartphone.",
        BUTTON_PRIMARY_USER:"Primary User ",
        PRIMARY_USER_TEXT:"Primary user of the vehicle; has full access to make account and settings changes.",
        BUTTON_SECUNDARY_USER:"Secondary User ",
        SECUNDARY_USER_TEXT:"Secondary user of the vehicle; has limited access to make changes.",
        BUTTON_NEXT_USER_ROLE:"Next",
        BUTTON_CANCEL_USER_ROLE:"Cancel",
      },
    };
  }
}

const texts = new Texts();
export default texts;
