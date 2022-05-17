package com.automation.steps;

import com.automation.Pages.HomePage;
import com.automation.Pages.ProductPage;
import com.automation.Pages.WomenCategoryPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class WomenCategoryPageSteps {

    @Given("^I click on 'WOMEN' tab$")
    public void iClickOnWOMENTab() {
        new HomePage().selectWomenTab();
    }

    @Then("^I verify \"([^\"]*)\" women page text$")
    public void iVerifyWomenPageText(String mess) {
        new WomenCategoryPage().verifyWomenText(mess);

    }

    @When("^I click on the product \"([^\"]*)\"$")
    public void iClickOnTheProduct(String menu) throws InterruptedException {
        new WomenCategoryPage().selectProduct(menu);
    }

    @And("^Change quantity \"([^\"]*)\"$")
    public void changeQuantity(String qty) {
        new ProductPage().SelectQuantity(qty);
    }

    @And("^select the size \"([^\"]*)\"$")
    public void selectTheSize(String size) {
        new ProductPage().selectSize(size);
    }

    @And("^select the colour \"([^\"]*)\"$")
    public void selectTheColour(String col) {
        new ProductPage().selectColour(col);
    }

    @And("^click on the 'Add to Cart' button$")
    public void clickOnTheAddToCartButton() {
        new ProductPage().clickOnAddToCartButton();
    }

    @And("^verify the popup message \"([^\"]*)\"$")
    public void verifyThePopupMessage(String mess) {
new ProductPage().verifyProductAddedSuccessfullyMessage(mess);
    }

    @Then("^Click on the 'X' button and close the popup$")
    public void clickOnTheXButtonAndCloseThePopup() {
        new ProductPage().closePopUpMessage();
    }
}
