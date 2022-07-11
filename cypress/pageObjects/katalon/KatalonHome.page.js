import BasePage from "../Base.page";

class KatalonHomePage extends BasePage {
  static get url() {
    return "https://katalon-demo-cura.herokuapp.com";
  }

  static get makeAppoitmentButton() {
    return cy.get('[id="btn-make-appointment"]');
  }

  static get stackButton() {
    return cy.get("#menu-toggle");
  }

  static get sidebarMenu() {
    return cy.get("#sidebar-wrapper");
  }

  static get historyOption() {
    return cy.get("[href='history.php#history']");
  }
}

export default KatalonHomePage;
