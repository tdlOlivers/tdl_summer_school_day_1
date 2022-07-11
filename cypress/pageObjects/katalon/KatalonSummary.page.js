import BasePage from "../Base.page";
import KatalonHomePage from "../../pageObjects/katalon/KatalonHome.page";

class KatalonSummaryPage extends KatalonHomePage {
  // elements
  static get facility() {
    return cy.get("#facility");
  }

  static get applyForHospitalReadmission() {
    return cy.get("#hospital_readmission");
  }

  static get healthcareProgram() {
    return cy.get("#program");
  }

  static get visitDate() {
    return cy.get("#visit_date");
  }

  static get comment() {
    return cy.get("#comment");
  }
}

export default KatalonSummaryPage;
