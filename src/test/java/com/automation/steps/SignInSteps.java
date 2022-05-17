package com.automation.steps;

import com.automation.Pages.HomePage;
import com.automation.Pages.SignInPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SignInSteps {
    @Given("^I click on signIn link$")
    public void iClickOnSignInLink() {
        new HomePage().clickOnSignInLink();
    }

    @Then("^I should verify \"([^\"]*)\" authentication message is displayed$")
    public void iShouldVerifyAuthenticationMessageIsDisplayed(String message) {
        new SignInPage().verifyAuthenticationText(message);
    }

    @When("^I enter username \"([^\"]*)\"$")
    public void iEnterUsername(String username) {
        new SignInPage().enterUserNameInTheUserNameField(username);
    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password) {
        new SignInPage().enterPasswordInThePasswordField(password);
    }

    @And("^I click on signIn button$")
    public void iClickOnSignInButton() {
        new SignInPage().clickOnSignInButton();
    }

    @Then("^verify the error message \"([^\"]*)\"$")
    public void verifyTheErrorMessage(String message) {
        new SignInPage().verifyErrorMessage(message);
    }

    @And("^I click on SignOut button$")
    public void iClickOnSignOutButton() {
        new SignInPage().clickOnSignOutButton();
    }

    @Then("^verify that signIn \"([^\"]*)\" link is displayed$")
    public void verifyThatSignInLinkIsDisplayed(String message) {
        new SignInPage().verifySignInLinkIsDisplayed(message);
    }


    @Then("^I verify SignOut Link is displayed \"([^\"]*)\"$")
    public void iVerifySignOutLinkIsDisplayed(String message)  {
        new SignInPage().verifySignOutLinkIsDisplayed(message);
    }
}
