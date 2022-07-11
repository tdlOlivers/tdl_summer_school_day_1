import BasePage from "./Base.page";

class DuckDuckGoPage extends BasePage {
  static get url() {
    return "https://duckduckgo.com/";
  }

  static get searchField() {
    return cy.get("[id='search_form_input_homepage']");
  }

  static get calculatorKeyboard() {
    return cy.get("[class*='tile__tab__basic']");
  }

  static get sumSign() {
    return cy.get("button[value='+']");
  }

  static get calculatorDisplay() {
    return cy.get("#display");
  }

  static get startButton() {
    return cy.get('button[class="stopwatch__btn start"]');
  }

  static get stopButton() {
    return cy.get("button[class='stopwatch__btn stop']");
  }

  static get totalTimeField() {
    return cy.get("#total_time");
  }

  static get lapButton() {
    return cy.get('button[id="lap_btn"]');
  }

  static get lapTimes() {
    return cy.get(".lap-total");
  }

  static get resetButton() {
    return cy.get("button[id='reset_btn']");
  }

  static get minuteField() {
    return cy.get(".minutes");
  }

  static get secondsField() {
    return cy.get(".time_input .seconds");
  }

  static get playButton() {
    return cy.get(".play_pause");
  }

  static get checkmark() {
    return cy.get(".status_stopped");
  }
}

export default DuckDuckGoPage;
