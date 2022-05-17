package com.automation.steps;

import com.automation.Pages.CreateAccountPage;
import com.automation.Pages.SignInPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CreateAccountSteps {
    @When("^I enter emailAddress \"([^\"]*)\" in email field$")
    public void iEnterEmailAddressInEmailField(String email) {
        new SignInPage().enterEmailAddress(email);
    }

    @And("^I click on create account button$")
    public void iClickOnCreateAccountButton() throws InterruptedException {
        new SignInPage().clickOnCreateAccountButton();
        Thread.sleep(2000);
    }


    @And("^I click on Title \"([^\"]*)\"$")
    public void iClickOnTitle(String arg0) {
    }

    @And("^I enter firstName \"([^\"]*)\"$")
    public void iEnterFirstName(String fName) {
        new CreateAccountPage().enterFirstName(fName);
    }

    @And("^I enter lastname \"([^\"]*)\" in lastname field$")
    public void iEnterLastnameInLastnameField(String lName) {
        new CreateAccountPage().enterLastName(lName);
    }

    @And("^I enter password \"([^\"]*)\" in password field$")
    public void iEnterPasswordInPasswordField(String pass) {
        new CreateAccountPage().enterPassword(pass);
    }

    @And("^I enter firstName \"([^\"]*)\" in address field$")
    public void iEnterFirstNameInAddressField(String fName) {
        new CreateAccountPage().enterAddressName(fName);
    }

    @And("^I enter lastName \"([^\"]*)\" in address field$")
    public void iEnterLastNameInAddressField(String lName) {
        new CreateAccountPage().enterAddressLastName(lName);
    }

    @And("^I enter address \"([^\"]*)\" in address filed$")
    public void iEnterAddressInAddressFiled(String add) {
        new CreateAccountPage().enterAddress(add);
    }

    @And("^I enter city \"([^\"]*)\" in city field$")
    public void iEnterCityInCityField(String city) {
        new CreateAccountPage().enterCity(city);
    }

    @And("^I select State \"([^\"]*)\" from state dropdown$")
    public void iSelectStateFromStateDropdown(String state) {
        new CreateAccountPage().selectStateFromDropDown(state);
    }

    @And("^I enter postalCode \"([^\"]*)\" in postcode field$")
    public void iEnterPostalCodeInPostcodeField(String pCode) {
        new CreateAccountPage().enterPostalCode(pCode);
    }

    @And("^I enter Mobile \"([^\"]*)\" in mobile field$")
    public void iEnterMobileInMobileField(String mob) {
        new CreateAccountPage().enterMobileNumber(mob);
    }

    @And("^I enter \"([^\"]*)\" in future reference field$")
    public void iEnterInFutureReferenceField(String add1) {
        new CreateAccountPage().enterFutureReferenceField(add1);
    }

    @And("^I click on register field$")
    public void iClickOnRegisterField() {
        new CreateAccountPage().clickOnRegisterButton();
    }

    @Then("^I verify My account message \"([^\"]*)\"$")
    public void iVerifyMyAccountMessage(String mess) {
        new CreateAccountPage().verifyRegistrationText(mess);
    }


}
