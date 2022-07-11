import BasePage from "../Base.page";
import KatalonHomePage from "./KatalonHome.page";

class KatalonLoginPage extends KatalonHomePage {
  static get usernameField() {
    return cy.get("#txt-username");
  }

  static get passwordField() {
    return cy.get("#txt-password");
  }

  static get loginButton() {
    return cy.get("#btn-login");
  }
}

export default KatalonLoginPage;
