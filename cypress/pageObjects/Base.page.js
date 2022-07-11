class BasePage {
  static get url() {
    return "";
  }

  static visit() {
    cy.visit(this.url);
  }

  static get body() {
    return cy.get("body");
  }
}

export default BasePage;
