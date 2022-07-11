import BasePage from "../Base.page";
import KatalonHomePage from "../../pageObjects/katalon/KatalonHome.page";

class KatalonMakeAnAppoitmentPage extends KatalonHomePage {
  // lots of elements
  static get facility() {
    return cy.get('[id="combo_facility"]');
  }

  static get applyForHospitalReadmission() {
    return cy.get("#chk_hospotal_readmission");
  }

  static get medicaidRadioButton() {
    return cy.get("#radio_program_medicaid");
  }

  static get dateWidgetButton() {
    return cy.get("#txt_visit_date");
  }

  static get dateWidgetDates() {
    return cy.get(".day:not(.old):not(.new)");
  }

  static get commentSection() {
    return cy.get("#txt_comment");
  }

  static get bookAppoitmentButton() {
    return cy.get("#btn-book-appointment");
  }
}

export default KatalonMakeAnAppoitmentPage;
