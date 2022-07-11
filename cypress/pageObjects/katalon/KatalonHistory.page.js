import KatalonHomePage from "./KatalonHome.page";

class KatalonHistoryPage extends KatalonHomePage {
  // no appoitment area/element
  static get historyArea() {
    return cy.get("#history div.text-center");
  }
}

export default KatalonHistoryPage;
