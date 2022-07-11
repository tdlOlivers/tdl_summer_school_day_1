import DuckDuckGoPage from "../../pageObjects/DuckDuckGo.page";
import KatalonHomePage from "../../pageObjects/katalon/KatalonHome.page";
import KatalonLoginPage from "../../pageObjects/katalon/KatalonLogin.page";
import KatalonMakeAnAppoitmentPage from "../../pageObjects/katalon/KatalonMakeAnAppoitment.page";
import KatalonSummaryPage from "../../pageObjects/katalon/KatalonSummary.page";
import KatalonHistoryPage from "../../pageObjects/katalon/KatalonHistory.page";

describe("example to-do app", () => {
  // Created seperate scenario pack for dukcduckgo after lecture
  describe("duckduckgo", () => {
    beforeEach(() => {
      DuckDuckGoPage.visit();
    });

    it("sum of 2 numbers", () => {
      DuckDuckGoPage.searchField.should("be.visible").type("Calculator{enter}");
      DuckDuckGoPage.calculatorKeyboard
        .contains("2")
        .should("be.visible")
        .click();
      DuckDuckGoPage.sumSign.should("be.visible").click();
      DuckDuckGoPage.calculatorKeyboard
        .contains("7")
        .should("be.visible")
        .click();
      DuckDuckGoPage.calculatorKeyboard
        .contains("=")
        .should("be.visible")
        .click();
      DuckDuckGoPage.calculatorDisplay
        .scrollIntoView()
        .should("have.text", "9");
    });

    it("Divide 7 by 0", () => {
      DuckDuckGoPage.searchField.should("be.visible").type("Calculator{enter}");
      //  Get Number 7
      DuckDuckGoPage.calculatorKeyboard
        .contains("7")
        .should("be.visible")
        .click();
      // Divide by 0
      DuckDuckGoPage.calculatorKeyboard.contains("÷").click();
      DuckDuckGoPage.calculatorKeyboard
        .contains("0")
        .should("be.visible")
        .click();
      DuckDuckGoPage.calculatorKeyboard
        .contains("=")
        .should("be.visible")
        .click();
      // validate that we get "Infinity" message
      DuckDuckGoPage.calculatorDisplay
        .scrollIntoView()
        .should("have.text", "Infinity");
    });

    it("Stopwatch widget", () => {
      // TODO: search for "stopwatch"
      DuckDuckGoPage.searchField.should("be.visible").type("stopwatch{enter}");
      // Click start button
      DuckDuckGoPage.startButton.click();
      // wait for 5 seconds, cy.wait(5000);
      cy.wait(5000);
      DuckDuckGoPage.stopButton.click();
      // Click stop button
      // Validate "00:05."
      DuckDuckGoPage.totalTimeField
        .scrollIntoView()
        .should("contain.text", "00:05.");
    });

    it("Stopwatch widget - Reset button", () => {
      // TODO: search for "stopwatch"
      DuckDuckGoPage.searchField.should("be.visible").type("stopwatch{enter}");
      // Start stopwatch
      DuckDuckGoPage.startButton.click();
      // Click lap multiple times (2..3)
      DuckDuckGoPage.lapButton.click();
      cy.wait(1000);
      DuckDuckGoPage.lapButton.click();
      cy.wait(1000);
      DuckDuckGoPage.lapButton.click();
      // Valdiate that lap time is visible/exists ?
      DuckDuckGoPage.lapTimes.should("have.length", 3);
      // Click reset
      DuckDuckGoPage.resetButton.click();
      // Validate that lap time is not visible/exists
      DuckDuckGoPage.lapTimes.should("have.length", 0);
    });

    it("timer widget", () => {
      // TODO: search for "timer"
      DuckDuckGoPage.searchField.should("be.visible").type("timer{enter}");
      // Set timer to 10 seconds, clear the minutes field
      DuckDuckGoPage.minuteField.clear();
      DuckDuckGoPage.secondsField.type("5");
      DuckDuckGoPage.playButton.click();
      // wait 5 seconds
      cy.wait(5000);
      // validate checkmark is visible after 10 seconds
      DuckDuckGoPage.checkmark.should("be.visible");
    });
  });

  // Created seperate scenario pack for katalon after lecture
  describe("katalon", () => {
    beforeEach(() => {
      KatalonHomePage.visit();
    });

    // https://katalon-demo-cura.herokuapp.com/
    it("Katalon", () => {
      // Click Make Appoitment button
      KatalonHomePage.makeAppoitmentButton.click();
      // --> Create KatalonLoginPage <---
      // Input username
      KatalonLoginPage.usernameField.type("John Doe");
      // Input Password
      KatalonLoginPage.passwordField.type("ThisIsNotAPassword");
      // Click login button
      KatalonLoginPage.loginButton.click();
      // ---> Create KatalonMakeAnappoitmentPage <---
      // Select facility Seoul CURA
      KatalonMakeAnAppoitmentPage.facility.select(
        "Seoul CURA Healthcare Center"
      );
      // Check Apply for hospital
      KatalonMakeAnAppoitmentPage.applyForHospitalReadmission.click();
      // Select Medicaid
      KatalonMakeAnAppoitmentPage.medicaidRadioButton.click();
      // Open widget, select date
      KatalonMakeAnAppoitmentPage.dateWidgetButton.click();
      // set date 30th of July
      KatalonMakeAnAppoitmentPage.dateWidgetDates.contains("30").click();
      KatalonMakeAnAppoitmentPage.body.click();
      // add some comment
      KatalonMakeAnAppoitmentPage.commentSection.type(
        "第八章 第六章五章 第十七章. 第"
      );
      // Click book appoitment button
      KatalonMakeAnAppoitmentPage.bookAppoitmentButton.click();
      // ---> Create KatalonSummaryPage<---
      KatalonSummaryPage.facility.should(
        "have.text",
        "Seoul CURA Healthcare Center"
      );

      KatalonSummaryPage.applyForHospitalReadmission.should("have.text", "Yes");
      KatalonSummaryPage.healthcareProgram.should("have.text", "Medicaid");
      KatalonSummaryPage.visitDate.should("have.text", "30/07/2022");
      KatalonSummaryPage.comment.should(
        "have.text",
        "第八章 第六章五章 第十七章. 第"
      );
    });

    it("Katalon validate that there haven't been any appoitments", () => {
      // Login
      KatalonHomePage.visit();
      KatalonHomePage.makeAppoitmentButton.click();
      // Input username
      KatalonLoginPage.usernameField.type("John Doe");
      // Input Password
      KatalonLoginPage.passwordField.type("ThisIsNotAPassword");
      // Click login button
      KatalonLoginPage.loginButton.click();

      KatalonMakeAnAppoitmentPage.sidebarMenu.should(
        "not.have.class",
        "active"
      );
      // Press stack/burger icon
      KatalonMakeAnAppoitmentPage.stackButton.click();
      // Find element that has active class and
      // validate it with should("have.class", "active")
      KatalonMakeAnAppoitmentPage.sidebarMenu.should("have.class", "active");
      KatalonMakeAnAppoitmentPage.historyOption.click();
      KatalonHistoryPage.historyArea.should("contain.text", "No appointment.");
      // Click history
      // Validate that there are no appoitments
    });
  });
});
